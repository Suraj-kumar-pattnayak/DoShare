# 📤 Doshare

A secure and intuitive file-sharing platform built with **Next.js**, **Firebase**, and **Tailwind CSS**. Doshare allows users to seamlessly upload files, generate shareable links, and send them directly via email, all protected by robust user authentication.

<p align="left">
  <img src="https://img.shields.io/badge/Next.js-000?style=for-the-badge&logo=next.js&logoColor=white" />
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" />
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" />
  <img src="https://img.shields.io/badge/Firebase-FFCA28?style=for-the-badge&logo=firebase&logoColor=black" />
  <img src="https://img.shields.io/badge/Clerk-6C47FF?style=for-the-badge&logo=clerk&logoColor=white" />
  <img src="https://img.shields.io/badge/Nodemailer-02A576?style=for-the-badge&logo=nodemailer&logoColor=white" />
  <img src="https://img.shields.io/badge/Vercel-000?style=for-the-badge&logo=vercel&logoColor=white" />
  <img src="https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white" />
</p>

---

## 📚 Table of Contents

- [🛠️ Tech Stack](#️-tech-stack)
- [🚀 Installation](#-installation)
- [📁 Folder Structure](#-folder-structure)
- [🔐 Features](#-features)
- [🌐 Deployment](#-deployment)
- [📬 Contact](#-contact)

---

## 🛠️ Tech Stack

| Layer               | Technology                       |
|---------------------|----------------------------------|
| **Frontend**        | Next.js, React.js                |
| **Backend**         | Next.js API Routes               |
| **Styling**         | Tailwind CSS, HyperUI, MerakiUI  |
| **Authentication**  | Clerk                            |
| **Storage**         | Firebase Storage                 |
| **Email Service**   | Nodemailer                       |
| **API Testing**     | Postman                          |
| **Hosting**         | Vercel                           |

---

## 🚀 Installation

Follow these steps to get the project running locally:

### 1️⃣ Clone the Repository

```bash
git clone [https://github.com/your-username/doshare.git](https://github.com/your-username/doshare.git)
cd doshare
```
### 2️⃣ Install Dependencies
```bash
npm install
```
### 3️⃣ Add Environment Variables
```bash
# Firebase Configuration
NEXT_PUBLIC_FIREBASE_API_KEY=your_firebase_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_firebase_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_firebase_storage_bucket
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_firebase_Messaginger_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_firebase_app_id

# Clerk Authentication
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key

# Nodemailer Configuration
NODEMAILER_EMAIL=your_app_email@gmail.com
NODEMAILER_PW=your_app_password
```
### 4️⃣ Run the App Locally
```bash
npm run dev
```
### 5️⃣ Finally The Output
The application will be available at http://localhost:3000.
---
## 📁 Folder Structure

```bash
app/
├── _components/           # Reusable components (Banner, Header, etc.)
├── _utils/                # Utility functions (Axios, Email rendering)
├── (auth)/                # Authentication pages
│   └── (routes)/          # sign-in / sign-up routes
├── (dashboard)/           # User dashboard area
│   ├── _components/       # Dashboard-specific components
│   └── (routes)/          # Dashboard pages
├── api/send/              # API route for email sending (Nodemailer)
├── dP/[fileId]/           # Public file viewer / downloader
├── globals.css            # Global styles
├── layout.js              # Root layout file
└── page.js                # Main home page
```
---

## 🔐 Features

#### 🔐 Secure user authentication using Clerk
#### 🗃️ Drag & drop file uploads with progress indicator
#### ☁️ Secure file storage using Firebase
#### 📎 Share files via link or email (via Nodemailer)
#### 🖼️ Public download preview page
#### 📁 Authenticated dashboard to manage uploads
#### 🧪 All routes tested via Postman
#### ✨ Styled with Tailwind CSS, HyperUI, MerakiUI

---

## 🌐 Deployment
#### This project is live and deployed using Vercel, with a custom domain set.

✅ Visit Live App (https://do-share-five.vercel.app)

---

## 📬 Contact

### Suraj Kumar Pattnayak
###  📧 (surajkumarpattnayak@gmail.com)

---
