import React, { useEffect, useState } from "react";
import { Typography, Card, CardContent, Chip, Button, CircularProgress, Alert } from "@mui/material";
import { useParams, useNavigate } from "react-router-dom";
import api from "../api";

function IncidentDetail() {
  const { id } = useParams();
  const [incident, setIncident] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    api.get(`/incidents/${id}`)
      .then(res => {
        setIncident(res.data);
        setLoading(false);
      })
      .catch(() => {
        setError("Incident not found.");
        setLoading(false);
      });
  }, [id]);

  const handleDelete = async () => {
    try {
      await api.delete(`/incidents/${id}`);
      navigate("/");
    } catch {
      setError("Failed to delete incident.");
    }
  };

  if (loading) return <CircularProgress sx={{ mt: 4 }} />;
  if (error) return <Alert severity="error">{error}</Alert>;
  if (!incident) return null;

  return (
    <Card sx={{ maxWidth: 600, mx: "auto", mt: 4 }}>
      <CardContent>
        <Typography variant="h5" gutterBottom>{incident.title}</Typography>
        <Typography variant="body1" sx={{ mb: 2 }}>{incident.description}</Typography>
        <Chip label={incident.severity} color={
          incident.severity === "High" ? "error" : incident.severity === "Medium" ? "warning" : "success"
        } />
        <Typography variant="caption" display="block" sx={{ mt: 1 }}>
          Reported at: {new Date(incident.reported_at).toLocaleString()}
        </Typography>
        <Button variant="contained" color="error" sx={{ mt: 2 }} onClick={handleDelete}>
          Delete Incident
        </Button>
      </CardContent>
    </Card>
  );
}

export default IncidentDetail;
