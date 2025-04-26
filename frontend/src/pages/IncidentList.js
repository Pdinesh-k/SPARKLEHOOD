import React, { useEffect, useState } from "react";
import { Typography, Card, CardContent, CardActions, Button, Grid, Chip, CircularProgress } from "@mui/material";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function IncidentList() {
  const [incidents, setIncidents] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("/backend/incidents")
      .then(res => {
        setIncidents(res.data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (loading) return <CircularProgress sx={{ mt: 4 }} />;

  return (
    <div>
      <Typography variant="h4" gutterBottom>Incidents</Typography>
      <Grid container spacing={3}>
        {incidents.map(incident => (
          <Grid item xs={12} md={6} lg={4} key={incident.id}>
            <Card sx={{ height: "100%" }}>
              <CardContent>
                <Typography variant="h6">{incident.title}</Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>{incident.description.slice(0, 80)}...</Typography>
                <Chip label={incident.severity} color={
                  incident.severity === "High" ? "error" : incident.severity === "Medium" ? "warning" : "success"
                } />
                <Typography variant="caption" display="block" sx={{ mt: 1 }}>
                  Reported at: {new Date(incident.reported_at).toLocaleString()}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" onClick={() => navigate(`/incidents/${incident.id}`)}>Details</Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default IncidentList;
