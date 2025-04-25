# LeftOnRead

LeftOnRead is a local-first AI assistant that helps users manage and respond to missed or unreplied messages.  
It detects ghosted conversations, retrieves semantically similar past conversations using vector search, and generates personalized reply suggestions using a retrieval-augmented generation (RAG) approach.

---

## ✨ Features

- Import iMessage history securely (from `chat.db`)
- Detect missed or unreplied conversations
- Store conversations locally in SQLite
- Generate semantic vector embeddings for message search
- Retrieve similar past conversations to guide reply suggestions
- Use an LLM to generate personalized, context-aware replies
- Privacy-first: All data remains local unless explicitly configured

---

## 🛠 Tech Stack

- Vite + React + TypeScript (Frontend)
- TailwindCSS (Styling)
- SQLite + Drizzle ORM (Database)
- tRPC (API Layer)
- OpenAI (for embeddings and text generation)
- Local-first development philosophy

---

## 🚀 Getting Started

1. Clone the repository:

```bash
git clone https://github.com/mthupukari/LeftOnRead.git
cd LeftOnRead