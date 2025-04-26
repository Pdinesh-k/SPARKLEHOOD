# SPARKLEHOOD: AI Safety Incident Log

A full-stack project for logging and managing AI safety incidents. This repository contains both the backend (Flask/Python) and frontend (React/Material UI) in a single git repository.

---

## Features
- Log new AI safety incidents with severity levels
- View a list of all incidents
- View details for each incident
- Delete incidents
- Modern UI/UX with Material UI

---

## Project Structure
```
SPARKLEHOOD/
├── backend/    # Flask REST API
└── frontend/   # React frontend (Material UI)
```

---

## Backend Setup (Flask)

1. **Navigate to the backend directory:**
   ```bash
   cd backend
   ```
2. **Create a virtual environment and activate it:**
   ```bash
   python -m venv venv
   # On Windows:
   venv\Scripts\activate
   # On Mac/Linux:
   source venv/bin/activate
   ```
3. **Install dependencies:**
   ```bash
   pip install -r requirements.txt
   ```
4. **Set environment variables:**
   - Copy or set the following variables in a `.env` file or your shell:
     - `DB_USER`, `DB_PASSWORD`, `DB_HOST`, `DB_PORT`, `DB_NAME`
5. **Run the backend server:**
   ```bash
   python app.py
   ```
   The backend will run at `http://127.0.0.1:5000` by default.

---

## Frontend Setup (React)

1. **Navigate to the frontend directory:**
   ```bash
   cd frontend
   ```
2. **Install dependencies:**
   ```bash
   npm install
   ```
3. **Start the frontend development server:**
   ```bash
   npm start
   ```
   The frontend will run at `http://localhost:3000` by default.

---

## Usage
- Open [http://localhost:3000](http://localhost:3000) in your browser.
- Use the UI to log, view, and delete incidents.
- The frontend communicates with the backend at `http://127.0.0.1:5000`.

---

## Troubleshooting
- Ensure both backend and frontend servers are running.
- If you change the backend port, update the `baseURL` in `frontend/src/api.js`.
- For CORS errors, ensure Flask CORS is enabled in `backend/app.py`.

---

## License
MIT
