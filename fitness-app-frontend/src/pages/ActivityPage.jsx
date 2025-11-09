// src/pages/ActivityPage.jsx
import React, { useEffect, useState } from "react";
import { getActivities, addActivity } from "../services/api";
import ActivityForm from "../components/ActivityForm";
import ActivityList from "../components/ActivityList";
import { Box, Typography, CircularProgress } from "@mui/material";

const ActivityPage = () => {
  const [activities, setActivities] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch all activities
  const fetchActivities = async () => {
    try {
      setLoading(true);
      const res = await getActivities();
      setActivities(res.data);
    } catch (error) {
      console.error("Error fetching activities:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchActivities();
  }, []);

  // When a new activity is added, refresh list
  const handleActivityAdded = async () => {
    await fetchActivities();
  };

  return (
    <Box sx={{ maxWidth: 900, mx: "auto", mt: 4, p: 2 }}>
      <Typography
        variant="h4"
        sx={{ mb: 2, fontWeight: 600, color: "#4A4A6A" }}
      >
        My Fitness Activities
      </Typography>

      <ActivityForm onActivityAdded={handleActivityAdded} />

      {loading ? (
        <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
          <CircularProgress />
        </Box>
      ) : (
        <ActivityList activities={activities} />
      )}
    </Box>
  );
};

export default ActivityPage;
