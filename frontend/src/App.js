import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Container, AppBar, Toolbar, Typography, Button } from "@mui/material";
import IncidentList from "./pages/IncidentList";
import IncidentForm from "./pages/IncidentForm";
import IncidentDetail from "./pages/IncidentDetail";

function App() {
  return (
    <Router>
      <AppBar position="static" color="primary">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            AI Safety Incident Log
          </Typography>
          <Button color="inherit" component={Link} to="/">Incidents</Button>
          <Button color="inherit" component={Link} to="/add">Report Incident</Button>
        </Toolbar>
      </AppBar>
      <Container sx={{ mt: 4 }}>
        <Routes>
          <Route path="/" element={<IncidentList />} />
          <Route path="/add" element={<IncidentForm />} />
          <Route path="/incidents/:id" element={<IncidentDetail />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
