import React from "react";
import { useState } from "react";
import Form from "../components/form";
import OutputWindow from "../components/output";
import { 
  Stack, 
  Typography, 
  Grid 
} from "@mui/material";

/* The Homepage View component.
Desc:
1. Describing variuos initial states of different panel images url.
2. Two Components are imported (Input From and Output Window).
*/

function Homepage() {
  //Initialising the variuos urls for 10 panels of comic.
  const [url, setUrl] = useState("");
  const [url1, setUrl1] = useState("");
  const [url2, setUrl2] = useState("");
  const [url3, setUrl3] = useState("");
  const [url4, setUrl4] = useState("");
  const [url5, setUrl5] = useState("");
  const [url6, setUrl6] = useState("");
  const [url7, setUrl7] = useState("");
  const [url8, setUrl8] = useState("");
  const [url9, setUrl9] = useState("");
  const props = {
    url,
    setUrl,
    url1,
    setUrl1,
    url2,
    setUrl2,
    url3,
    setUrl3,
    url4,
    setUrl4,
    url5,
    setUrl5,
    url6,
    setUrl6,
    url7,
    setUrl7,
    url8,
    setUrl8,
    url9,
    setUrl9,
  };
  return (
    <div>
      <Typography
        sx={{
          fontFamily: "cursive",
          fontSize: "20px",
          fontWeight: "bold",
        }}
      >
        " Comic-Cook "
      </Typography>
      <Stack
        direction={{ xs: "column", sm: "row" }}
        justifyContent="center"
        alignItems="center"
      >
        <Grid container > {/*Grid is used to divide screen into sections according to screen size*/}
          <Grid item xs={12} sm={6} md={6} >
            <Form {...props} /> {/*form window for taking the input from user*/}
          </Grid>
          <Grid item xs={12} sm={6} md={6} >
            <OutputWindow {...props} /> {/*window for showing the genereted images*/}
          </Grid>
        </Grid>
      </Stack>
    </div>
  );
}

export default Homepage;
