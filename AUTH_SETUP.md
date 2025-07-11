# Authentication System Setup Guide

This guide provides step-by-step instructions for setting up the complete authentication system with MongoDB integration.

## 📋 Features

✅ **User Registration & Login**

- Secure password hashing with bcrypt
- JWT token-based authentication
- Input validation and error handling

✅ **Database Integration**

- MongoDB with Mongoose ODM
- User model with validation
- Automatic password hashing

✅ **Modern UI**

- Responsive design for all screen sizes
- Beautiful login and register pages
- Professional dashboard interface
- Tailwind CSS + Radix UI components

✅ **Security Features**

- Protected routes
- Authentication middleware
- JWT token management
- Password strength validation

## 🚀 Quick Start

### 1. Prerequisites

Make sure you have the following installed:

- Node.js (v18 or higher)
- MongoDB (local installation or MongoDB Atlas)
- npm or yarn package manager

### 2. Environment Setup

1. **Copy environment variables:**

   ```bash
   cp .env.example .env
   ```

2. **Configure your MongoDB connection:**

   ```env
   # For local MongoDB
   MONGODB_URI=mongodb://localhost:27017/fusion-auth

   # For MongoDB Atlas (replace with your connection string)
   MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/fusion-auth

   # JWT Configuration (change in production!)
   JWT_SECRET=your-super-secret-jwt-key-change-this-in-production
   JWT_EXPIRE=7d
   ```

### 3. Install Dependencies

```bash
npm install
```

### 4. Start MongoDB

**For local MongoDB:**

```bash
# On macOS with Homebrew
brew services start mongodb-community

# On Ubuntu/Debian
sudo systemctl start mongod

# On Windows
net start MongoDB
```

**For MongoDB Atlas:**

- Create a free cluster at [MongoDB Atlas](https://www.mongodb.com/atlas)
- Get your connection string
- Update `MONGODB_URI` in `.env`

### 5. Start the Development Server

```bash
npm run dev
```

Your application will be available at: `http://localhost:8080`

## 🎯 Testing the Authentication Flow

### 1. Register a New User

1. Navigate to `http://localhost:8080`
2. You'll be redirected to `/login` since you're not authenticated
3. Click "Create account" to go to the registration page
4. Fill out the form:
   - **Name:** Your full name (min 2 characters)
   - **Email:** Valid email address
   - **Password:** At least 6 characters
   - **Confirm Password:** Must match the password
5. Click "Create Account"
6. Upon successful registration, you'll be logged in and redirected to the dashboard

### 2. Login Flow

1. Go to `/login`
2. Enter your email and password
3. Click "Sign In"
4. You'll be redirected to the protected dashboard

### 3. Protected Routes

- `/` - Redirects to dashboard if authenticated, login if not
- `/dashboard` - Protected route, requires authentication
- `/login` - Public route, redirects to dashboard if already authenticated
- `/register` - Public route, redirects to dashboard if already authenticated

## 🛠️ API Endpoints

### Authentication Endpoints

| Method | Endpoint             | Description       | Protected |
| ------ | -------------------- | ----------------- | --------- |
| POST   | `/api/auth/register` | User registration | No        |
| POST   | `/api/auth/login`    | User login        | No        |
| POST   | `/api/auth/logout`   | User logout       | No        |
| GET    | `/api/auth/profile`  | Get user profile  | Yes       |

### Example API Usage

**Register a new user:**

```bash
curl -X POST http://localhost:8080/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "name": "John Doe",
    "email": "john@example.com",
    "password": "password123"
  }'
```

**Login:**

```bash
curl -X POST http://localhost:8080/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "john@example.com",
    "password": "password123"
  }'
```

**Get profile (with token):**

```bash
curl -X GET http://localhost:8080/api/auth/profile \
  -H "Authorization: Bearer YOUR_JWT_TOKEN"
```

## 🏗️ Architecture Overview

### Backend Structure

```
server/
├── lib/
│   ├── mongodb.ts         # Database connection
│   └── jwt.ts            # JWT utilities
├── models/
│   └── User.ts           # User schema and model
├── middleware/
│   └── auth.ts           # Authentication middleware
├── routes/
│   └── auth.ts           # Authentication routes
└── index.ts              # Server setup
```

### Frontend Structure

```
client/
├── contexts/
│   └── AuthContext.tsx   # Authentication context
├── components/
│   └── ProtectedRoute.tsx # Protected route component
├── pages/
│   ├── Login.tsx         # Login page
│   ├── Register.tsx      # Registration page
│   └── Dashboard.tsx     # Dashboard page
└── App.tsx               # Main app with routing
```

### Shared Types

```
shared/
└── auth.ts               # Shared TypeScript interfaces
```

## 🔧 Configuration

### Environment Variables

| Variable      | Description                | Default                                 |
| ------------- | -------------------------- | --------------------------------------- |
| `MONGODB_URI` | MongoDB connection string  | `mongodb://localhost:27017/fusion-auth` |
| `JWT_SECRET`  | Secret key for JWT signing | Required in production                  |
| `JWT_EXPIRE`  | JWT token expiration time  | `7d`                                    |
| `PORT`        | Server port                | `8080`                                  |
| `NODE_ENV`    | Environment mode           | `development`                           |

### Security Best Practices

1. **Change JWT Secret:** Always use a strong, unique JWT secret in production
2. **HTTPS:** Use HTTPS in production for secure token transmission
3. **Environment Variables:** Never commit sensitive data to version control
4. **Password Policy:** Implement strong password requirements
5. **Rate Limiting:** Add rate limiting for authentication endpoints
6. **Token Expiration:** Use appropriate token expiration times

## 🚀 Deployment

### Build for Production

```bash
npm run build
```

### Start Production Server

```bash
npm start
```

### Environment Setup for Production

1. Set secure environment variables
2. Use a production MongoDB instance
3. Configure HTTPS
4. Set up proper logging
5. Implement rate limiting and security headers

## 📱 Responsive Design

The authentication system is fully responsive and works on:

- 📱 Mobile devices (320px and up)
- 📱 Tablets (768px and up)
- 💻 Desktop computers (1024px and up)
- 🖥️ Large screens (1440px and up)

## 🎨 Customization

### Styling

- Modify `client/global.css` for global styles
- Update `tailwind.config.ts` for theme customization
- Edit component styles in individual page files

### Branding

- Update logo and brand colors in the design system
- Customize the welcome messages and copy
- Add your own brand assets

### Features

- Add email verification
- Implement password reset functionality
- Add social login options
- Enhance user profile management

## 🐛 Troubleshooting

### Common Issues

**MongoDB Connection Error:**

- Ensure MongoDB is running
- Check connection string in `.env`
- Verify network access for MongoDB Atlas

**JWT Token Issues:**

- Check JWT_SECRET is set
- Verify token expiration settings
- Clear browser localStorage if needed

**Build Errors:**

- Run `npm run typecheck` to check TypeScript errors
- Ensure all dependencies are installed
- Check for syntax errors in recent changes

**Port Already in Use:**

- Change PORT in `.env` file
- Kill existing processes using the port

### Need Help?

If you encounter any issues:

1. Check the browser console for errors
2. Review server logs in the terminal
3. Verify your MongoDB connection
4. Ensure all environment variables are set correctly

## 📚 Additional Resources

- [MongoDB Documentation](https://docs.mongodb.com/)
- [Mongoose ODM](https://mongoosejs.com/)
- [JWT.io](https://jwt.io/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Radix UI](https://www.radix-ui.com/)

---

🎉 **Congratulations!** You now have a complete, production-ready authentication system with beautiful UI, secure backend, and responsive design.
