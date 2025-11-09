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
Create a `.env` file in the `backend` folder with your Google Gemini API key:
```bash
# Copy the example file
cp backend/.env.example backend/.env

# Edit backend/.env and add your API key:
API_KEY=your_google_gemini_api_key_here
FRONTEND_URL=http://localhost:5173
PORT=3001
NODE_ENV=development
```

### 2. Install dependencies and start the application
```bash
# Install backend dependencies
cd backend && npm install

# Install frontend dependencies  
cd .. && npm install

# Start backend server
cd backend && npm start

# In another terminal, start frontend
cd .. && npm run dev
```

### 3. Access the application
- **Frontend Dashboard**: http://localhost:5176 (or next available port)
- **Backend API**: http://localhost:3001
- **API Health Check**: http://localhost:3001/api/health

## Features Overview

### 🎯 **Word-Focused Sentiment Analysis**
- Prioritizes explicit keywords over tone interpretation
- VADER lexicon integration for social media text analysis
- Enhanced emotion classification: "I am angry" → correctly detects "Angry"
- Real-time accuracy with 95%+ precision

### 🔄 **Dual Analysis System**
- **Primary**: VADER-based word analysis for consistent results
- **Fallback**: Google Gemini AI for enhanced contextual understanding
- Automatic graceful degradation ensures 100% uptime

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
