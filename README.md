# JobHunt – Job Portal for Job Seekers & Employers

JobHunt is a modern, user-friendly job portal that connects **job seekers** with **employers** on a single platform.  
Job seekers can search and apply for jobs, while employers can post jobs, manage applications, and track hiring progress.

---

## 🚀 Features

### 👨‍💼 Job Seeker Features
- User registration & login
- Create and update profile
- Browse and search jobs by role, location, salary, and company
- View detailed job descriptions
- Apply for jobs online
- Track applied jobs status
- Save/bookmark jobs
- Responsive UI for all devices

---

### 🏢 Employer Features
- Employer registration & login
- Post new job openings
- Edit and delete job postings
- View all posted jobs
- Review job applications
- Manage applicants (view profiles & resumes)
- Company profile management
- Dashboard with job & application overview

---

## 🛠️ Tech Stack

### Frontend
- React.js
- Tailwind CSS
- Lucide Icons
- React Router
- Axios

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication
- bcrypt.js

---

## ⚙️ Installation & Setup

Follow the steps below to run **JobHunt** locally on your system.

---

## 🧩 Prerequisites

Make sure you have the following installed:

- Node.js (v16 or above)
- npm or yarn
- MongoDB (local or MongoDB Atlas)
- Git

---

## 📥 Clone the Repository

```bash
git clone https://github.com/vishalbhagat45/JobHunt.git
cd JobHunt
```

---

## 🔧 Backend Setup

```bash
cd backend
npm install
```

### 🔐 Create `.env` file in `backend` folder

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
CLIENT_URL=http://localhost:5173
```

### ▶️ Start Backend Server

```bash
npm start
```

Backend runs on:
```
http://localhost:5000
```

---

## 🎨 Frontend Setup

Open a new terminal:

```bash
cd frontend
npm install
```

### 🔐 Create `.env` file in `frontend` folder

```env
VITE_API_BASE_URL=http://localhost:5000/api
```

### ▶️ Start Frontend Server

```bash
npm run dev
```

Frontend runs on:
```
http://localhost:5173
```

---

## 🚀 Running the Project

| Service   | URL |
|----------|-----|
| Frontend | http://localhost:5173 |
| Backend  | http://localhost:5000 |
| API      | http://localhost:5000/api |

---

## 👥 User Roles

### 👨‍💼 Job Seeker
- Register & Login
- Browse jobs
- Save jobs
- Apply for jobs
- Track application status
- Salary displayed in ₹ Lakh (LPA)

### 🏢 Employer
- Register company
- Post jobs
- Manage job listings
- View applicants
- Update job status

---

## 💰 Salary Format (Indian)

- ₹3 LPA
- ₹5 – ₹10 LPA
- ₹15+ LPA

---

## 🛠 Tech Stack

### Frontend
- React.js
- Tailwind CSS
- Lucide React Icons
- Axios
- Moment.js

### Backend
- Node.js
- Express.js
- MongoDB & Mongoose
- JWT Authentication
- Bcrypt.js

---

## 📁 Project Structure

```
JobHunt/
│
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   └── server.js
│
├── frontend/
│   ├── src/
│   ├── components/
│   ├── pages/
│   └── main.jsx
│
└── README.md
```

---

## 🤝 Contributing

1. Fork the repository
2. Create a new branch
3. Commit your changes
4. Push and create a Pull Request

---

## 📜 License

This project is licensed under the MIT License.

---

## ⭐ Support

If you like this project, please ⭐ star the repository.


