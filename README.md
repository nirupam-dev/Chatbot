# 🚀 AstroChat — Groq AI Chatbot

A space-themed AI chatbot built with **Groq API**. Features a stunning glassmorphism UI over a space background, real-time conversation with Groq (Llama 3), and markdown-rendered responses.

![AstroChat Preview](hero-bg.png)

## Features

- **Groq Integration** — Powered by Groq's Llama 3 70B for ultra-fast, intelligent responses
- **Space Theme** — Beautiful rocket-launch background with translucent glassmorphism panels
- **Markdown Support** — Code blocks, bold, italic, lists rendered beautifully in responses
- **Conversation Memory** — Maintains context across the entire chat session
- **Secure API Handling** — API key stays server-side via `.env`, never exposed to the browser
- **Responsive Design** — Works seamlessly on desktop and mobile

## Tech Stack

- **Frontend:** HTML, CSS, JavaScript (Vanilla)
- **Backend:** Node.js (lightweight HTTP server)
- **AI Model:** Groq (llama3-70b-8192)
- **Fonts:** Space Grotesk + JetBrains Mono

## Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v18 or higher)
- A [Groq API Key](https://console.groq.com/keys)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/nirupam-dev/Gemini-Chatbot.git
   cd Gemini-Chatbot
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Create a `.env` file** in the root directory
   ```
   GROQ_API_KEY=gsk_your_groq_api_key_here
   ```

4. **Start the server**
   ```bash
   npm start
   ```

5. **Open in browser**
   ```
   http://localhost:3456
   ```

## Project Structure

```
Gemini-Chatbot/
├── index.html      # Main HTML structure
├── style.css       # Space theme styling
├── app.js          # Frontend chatbot logic
├── server.js       # Node.js server (API proxy)
├── hero-bg.png     # Space background image
├── package.json    # Node.js dependencies
├── .env            # API key (not tracked)
└── .gitignore      # Git ignore rules
```

## Screenshots

The chatbot features a left-aligned landing page with starter prompts, glassmorphism message bubbles, and a full-bleed space background visible through the translucent UI.

## License

This project is open source and available under the [MIT License](LICENSE).
