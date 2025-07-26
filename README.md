🚀 DoShare – Secure File Sharing Platform
DoShare is a modern, responsive, and secure file-sharing application built with Next.js, Firebase, and Clerk, enabling users to upload, manage, and share files via links or email with real-time.

<p align="left"> <img src="https://img.shields.io/badge/Next.js-000?style=for-the-badge&logo=next.js&logoColor=white" /> <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" /> <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" /> <img src="https://img.shields.io/badge/Firebase-FFCA28?style=for-the-badge&logo=firebase&logoColor=black" /> <img src="https://img.shields.io/badge/Clerk-2E3440?style=for-the-badge&logo=clerk&logoColor=white" /> <img src="https://img.shields.io/badge/Nodemailer-4B4B4B?style=for-the-badge&logo=nodemailer&logoColor=white" /> <img src="https://img.shields.io/badge/HyperUI-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white" /> <img src="https://img.shields.io/badge/MerakiUI-14B8A6?style=for-the-badge&logo=tailwindcss&logoColor=white" /> <img src="https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white" /> <img src="https://img.shields.io/badge/Vercel-000?style=for-the-badge&logo=vercel&logoColor=white" /> </p>
📚 Table of Contents
🛠️ Tech Stack

🚀 Installation

📁 Folder Structure

🔐 Features

🌐 Deployment

📬 Contact

🛠️ Tech Stack
Layer	Technology
Frontend	Next.js + React
Styling	Tailwind CSS, HyperUI, MerakiUI
Auth	Clerk
File Storage	Firebase Storage
Mailing	Nodemailer
Testing	Postman
Hosting	Vercel

🚀 Installation
1️⃣ Clone the Repository
bash
Copy
Edit
git clone https://github.com/Suraj-kumar-pattnayak/DoShare.git
cd DoShare
2️⃣ Install Dependencies
bash
Copy
Edit
npm install
3️⃣ Add Environment Variables
Create a .env.local file in the root:

ini
Copy
Edit
CLERK_PUBLISHABLE_KEY=your_clerk_key
CLERK_SECRET_KEY=your_clerk_secret
FIREBASE_API_KEY=your_firebase_key
FIREBASE_PROJECT_ID=your_firebase_project_id
SMTP_EMAIL=your_email@example.com
SMTP_PASSWORD=your_email_password
4️⃣ Run the App Locally
bash
Copy
Edit
npm run dev
5️⃣ Open the App
bash
Copy
Edit
http://localhost:3000
📁 Folder Structure
bash
Copy
Edit
app/
├── _components/          # Reusable UI components (Banner, Header, etc.)
├── _utils/               # Utility functions (email rendering, axios config)
├── (auth)/
│   └── (routes)/         # Auth routes (sign-in, sign-up)
├── (dashboard)/
│   ├── _components/      # Dashboard-specific components
│   └── (routes)/         # Dashboard pages
├── api/send/             # API route for sending emails
├── dP/[fileId]/          # Dynamic file viewer/share route
├── globals.css           # Global styles
├── layout.js             # App layout
└── page.js               # Home page
🔐 Features
✅ Secure user authentication with Clerk
✅ Drag-and-drop file upload with real-time progress tracking
✅ Firebase-powered secure file storage
✅ Share files via public link or email (using Nodemailer)
✅ Clean, modern UI with Tailwind, HyperUI, and MerakiUI
✅ Public file preview/download page
✅ Protected dashboard view for file management
✅ API tested with Postman

🌐 Deployment
✅ Hosted on Vercel
🌍 Live App: https://do-share-five.vercel.app

📬 Contact
Suraj Kumar Pattnayak
GitHub: @Suraj-kumar-pattnayak
