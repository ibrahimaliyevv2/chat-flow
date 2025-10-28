# ChatFlow - Real-time Chat Application

A real-time chat application built with the MERN stack, featuring responsive layout, and messaging capabilities.

## 🚀 Features

- **Real-time Messaging**: Instant message delivery using Socket.io
- **User Authentication**: Secure signup/login with JWT tokens
- **Image Sharing**: Send and receive images in conversations
- **Online Status**: See who's online in real-time
- **Responsive Design**: Works on desktop, tablet, and mobile
- **Profile Management**: Update profile picture and fullname
- **Message History**: Persistent chat history with MongoDB

## 🛠️ Tech Stack

### Frontend
- **React** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Zustand** - State management
- **Socket.io-client** - Real-time communication
- **React Hot Toast** - Showing errors
- **Lucide React** - Icon library

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling
- **Socket.io** - Real-time communication
- **JWT** - JSON Web Tokens for authentication
- **bcryptjs** - Password hashing
- **Cloudinary** - Image hosting and management

## 📋 Prerequisites

Before running this application, make sure you have:
- Node.js (v16 or higher)
- MongoDB Atlas account or local MongoDB instance
- Cloudinary account for image uploads

## 🚀 Getting Started

### 1. Clone the Repository
```bash
git clone https://github.com/yourusername/chatflow.git
cd chatflow
```

### 2. Backend Setup

Navigate to the backend directory and install dependencies:
```bash
cd backend
npm install
```

Create a `.env` file in the backend directory with the following variables:
```env
MONGODB_URI=your_mongodb_connection_string
PORT=5001
JWT_SECRET=your_jwt_secret_key
NODE_ENV=development
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
FRONTEND_URL=http://localhost:5173
```

Start the backend server:
```bash
npm run dev
```

### 3. Frontend Setup

Open a new terminal, navigate to the frontend directory, and install dependencies:
```bash
cd frontend
npm install
```

Create a `.env` file in the frontend directory (if needed for additional configuration).

Start the frontend development server:
```bash
npm run dev
```

### 4. Access the Application

Open your browser and navigate to `http://localhost:5173` to start using ChatFlow!

## 📱 Usage

### Getting Started
1. **Sign Up**: Create a new account with your full name, email, and password
2. **Login**: Sign in with your credentials
3. **Start Chatting**: Select a user from the sidebar to begin a conversation

### Features Guide

#### Sending Messages
- Type your message in the input field
- Press Enter or click the send button to send text messages
- Click the image icon to upload and send images

#### Profile Management
- Click on your profile picture in the navbar to access profile settings
- Update your profile picture by clicking the camera icon
- Edit your full name by clicking the edit button next to your name
- View your account information including member since date

#### Real-time Features
- See online users with green indicators
- Receive instant notifications for new messages
- Messages automatically scroll to show the latest content

## 🔧 API Endpoints

### Authentication
- `POST /api/auth/signup` - User registration
- `POST /api/auth/login` - User login
- `POST /api/auth/logout` - User logout
- `GET /api/auth/check` - Check authentication status
- `PUT /api/auth/update-profile` - Update user profile

### Messages
- `GET /api/messages/users` - Get all users for chat
- `GET /api/messages/:id` - Get messages with specific user
- `POST /api/messages/send/:id` - Send message to user

## 👨‍💻 Author

**Ibrahim Aliyev** - [@ibrahimaliyevv2](https://github.com/ibrahimaliyevv2)

## 🙏 Acknowledgments

- Thanks to the open-source community for the amazing tools and libraries
- Special thanks to the developers of Socket.io, React, and Tailwind CSS
- Inspired by modern chat applications and their user experience

---

**Happy Chatting! 🎉**