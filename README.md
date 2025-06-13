# VetConnect

VetConnect is a web-based veterinary appointment and records management system.

## Features
- User authentication (JWT)
- Role-based dashboard (Admin & Pet Owner)
- Appointment booking + dashboard view
- Built with Vue.js (frontend) and Node.js/Express (backend)
- MongoDB Atlas integration

## Project Structure
- `frontend/` — Vue.js with Tailwind CSS
- `backend/` — Express API with Mongoose

## Getting Started
Clone the repo and run:

```bash
cd frontend
npm install
npm run dev


cd backend
npm install
npm run dev

env Setup (backend)
Create a .env file with:

MONGO_URI=your-mongo-uri
JWT_SECRET=your-secret


