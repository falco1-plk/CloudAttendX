# ☁️ CloudAttendX

<div align="center">

# Attendance & Leave Management System

A Full Stack MERN Application designed to streamline employee attendance tracking, leave management, and administrative monitoring through a secure and user-friendly dashboard.

Built using React, Node.js, Express.js, MongoDB Atlas, JWT Authentication, and Tailwind CSS.

</div>

---

# 📌 Project Overview

CloudAttendX is a modern Attendance and Leave Management Platform that enables organizations to efficiently manage employee attendance records and leave requests through a centralized dashboard.

The application provides role-based access for employees and administrators, ensuring secure operations and streamlined workforce management.

Employees can:

- Register and Login securely
- Mark daily attendance
- View attendance history
- Apply for leaves
- Track leave status
- Monitor attendance statistics

Administrators can:

- View employee leave requests
- Approve or reject leaves
- Monitor attendance records
- Manage employee activities

The system uses JWT authentication for security and MongoDB Atlas as a cloud database for storing user, attendance, and leave records.

---

# 🎯 Objectives

The primary goals of CloudAttendX are:

- Automate attendance tracking
- Digitize leave request workflows
- Reduce manual HR processes
- Improve workforce transparency
- Provide analytics and insights
- Ensure secure access management

---

# 🚀 Key Features

## 🔐 Authentication System

### User Registration

Employees can create accounts using:

- Name
- Email
- Password

Passwords are encrypted using Bcrypt before storage.

### User Login

Users can log in securely using:

- Email
- Password

JWT Tokens are generated after successful authentication.

### Protected Routes

Authenticated users can only access:

- Dashboard
- Attendance
- Leave
- Profile
- Admin Pages

Unauthorized users are redirected to Login.

---

# 📊 Attendance Management

Employees can:

### Mark Attendance

Attendance records include:

- User ID
- Date
- Status
- Check In Time
- Check Out Time

### View Attendance History

Users can view all previously marked attendance records.

### Attendance Statistics

Dashboard provides:

- Present Days
- Absent Days
- Attendance Percentage
- Attendance Overview

---

# 📝 Leave Management

Employees can submit leave requests by providing:

- Reason
- From Date
- To Date

Each request is stored with:

- Employee Information
- Leave Duration
- Status

Possible statuses:

- Pending
- Approved
- Rejected

---

# 👨‍💼 Admin Dashboard

The Admin Dashboard enables administrators to:

### View Leave Requests

Admin can see:

- Employee Name
- Email
- Leave Reason
- Leave Dates
- Current Status

### Approve Leave

Updates leave status to:

```
Approved
```

### Reject Leave

Updates leave status to:

```
Rejected
```

All updates are reflected immediately in the database.

---

# 📈 Analytics Dashboard

The dashboard displays:

- Attendance Summary
- Leave Summary
- Employee Statistics
- Attendance Charts
- Recent Activity Logs

Charts are implemented using:

- Recharts

---

# 🏗️ System Architecture

Frontend ↔ Backend API ↔ MongoDB Atlas

### Frontend

Handles:

- User Interface
- Routing
- Authentication State
- API Communication

### Backend

Handles:

- REST APIs
- Authentication
- Attendance Logic
- Leave Logic
- Database Operations

### Database

MongoDB Atlas stores:

- Users
- Attendance Records
- Leave Requests

---

# 🛠️ Technology Stack

## Frontend

- React.js
- Vite
- React Router DOM
- Axios
- Tailwind CSS
- Recharts

## Backend

- Node.js
- Express.js
- JWT
- BcryptJS
- Mongoose
- Dotenv
- Cors

## Database

- MongoDB Atlas

## Version Control

- Git
- GitHub

---

# 📂 Folder Structure

```text
cloudattendx
│
├── frontend
│   ├── src
│   │   ├── pages
│   │   ├── layouts
│   │   ├── routes
│   │   ├── services
│   │   ├── components
│   │   └── context
│   │
│   ├── public
│   └── package.json
│
├── backend
│   ├── config
│   ├── controllers
│   ├── middleware
│   ├── models
│   ├── routes
│   ├── server.js
│   └── package.json
│
├── README.md
└── .gitignore
```

---

# 🔑 Database Models

## User Model

Stores:

- Name
- Email
- Password
- Role
- Department

---

## Attendance Model

Stores:

- User ID
- Date
- Status
- Check In
- Check Out

---

## Leave Model

Stores:

- User Information
- Leave Reason
- From Date
- To Date
- Status

---

# 🔒 Security Features

### Password Encryption

Passwords are hashed using:

```
bcryptjs
```

### JWT Authentication

JWT Tokens secure user sessions.

### Protected Routes

Only authenticated users can access secure pages.

### Environment Variables

Sensitive credentials are stored inside:

```
.env
```

---

# ⚙️ Installation Guide

## Clone Repository

```bash
git clone https://github.com/yourusername/cloudattendx.git
```

---

## Backend Setup

```bash
cd backend
npm install
npm run dev
```

---

## Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

---

# 🌐 Environment Variables

Create:

```env
backend/.env
```

Add:

```env
PORT=5000

MONGO_URI=your_mongodb_atlas_connection_string

JWT_SECRET=your_secret_key
```

---

# 🧪 Testing

Tested Modules:

✅ User Registration

✅ User Login

✅ JWT Authentication

✅ Attendance APIs

✅ Leave APIs

✅ Admin Approval System

✅ MongoDB Atlas Integration

✅ Protected Routes

---

# 📸 Screenshots

Examples:

- Login Page
   ![alt text](image.png)
- Dashboard
![alt text](image-1.png)
- Attendance Page
![alt text](image-3.png)
- Leave Page
![alt text](image-2.png)
- Admin Dashboard
![alt text](image-4.png)
- Analytics Dashboard
![alt text](image-5.png)

---

# 🔮 Future Enhancements

Planned improvements:

- Email Notifications
- Face Recognition Attendance
- QR Attendance System
- Real-time Dashboard
- Payroll Integration
- Mobile Application
- AI Attendance Insights
- Geolocation Based Attendance

---

# 🎓 Learning Outcomes

Through this project I learned:

- MERN Stack Development
- REST API Design
- JWT Authentication
- MongoDB Atlas Integration
- Role-Based Access Control
- State Management
- Frontend-Backend Integration
- Git & GitHub Workflow
- Dashboard Design
- Full Stack Deployment

---

# 🏆 Project Completion

This project was successfully developed as part of the Full Stack Development Program.

---

# 👨‍💻 Developer

### Aishwary Jaiswal

B.Tech CSE (Cloud Computing & Automation)

VIT Bhopal University

GitHub:
https://github.com/falco1-plk

LinkedIn:
(Add your LinkedIn URL)

---

# ⭐ If you found this project useful, consider giving it a star.