# 🚀 AstroChat — Gemini AI Chatbot

A space-themed AI chatbot built with **Google Gemini API**. Features a stunning glassmorphism UI over a space background, real-time conversation with Gemini, and markdown-rendered responses.

![AstroChat Preview](hero-bg.png)

## Features

- **Google Gemini Integration** — Powered by Gemini 2.0 Flash for fast, intelligent responses
- **Space Theme** — Beautiful rocket-launch background with translucent glassmorphism panels
- **Markdown Support** — Code blocks, bold, italic, lists rendered beautifully in responses
- **Conversation Memory** — Maintains context across the entire chat session
- **Secure API Handling** — API key stays server-side via `.env`, never exposed to the browser
- **Responsive Design** — Works seamlessly on desktop and mobile

## Tech Stack

- **Frontend:** HTML, CSS, JavaScript (Vanilla)
- **Backend:** Node.js (lightweight HTTP server)
- **AI Model:** Google Gemini 2.0 Flash
- **Fonts:** Space Grotesk + JetBrains Mono

## Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v18 or higher)
- A [Google Gemini API Key](https://aistudio.google.com/apikey)

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
   GEMINI_API_KEY=your_gemini_api_key_here
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
