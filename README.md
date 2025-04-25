# User Feedback Management System

A modern web application for collecting and managing user feedback, built with a robust tech stack and following best practices.

## 🚀 Tech Stack

### Frontend
- **React** - A JavaScript library for building user interfaces
- **TypeScript** - For type-safe JavaScript development
- **Vite** - Next-generation frontend tooling
- **Tailwind CSS** - Utility-first CSS framework
- **TanStack Router** - Type-safe routing for React applications
- **Axios** - Promise-based HTTP client for the browser and node.js

### Backend
- **Node.js** - JavaScript runtime environment
- **Express** - Web framework for Node.js
- **PostgreSQL** - Relational Database
- **Prisma ** - DatabaseORM


### UI Components
- **Button** - Customizable button component with variants
- **Card** - Flexible card component for content display
- **Select** - Accessible select component with custom styling
- **Tooltip** - Tooltip component for additional information
- **Badge** - Badge component for status and labels
- **Form** - Form components with validation
- **Input** - Custom input component
- **Textarea** - Textarea component for multi-line input
- **Label** - Label component for form elements
- **Radio Group** - Radio button group component

## 🛠️ Features

- **Feedback Collection**
  - User-friendly feedback form
  - Multiple feedback categories (Feature, Bug, Suggestion)
  - Rich text input support
  - Form validation

- **Dashboard**
  - Category-based filtering
  - Date-based sorting
  - Responsive grid layout

- **UI/UX**
  - Modern and clean design
  - Responsive layout
  - Accessible components

## 📦 Installation

1. Clone the repository:
   ```bash
   git clone git@github.com:SaiSawant1/userfeedback.git
   cd userfeedback
   ```

2. Install all dependencies:
   ```bash
   # Install root dependencies (including concurrently)
   npm install

   # Install frontend and backend dependencies
   npm run install:all
   ```

3. Start both frontend and backend:
   ```bash
   # Start both frontend and backend servers
   npm start
   ```

   Or start them individually:
   ```bash
   # Start only frontend
   npm run start:frontend

   # Start only backend
   npm run start:backend
   ```

## 🔧 Development

### Available Scripts

```bash
# Install all dependencies
npm install && npm run install:all

# Start both frontend and backend
npm start

# Start only frontend
npm run start:frontend

# Start only backend
npm run start:backend

# Build both frontend and backend
npm run build

# Build only frontend
npm run build:frontend

# Build only backend
npm run build:backend
```

### Environment Variables

Create `.env` files in backend directory:

Backend (.env):
```env
PORT=3000
DATABASE_URL="DATABSAE_URL_LINKE_PUBLIC"
```

## 🙏 Acknowledgments

- [Tailwind CSS](https://tailwindcss.com/) for utility-first CSS
- [TanStack](https://tanstack.com/) for routing and state management
- [Vite](https://vitejs.dev/) for fast development experience 
