
## Frontend

# News RAG Chatbot Frontend

React-based frontend for interacting with the News RAG Chatbot backend.

### 🛠 Tech Stack

* **React.js** → frontend framework
* **SCSS** → styling
* **Axios** → HTTP requests to backend
* **Environment variables** → for API URL configuration

### 📂 Folder Structure

```
chat-bot-frontend/
├─ src/
│  ├─ App.js          # Main React app
│  ├─ styles/App.scss # Styling
│  └─ ...
├─ package.json
├─ .env                # Environment variables
└─ README.md
```

### ⚡ Features

* Displays chat interface with user & assistant messages.
* Typing effect simulates live AI responses.
* Session-based chats with Redis persistence.
* Reset button clears the chat session.
* Responsive design for mobile & desktop.

### 🚀 Setup Instructions

1. **Clone the repository**

```bash
git clone https://github.com/KSArjun18/RAG-Frontend
cd chat-bot-frontend
```

2. **Install dependencies**

```bash
npm install
```

3. **Set environment variables**

```env
REACT_APP_API_URL=http://localhost:3001
```

4. **Start frontend**

```bash
npm start
```

### 🔍 How it Works

* On load, creates/loads session via backend.
* Sends query via `/chat` endpoint.
* Renders Gemini's response with typing animation.
* Stores chat history in Redis; can be reset via the Reset button.

### 🔧 Potential Improvements

* Persist chat history in local storage or IndexedDB to survive frontend refresh.
* Implement real-time streaming of responses.
* Add advanced UI features like search or conversation export.


