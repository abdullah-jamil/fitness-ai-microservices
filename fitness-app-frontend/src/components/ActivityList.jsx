// src/components/ActivityList.jsx
import { Card, CardContent, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import Grid from "@mui/material/Grid2";

const ActivityList = ({ activities }) => {
  const navigate = useNavigate();

  if (!activities || activities.length === 0) {
    return (
      <Typography sx={{ textAlign: "center", mt: 4, color: "#777" }}>
        No activities yet. Add one above!
      </Typography>
    );
  }

  return (
    <Grid container spacing={2} sx={{ mt: 3 }}>
      {activities.map((activity) => (
        <Grid item xs={12} sm={6} md={4} key={activity.id}>
          <Card
            sx={{
              cursor: "pointer",
              borderRadius: "16px",
              background: "linear-gradient(145deg, #ffffff, #f7f7fb)",
              boxShadow: "0 3px 12px rgba(0, 0, 0, 0.05)",
              transition: "transform 0.2s ease, box-shadow 0.2s ease",
              "&:hover": {
                transform: "translateY(-4px)",
                boxShadow: "0 6px 16px rgba(99, 102, 241, 0.2)",
              },
            }}
            onClick={() => navigate(`/activities/${activity.id}`)}
          >
            <CardContent>
              <Typography
                variant="h6"
                sx={{ color: "#4A4A6A", fontWeight: 600, mb: 1 }}
              >
                {activity.type}
              </Typography>
              <Typography>Duration: {activity.duration} min</Typography>
              <Typography>Calories: {activity.caloriesBurned}</Typography>
              <Typography
                variant="body2"
                sx={{ mt: 1, color: "text.secondary", fontSize: "0.85rem" }}
              >
                {new Date(activity.createdAt).toLocaleString()}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default ActivityList;
