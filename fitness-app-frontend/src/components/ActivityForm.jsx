import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
  Paper,
} from "@mui/material";
import React, { useState } from "react";
import { addActivity } from "../services/api";

const ActivityForm = ({ onActivityAdded }) => {
  const [activity, setActivity] = useState({
    type: "RUNNING",
    duration: "",
    caloriesBurned: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addActivity(activity);
      onActivityAdded();
      setActivity({ type: "RUNNING", duration: "", caloriesBurned: "" });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Paper
      elevation={3}
      sx={{
        maxWidth: 420,
        mx: "auto",
        mt: 4,
        p: 4,
        borderRadius: "16px",
        background: "linear-gradient(145deg, #ffffff, #f7f7fb)",
        boxShadow: "0 4px 18px rgba(0, 0, 0, 0.05)",
      }}
    >
      <Typography
        variant="h5"
        align="center"
        sx={{
          fontWeight: 600,
          mb: 3,
          color: "#4A4A6A",
          letterSpacing: "0.5px",
        }}
      >
        Log Activity
      </Typography>

      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
          outline: "none",
          border: "none",
        }}
      >
        <FormControl fullWidth variant="outlined">
          <InputLabel>Activity Type</InputLabel>
          <Select
            value={activity.type}
            onChange={(e) => setActivity({ ...activity, type: e.target.value })}
            label="Activity Type"
            sx={{
              borderRadius: "12px",
              backgroundColor: "#fafafa",
            }}
          >
            <MenuItem value="RUNNING">Running</MenuItem>
            <MenuItem value="WALKING">Walking</MenuItem>
            <MenuItem value="CYCLING">Cycling</MenuItem>
          </Select>
        </FormControl>

        <TextField
          fullWidth
          label="Duration (Minutes)"
          type="number"
          variant="outlined"
          value={activity.duration}
          onChange={(e) =>
            setActivity({ ...activity, duration: e.target.value })
          }
          sx={{
            "& .MuiOutlinedInput-root": {
              borderRadius: "12px",
              backgroundColor: "#fafafa",
            },
          }}
        />

        <TextField
          fullWidth
          label="Calories Burned"
          type="number"
          variant="outlined"
          value={activity.caloriesBurned}
          onChange={(e) =>
            setActivity({ ...activity, caloriesBurned: e.target.value })
          }
          sx={{
            "& .MuiOutlinedInput-root": {
              borderRadius: "12px",
              backgroundColor: "#fafafa",
            },
          }}
        />

        <Button
          type="submit"
          variant="contained"
          sx={{
            mt: 1,
            py: 1.2,
            borderRadius: "12px",
            textTransform: "none",
            fontWeight: 600,
            background: "linear-gradient(135deg, #8b5cf6 0%, #6366f1 100%)",
            boxShadow: "0 3px 8px rgba(99, 102, 241, 0.3)",
            "&:hover": {
              background: "linear-gradient(135deg, #7c3aed 0%, #4f46e5 100%)",
              boxShadow: "0 4px 10px rgba(99, 102, 241, 0.4)",
            },
          }}
        >
          Add Activity
        </Button>
      </Box>
    </Paper>
  );
};

export default ActivityForm;
