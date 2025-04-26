# Modern React frontend for AI Safety Incident Log

This project was bootstrapped manually to reside in the `/frontend` folder, but is tracked by the root git repository, as per requirements.

## Features
- Modern UI/UX with Material UI
- View all incidents
- View incident details
- Report new incidents
- Delete incidents

## Scripts

```bash
npm install   # Install dependencies
npm start     # Start the dev server (runs on http://localhost:3000 by default)
```

## API Endpoints
- `GET    /backend/incidents`        : List all incidents
- `POST   /backend/incidents`        : Add new incident
- `GET    /backend/incidents/:id`    : Get incident details
- `DELETE /backend/incidents/:id`    : Delete incident

## Notes
- Ensure the backend is running and CORS is enabled.
- The frontend expects the backend to be accessible at `/backend` (adjust proxy if needed).
