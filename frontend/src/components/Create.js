import React from "react";
import { useForm } from "react-hook-form";
import { Box, Typography } from "@mui/material";
import MyTextField from "./forms/MyTextField";
import MySelectField from "./forms/MySelectField";
import MyMultiLineField from "./forms/MyMultiLineField";
import MyDatePickerField from "./forms/MyDatePickerField";

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

          <MyDatePickerField label="Start date" name={"start_date"} control={control} />

          <MyDatePickerField label="End date" name={"end_date"} control={control} />
        </Box>
      </Box>
    </div>
  );
};

export default Create;
