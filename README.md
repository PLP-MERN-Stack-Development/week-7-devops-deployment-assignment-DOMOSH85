## Project Structure

```
week-7-devops-deployment-assignment-DOMOSH85/
│
├── client/           # Frontend React application (Vite)
│   ├── public/       # Static assets
│   ├── src/          # Source code
│   │   ├── assets/       # Images and static resources
│   │   ├── components/   # Reusable React components
│   │   ├── hooks/        # Custom React hooks
│   │   ├── pages/        # Page components (routes)
│   │   ├── services/     # API service modules
│   │   ├── tests/        # Frontend tests
│   │   └── utils/        # Utility functions
│   ├── index.html    # Main HTML file
│   ├── package.json  # Frontend dependencies and scripts
│   └── ...           # Vite, Tailwind, and config files
│
├── server/           # Backend Express application
│   ├── middleware/   # Express middleware (e.g., error handling)
│   ├── models/       # Mongoose models (MongoDB)
│   ├── routes/       # API route definitions
│   ├── tests/        # Backend tests
│   ├── server.js     # Entry point for the backend server
│   ├── package.json  # Backend dependencies and scripts
│   └── ...           # Config and environment files
│
├── Week7-Assignment.md  # Assignment instructions
├── README.md            # Project documentation (this file)
└── ...                  # Root-level config and documentation
```

### Key Points

- **client/**: Contains all frontend code, built with React and Vite.
- **server/**: Contains all backend code, built with Express and MongoDB (Mongoose).
- **Week7-Assignment.md**: Assignment instructions and requirements.
- **README.md**: Main documentation file (add this structure section here).

## Tech Stack

**Frontend:**
- React
- Vite
- Tailwind CSS
- JavaScript (ES6+)

**Backend:**
- Node.js
- Express.js
- MongoDB (with Mongoose)
- JavaScript (ES6+)

---

## Deployment Guidelines

### Prerequisites
- Node.js and npm (or pnpm) installed
- MongoDB Atlas or another MongoDB instance
- Accounts on deployment platforms (e.g., Vercel, Netlify for frontend; Render, Railway, or Heroku for backend)

### 1. Environment Variables
- Create a `.env` file in both `client/` and `server/` directories as needed.
- For the frontend (Vite), prefix variables with `VITE_` (e.g., `VITE_API_URL`).
- For the backend, include variables like `MONGODB_URI`, `PORT`, etc.

### 2. Backend Deployment
1. Install dependencies:
   ```
   cd server
   npm install
   # or
   pnpm install
   ```
2. Set up your environment variables in the deployment platform (e.g., Render, Railway, Heroku).
3. Deploy using your platform's instructions (e.g., connect GitHub repo, set build/start commands).

### 3. Frontend Deployment
1. Install dependencies:
   ```
   cd client
   npm install
   # or
   pnpm install
   ```
2. Set up your environment variables in the deployment platform (e.g., Vercel, Netlify).
3. Build the frontend:
   ```
   npm run build
   # or
   pnpm build
   ```
4. Deploy using your platform's instructions (e.g., connect GitHub repo, set build output directory to `dist`).

### 4. Post-Deployment
- Verify both frontend and backend are live and connected.
- Update the README with the deployed URLs.
- Set up monitoring and CI/CD as required.

---

## Deployed Application

- **Frontend (Vercel) URL:** https://week-7-devops-deployment-a-git-ba349e-ogollas-projects-f9ab42c5.vercel.app/
