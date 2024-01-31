import React from "react";
import { Box, Typography } from "@mui/material";
import MyTextField from "./forms/MyTextField";
import { useForm } from "react-hook-form";

const Create = () => {
  const { control } = useForm();

  return (
    <div>
      <Box
        sx={{
          display: "flex",
          width: "100%",
          backgroundColor: "#00003f",
          marginBottom: "10px",
        }}
      >
        <Typography sx={{ marginLeft: "20px", color: "#ffffff" }}>
          Create records
        </Typography>
      </Box>

      <Box
        sx={{
          display: "flex",
          width: "100%",
          boxShadow: 3,
          padding: 4,
          flexDirection: "column",
        }}
      >
        <Box>
          <MyTextField
            label="Name"
            name={"name"}
            control={control}
            placeholder="Provide a project name"
          />
        </Box>
        <Box>Three forms</Box>
      </Box>
    </div>
  );
};

export default Create;
