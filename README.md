# 🚀 ResuMate — AI Powered Applicant Tracking System

ResuMate is an AI-powered Applicant Tracking System (ATS) built to help job seekers analyze and improve their resumes using AI-driven feedback. The application evaluates resumes based on ATS standards used in modern hiring processes and provides structured suggestions for improvement.

---

## 📌 Project Overview

ResuMate allows users to upload their resume, analyze it using AI, and receive detailed feedback including ATS score, content quality analysis, structure evaluation, and improvement suggestions.

The project demonstrates an end-to-end AI workflow including authentication, file upload, AI analysis, storage, and dynamic feedback visualization.

---

## ✨ Features

- ✅ AI-powered resume analysis
- ✅ ATS compatibility scoring
- ✅ Resume upload (PDF)
- ✅ Resume preview with feedback
- ✅ Authentication system
- ✅ Persistent storage using KV database
- ✅ Structured AI feedback
- ✅ Dynamic scoring UI
- ✅ Responsive modern interface
- ✅ Resume history management
- ✅ App data wipe utility (development tool)

---

## 🧠 AI Workflow (How It Works)

1. User uploads a resume (PDF)
2. Resume is uploaded to storage
3. PDF is converted to image format
4. AI analyzes resume against job title & description
5. AI returns structured feedback
6. Feedback is stored and rendered in UI

---

## 🛠 Tech Stack

### Frontend
- React
- React Router
- TypeScript
- Vite
- Tailwind CSS

### State Management
- Zustand

### AI & Backend Services
- Puter.js
  - Authentication
  - File Storage
  - AI Processing
  - Key-Value Database

---

## 📁 Project Structure

```
app/
├── components/
│   ├── Navbar.tsx
│   ├── ResumeCard.tsx
│   ├── ScoreCircle.tsx
│   ├── Summary.tsx
│   ├── ATS.tsx
│   └── FileUploader.tsx
│
├── routes/
│   ├── home.tsx
│   ├── upload.tsx
│   ├── auth.tsx
│   ├── resume.$id.tsx
│   └── wipe.tsx
│
├── lib/
│   ├── puter.ts
│   ├── pdf2img.ts
│   └── utils.ts
│
└── app.css
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone Repository

```bash
git clone https://github.com/yourusername/resumate.git
cd resumate
```

### 2️⃣ Install Dependencies

```bash
npm install
```

### 3️⃣ Run Development Server

```bash
npm run dev
```

Application runs at:

```
http://localhost:5173
```

---
