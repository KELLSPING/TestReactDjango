import { React, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Box, Button, Typography } from "@mui/material";
import MyTextField from "./forms/MyTextField";
import MySelectField from "./forms/MySelectField";
import MyMultiLineField from "./forms/MyMultiLineField";
import MyDatePickerField from "./forms/MyDatePickerField";
import AxiosInstancce from "./Axios";
import Dayjs from "dayjs";
import { useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const Create = () => {
  const [projectmanager, setProjectmanager] = useState();
  const [loading, setLoading] = useState(true);

  const hardcoded_options = [
    { id: "", name: "None" },
    { id: "Open", name: "Open" },
    { id: "In progress", name: "In progress" },
    { id: "Completed", name: "Completed" },
  ];

  const GetData = () => {
    AxiosInstancce.get(`projectmanager/`).then((res) => {
      setProjectmanager(res.data);
      console.log(res.data);
      setLoading(false);
    });
  };

  useEffect(() => {
    GetData();
  }, []);

  const navigate = useNavigate();

  const defaultValues = {
    name: "",
    comments: "",
    status: "",
    start_date: Dayjs(),
    end_date: Dayjs(),
  };

  const schema = yup.object({
    name: yup.string().required("Name is required."),
    projectmanager: yup.string().required("Project manager is required."),
    status: yup.string().required("Status is required."),
    comments: yup.string(),
    start_date: yup.date().required("Start date is required."),
    end_date: yup
      .date()
      .required("End date is required.")
      .min(yup.ref("start_date"), '"End date" cannot before "Start date".'),
  });

  const { handleSubmit, control } = useForm({
    defaultValues: defaultValues,
    resolver: yupResolver(schema),
  });

  const submission = (data) => {
    // console.log(data)

    const StartDate = Dayjs(data.start_date["$d"]).format("YYYY-MM-DD");
    // console.log(StartDate)
    const EndDate = Dayjs(data.end_date["$d"]).format("YYYY-MM-DD");
    // console.log(EndDate)

    AxiosInstancce.post(`project/`, {
      name: data.name,
      projectmanager: data.projectmanager,
      status: data.status,
      comments: data.comments,
      start_date: StartDate,
      end_date: EndDate,
    })
      .then((res) => {
        navigate(`/`);
      })
      .catch((error) => {
        console.error("Error:", error.message);
      });
  };

  return (
    <div>
      {loading ? (
        <p>Loading data ...</p>
      ) : (
        <form onSubmit={handleSubmit(submission)}>
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
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-around",
                marginBottom: "40px",
              }}
            >
              <MyTextField
                label="Name"
                name="name"
                control={control}
                placeholder="Provide a project name"
                width={"30%"}
              />

              <MyDatePickerField
                label="Start date"
                name="start_date"
                control={control}
                width={"30%"}
              />

              <MyDatePickerField
                label="End date"
                name="end_date"
                control={control}
                width={"30%"}
              />
            </Box>

            <Box
              sx={{
                display: "flex",
                justifyContent: "space-around",
              }}
            >
              <MyMultiLineField
                label="Comments"
                name="comments"
                control={control}
                placeholder="Provide project comments"
                width={"30%"}
              />

              <MySelectField
                label="Status"
                name="status"
                control={control}
                width={"30%"}
                options={hardcoded_options}
              />

              <MySelectField
                label="Project manager"
                name="projectmanager"
                control={control}
                width={"30%"}
                options={projectmanager}
              />
            </Box>

            <Box
              sx={{
                display: "flex",
                justifyContent: "start",
                marginTop: "40px",
              }}
            >
              <Button variant="contained" type="submit" sx={{ width: "30%" }}>
                Submit
              </Button>
            </Box>
          </Box>
        </form>
      )}
    </div>
  );
};

export default Create;
