<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# SentiMind - Unified CX Dashboard

A comprehensive customer experience dashboard that combines real-time sentiment analysis, AI-powered insights, and transaction monitoring.

## 🚀 **WORKING APPLICATION NOW AVAILABLE AT: http://localhost:3001**

## Features

- **Real-time Sentiment Analysis** - Live emotion detection using Google Gemini AI
- **Live Call Analysis** - Real-time audio analysis and agent assistance
- **Customer Journey Dashboard** - Visual analytics and KPI tracking
- **Social Media Monitoring** - Cross-platform feedback analysis
- **Transaction Reviews** - Integration with Knot API for automated reviews
- **AI Assistant** - Intelligent chatbot for CX insights and recommendations

## Architecture

- **Frontend**: React 18 with TypeScript, Vite, and Recharts
- **Backend**: Node.js with Express and Socket.IO
- **AI Integration**: Google Gemini API for natural language processing
- **External APIs**: Knot API for transaction management

## Quick Start

### 1. Set up environment variables
Add your Google Gemini API key to `.env.local`:
```bash
GEMINI_API_KEY=your_actual_api_key_here
API_KEY=your_actual_api_key_here
```

### 2. The application is already running!
- **Production**: http://localhost:3001
- **API Health Check**: http://localhost:3001/api/health

## Development Mode

For development with hot reload:

```bash
# Terminal 1 - Backend
cd backend && npm run dev

# Terminal 2 - Frontend
npm run dev
```

- **Frontend**: http://localhost:5173
- **Backend API**: http://localhost:3001

## API Endpoints

- `GET /api/health` - Health check
- `POST /api/gemini/analyze-transcript` - Analyze customer transcript
- `POST /api/gemini/assistant` - AI assistant responses
- `POST /api/knot/transaction-review` - Initiate transaction review
- `GET /api/dashboard/overview` - Dashboard data
- `GET /api/dashboard/live-updates` - Real-time updates

## Technology Stack

### Frontend
- React 18 with TypeScript
- Vite for build tooling
- Recharts for data visualization
- Socket.IO client for real-time features

### Backend
- Node.js with Express
- Socket.IO for real-time communication
- Google Generative AI for sentiment analysis
- CORS and security middleware

## License

MIT License
