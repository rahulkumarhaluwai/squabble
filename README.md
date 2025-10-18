# 💬 Squabble — A Modern Discord Clone

Squabble is a **real-time communication platform** inspired by Discord.  
Built with **Next.js**, it offers seamless **text, voice, and video chat** experiences — powered by modern web technologies like **Clerk**, **LiveKit**, and **Neon (PostgreSQL)**.

---

## 🚀 Tech Stack

| Category | Technology |
|-----------|-------------|
| **Frontend Framework** | [Next.js](https://nextjs.org/) |
| **Authentication** | [Clerk](https://clerk.com/) |
| **Database** | [Neon (PostgreSQL)](https://neon.tech/) + [Prisma ORM](https://www.prisma.io/) |
| **Video & Audio** | [LiveKit](https://livekit.io/) |
| **File Uploads** | [UploadThing](https://uploadthing.com/) |
| **Styling** | [Tailwind CSS](https://tailwindcss.com/)

---

## ✨ Features

- 🔐 Secure authentication with Clerk  
- 💬 Real-time messaging and channel-based chats  
- 🎙️ Voice and video rooms powered by LiveKit  
- 🖼️ Image & file uploads via UploadThing  
- ⚡ Lightning-fast data access with Neon + Prisma  
- 🧭 Modern responsive UI with Tailwind CSS  
- 🧱 Scalable Next.js architecture  

---

## 🛠️ Installation & Setup

Follow these steps to run **Squabble** locally:

```bash
# 1️⃣ Clone the repository
git clone https://github.com/your-username/squabble.git

# 2️⃣ Navigate into the project
cd squabble

# 3️⃣ Install dependencies
npm install

# 4️⃣ Set up environment variables
cp .env.example .env.local
# Fill in the values for:
# CLERK_API_KEY, DATABASE_URL, LIVEKIT_API_KEY, UPLOADTHING_SECRET, etc.

# 5️⃣ Push Prisma schema to database
npx prisma db push

# 6️⃣ Start the development server
npm run dev
