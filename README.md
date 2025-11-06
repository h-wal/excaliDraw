# 🧩 Real-time Collaborative Chat & Drawing Platform

A full-stack **real-time collaboration app** (inspired by Excalidraw) that enables multiple users to **chat, draw, and interact in shared rooms** — all updated instantly via **WebSockets**.
Built for scalability and maintainability using a **Turborepo monorepo architecture** with **Next.js**, **Express**, **Prisma**, and **PostgreSQL**.

---

## 🚀 Features

* ⚡ **Real-time Collaboration:** Multi-user chat and drawing powered by **WebSockets** (`ws`).
* 💬 **Room-based Messaging:** Create/join chat rooms; all events (join, leave, message) are broadcast live.
* 🔐 **Secure Authentication:** User login/signup via **NextAuth (Credentials + JWT)**.
* 🧠 **Persistent Storage:** User profiles, chat logs, and rooms stored in **PostgreSQL** via **Prisma ORM**.
* 🧱 **Scalable Architecture:** Built as a **Turborepo monorepo** with shared `@repo/db` and config packages.
* 🧩 **Modular UI Components:** Reusable chat window, sidebar, search, and profile sections built with **Next.js App Router** and **Tailwind CSS**.
* 🧰 **Developer Friendly:** Type-safe APIs, ESLint + TypeScript standardization, and rapid local setup via **PNPM workspaces**.

---

## 🧱 Tech Stack

| Layer            | Technologies                                                                 |
| :--------------- | :--------------------------------------------------------------------------- |
| **Frontend**     | Next.js (App Router), Tailwind CSS, TypeScript, NextAuth (Credentials + JWT) |
| **Backend**      | Express.js, Node.js, WebSockets (`ws`), JWT authentication                   |
| **Database**     | Prisma ORM, PostgreSQL                                                       |
| **Architecture** | Turborepo Monorepo, PNPM Workspaces, Shared `@repo/db` and config packages   |
| **Tools & Dev**  | ESLint, Prettier, TypeScript, Turbo Dev Pipeline                             |

---

## 📁 Monorepo Structure

```
/apps
  /web               → Next.js frontend app (chat/drawing UI)
  /server            → Express.js + WebSocket backend
/packages
  /db                → Shared Prisma client + schema
  /config            → Shared ESLint, TSConfig, and env setup
```

---

## ⚙️ Setup & Installation

### 1️⃣ Clone the repository

```bash
git clone https://github.com/<your-username>/realtime-collab.git
cd realtime-collab
```

### 2️⃣ Install dependencies

```bash
pnpm install
```

### 3️⃣ Configure environment variables

Create a `.env` file in both `/apps/web` and `/apps/server`:

#### `/apps/server/.env`

```env
DATABASE_URL=postgresql://user:password@localhost:5432/realtime
JWT_SECRET=your_jwt_secret
```

#### `/apps/web/.env`

```env
NEXTAUTH_SECRET=your_nextauth_secret
NEXTAUTH_URL=http://localhost:3000
NEXT_PUBLIC_WS_URL=ws://localhost:4000
```

### 4️⃣ Run the database migrations

```bash
pnpm db:push
```

### 5️⃣ Start development servers

```bash
pnpm dev
```

Frontend runs on **[http://localhost:3000](http://localhost:3000)**
Backend runs on **[http://localhost:4000](http://localhost:4000)**

---

## 🧩 Core Functionality Overview

### 🔗 Authentication Flow

* Implemented with **NextAuth (Credentials)** strategy.
* Uses **JWT tokens** for session management.
* Securely stores user credentials and tokens in PostgreSQL.

### 💬 Real-time Chat

* Each room creates a WebSocket channel.
* `join`, `leave`, and `message` events are broadcast to all connected clients.
* All messages are persisted via **Prisma** into PostgreSQL.

### 🖋️ Drawing (optional module)

* Collaborative whiteboard using shared state broadcast over WebSockets.
* Optimized throttling to reduce redundant updates.

---

## 🧠 Architecture Diagram

```
 ┌─────────────┐        ┌──────────────┐        ┌─────────────┐
 │   Client     │ <────> │  WebSocket   │ <────> │   Database   │
 │ (Next.js)    │        │   Server     │        │ (PostgreSQL) │
 └─────────────┘        └──────────────┘        └─────────────┘
        │
        ▼
   REST API (Express + Prisma)
```

---

## 🧑‍💻 Key Highlights

* Built **custom `useSocket` React hook** to manage connect/disconnect/error and broadcast events.
* Designed **relational Prisma schema** for users, rooms, and chats.
* Implemented **REST endpoints** for authentication, room management, and chat retrieval.
* Optimized local dev using **Turborepo caching** and **shared TS types** across packages.

---

## 🧪 Example API Routes

| Route                | Method | Description                   |
| -------------------- | ------ | ----------------------------- |
| `/api/auth/signup`   | POST   | Register a new user           |
| `/api/auth/signin`   | POST   | User login with credentials   |
| `/api/rooms`         | GET    | Fetch all chat rooms          |
| `/api/chats/:roomId` | GET    | Fetch chat history for a room |

---
