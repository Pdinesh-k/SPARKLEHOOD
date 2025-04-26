import React, { useState } from "react";
import { Typography, TextField, Button, MenuItem, Paper, Box, Alert } from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const severities = ["Low", "Medium", "High"];

function IncidentForm() {
  const [form, setForm] = useState({ title: "", description: "", severity: "Medium" });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setError("");
    setSuccess(false);
    try {
      await axios.post("/backend/incidents", form);
      setSuccess(true);
      setTimeout(() => navigate("/"), 1200);
    } catch (err) {
      setError(err.response?.data?.error || "Failed to report incident.");
    }
  };

  return (
    <Paper sx={{ p: 3, maxWidth: 500, mx: "auto" }}>
      <Typography variant="h5" gutterBottom>Report New Incident</Typography>
      {error && <Alert severity="error">{error}</Alert>}
      {success && <Alert severity="success">Incident reported!</Alert>}
      <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
        <TextField
          fullWidth
          label="Title"
          name="title"
          value={form.title}
          onChange={handleChange}
          required
          sx={{ mb: 2 }}
        />
        <TextField
          fullWidth
          label="Description"
          name="description"
          value={form.description}
          multiline
          minRows={3}
          onChange={handleChange}
          required
          sx={{ mb: 2 }}
        />
        <TextField
          select
          fullWidth
          label="Severity"
          name="severity"
          value={form.severity}
          onChange={handleChange}
          required
          sx={{ mb: 2 }}
        >
          {severities.map(level => (
            <MenuItem key={level} value={level}>{level}</MenuItem>
          ))}
        </TextField>
        <Button type="submit" variant="contained" color="primary" fullWidth>
          Submit
        </Button>
      </Box>
    </Paper>
  );
}

export default IncidentForm;
