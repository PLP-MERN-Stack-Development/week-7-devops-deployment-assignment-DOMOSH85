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
