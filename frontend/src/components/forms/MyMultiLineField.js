import * as React from "react";
import TextField from "@mui/material/TextField";
import { Controller } from "react-hook-form";

export default function MyMultiLineField(props) {
  const { label, width, placeholder, name, control } = props;

  return (
    <Controller
      name={name}
      control={control}
      render={({
        field: { onChange, value },
        filedState: { error },
        formState,
      }) => (
        <TextField
          id="standard-multiline-static"
          sx={{ width: { width } }}
          label={label}
          multiline
          rows={4}
          defaultValue="Default Value"
          variant="standard"
          placeholder={placeholder}
        />
      )}
    />
  );
}
