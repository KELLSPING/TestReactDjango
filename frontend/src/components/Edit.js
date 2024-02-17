import { React, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Box, Button, Typography } from "@mui/material";
import MyTextField from "./forms/MyTextField";
import MySelectField from "./forms/MySelectField";
import MyMultiLineField from "./forms/MyMultiLineField";
import MyDatePickerField from "./forms/MyDatePickerField";
import AxiosInstancce from "./Axios";
import Dayjs from "dayjs";
import { useNavigate, useParams } from "react-router-dom";

const Edit = () => {
  const MyParam = useParams();
  const MyId = MyParam.id;

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
    });

    AxiosInstancce.get(`project/${MyId}`).then((res) => {
      // console.log(res.data);
      setValue("name", res.data.name);
      setValue("status", res.data.status);
      setValue("projectmanager", res.data.projectmanager);
      setValue("comments", res.data.comments);
      setValue("start_date", Dayjs(res.data.start_date));
      setValue("end_date", Dayjs(res.data.end_date));
      setLoading(false);
    });
  };

  useEffect(() => {
    // console.log(MyId);
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

  const { handleSubmit, setValue, control } = useForm({
    defaultValues: defaultValues,
  });

  const submission = (data) => {
    // console.log(data)

    const StartDate = Dayjs(data.start_date["$d"]).format("YYYY-MM-DD");
    // console.log(StartDate)
    const EndDate = Dayjs(data.end_date["$d"]).format("YYYY-MM-DD");
    // console.log(EndDate)

    AxiosInstancce.put(`project/${MyId}/`, {
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
                justifyContent: "space-around",
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

export default Edit;
