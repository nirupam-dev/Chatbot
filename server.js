const http = require('http');
const fs = require('fs');
const path = require('path');
require('dotenv').config();

const PORT = 3456;
const GROQ_KEY = (process.env.GROQ_API_KEY || '').trim().replace(/['"]/g, '');
const GROQ_MODEL = 'llama3-70b-8192';
const GROQ_URL = `https://api.groq.com/openai/v1/chat/completions`;

const MIME = {
  '.html': 'text/html',
  '.css':  'text/css',
  '.js':   'text/javascript',
  '.jpg':  'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.png':  'image/png',
  '.svg':  'image/svg+xml',
  '.ico':  'image/x-icon',
  '.json': 'application/json',
  '.webp': 'image/webp',
};

const server = http.createServer(async (req, res) => {
  // CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.writeHead(204);
    return res.end();
  }

  // API proxy endpoint
  if (req.method === 'POST' && req.url === '/api/chat') {
    let body = '';
    req.on('data', chunk => { body += chunk; });
    req.on('end', async () => {
      try {
        const payload = JSON.parse(body);

        const response = await fetch(GROQ_URL, {
          method: 'POST',
          headers: { 
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${GROQ_KEY}`
          },
          body: JSON.stringify(payload),
        });

        const data = await response.json();
        res.writeHead(response.ok ? 200 : response.status, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(data));
      } catch (err) {
        res.writeHead(500, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: { message: err.message } }));
      }
    });
    return;
  }

  // Static file serving
  let urlPath = req.url.split('?')[0]; // strip query string
  let filePath = urlPath === '/' ? '/index.html' : decodeURIComponent(urlPath);
  filePath = path.join(__dirname, filePath);

  const ext = path.extname(filePath).toLowerCase();
  const mime = MIME[ext] || 'application/octet-stream';

  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      return res.end('404 Not Found');
    }
    res.writeHead(200, { 'Content-Type': mime });
    res.end(data);
  });
});

server.listen(PORT, () => {
  console.log(`\n  ✦ AstroChat server running at http://localhost:${PORT}\n`);
  if (!GROQ_KEY) {
    console.log('  ⚠ Warning: GROQ_API_KEY not found in .env file\n');
  }
});
