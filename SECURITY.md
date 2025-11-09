# 🔐 Security & API Key Management

## ⚠️ IMPORTANT: Protecting Your API Keys

This project uses sensitive API keys for OpenAI and Google Gemini. **NEVER commit real API keys to the repository.**

### 🛡️ Security Setup

1. **Copy the example environment file:**
   ```bash
   cd backend
   cp .env.example .env
   ```

2. **Add your real API keys to `.env` (NOT `.env.example`):**
   ```bash
   # Replace with your actual keys
   OPENAI_API_KEY=sk-your-actual-openai-key-here
   API_KEY=your-actual-gemini-key-here
   ```

3. **The `.env` file is automatically ignored by git** - never remove it from `.gitignore`

### 🔑 Getting API Keys

#### OpenAI API Key
1. Go to [OpenAI Platform](https://platform.openai.com/account/api-keys)
2. Create a new API key
3. Copy and paste into your `.env` file

#### Google Gemini API Key
1. Go to [Google AI Studio](https://console.cloud.google.com/apis/api/generativelanguage.googleapis.com/)
2. Enable the Generative Language API
3. Create credentials (API key)
4. Copy and paste into your `.env` file

### 🚨 Security Checklist

- [ ] `.env` file contains real keys (for local development only)
- [ ] `.env.example` contains placeholder values only
- [ ] Real API keys are never committed to git
- [ ] Team members know to create their own `.env` files
- [ ] API keys are kept secret and not shared in chat/email

### 🔄 For Team Members

When you clone this repository:
1. Copy `backend/.env.example` to `backend/.env`
2. Replace placeholder values with your own API keys
3. Never commit the `.env` file

### 🚨 If API Keys Are Exposed

If you accidentally commit API keys:
1. **Immediately revoke/regenerate the exposed keys**
2. Update your `.env` file with new keys
3. Use `git filter-branch` or BFG Repo-Cleaner to remove from git history
4. Force push the cleaned history

---

**Remember: API keys are like passwords - keep them secret! 🤐**