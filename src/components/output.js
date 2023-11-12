import React, { useRef, useState } from "react";
import { 
  Button, 
  Box, 
  Tab,
  Tabs
} from "@mui/material";
import PictureAsPdfRoundedIcon from "@mui/icons-material/PictureAsPdfRounded";
import CircularProgress from '@mui/material/CircularProgress';
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import ImageTab from "./common/imageTab";

/* This a Output showiing component . 
  Desc: 
  1. Tabs for smooth movement between different panels of comic..
  2. Genereted Image display.
  3. Button for downloading the current genreted panel image.
*/

function OutputWindow({
  url,
  url1,
  url2,
  url3,
  url4,
  url5,
  url6,
  url7,
  url8,
  url9,
}) {
  const pdfRef = useRef(); //The useRef Hook allows us to persist values between renders.

  const downloadPdf = () => { //Function for downloading the current referred section.
    const input = pdfRef.current;
    html2canvas(input).then((canvas) => { //Converting HTML component to Canvas.
      const imgData = canvas.toDataURL("img/png");
      const pdf = new jsPDF("p", "mm", "a4", true); //Generating pdf with help of jsPDF.
      const wd = pdf.internal.pageSize.getWidth();
      const ht = pdf.internal.pageSize.getHeight();
      const imgW = canvas.width;
      const imgH = canvas.height;
      const ratio = Math.min(wd / imgW, ht / imgH);
      const imgX = (wd - imgW * ratio) / 2;
      const imgY = 30;
      pdf.addImage(imgData, "PNG", imgX, imgY, imgW * ratio, imgH * ratio);
      pdf.save("comic.pdf");
    });
  };

  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [tab, setTab] = useState(0); //For changing the tabs of images.

  return (
    <>
      <Box
        sx={{
          width: "70%",
          height: "80%",
          margin: "auto",
          //marginTop: "1%",
          padding: "10px",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons
          allowScrollButtonsMobile
          aria-label="scrollable auto tabs example"
          sx={{
            color: "white",
            width: "100%",
          }}
        >
        {/*Tabs for various images of different panels of comic book*/}
          <Tab
            label="Page One"
            sx={{ color: "white", fontSize: "10px" }}
            onClick={() => setTab(0)}
          />
          <Tab
            label="Page Two"
            sx={{ color: "white", fontSize: "10px" }}
            onClick={() => setTab(1)}
          />
          <Tab
            label="Page Three"
            sx={{ color: "white", fontSize: "10px" }}
            onClick={() => setTab(2)}
          />
          <Tab
            label="Page Four"
            sx={{ color: "white", fontSize: "10px" }}
            onClick={() => setTab(3)}
          />
          <Tab
            label="Page Five"
            sx={{ color: "white", fontSize: "10px" }}
            onClick={() => setTab(4)}
          />
          <Tab
            label="Page Six"
            sx={{ color: "white", fontSize: "10px" }}
            onClick={() => setTab(5)}
          />
          <Tab
            label="Page Seven"
            sx={{ color: "white", fontSize: "10px" }}
            onClick={() => setTab(6)}
          />
          <Tab
            label="Page Eight"
            sx={{ color: "white", fontSize: "10px" }}
            onClick={() => setTab(7)}
          />
          <Tab
            label="Page Nine"
            sx={{ color: "white", fontSize: "10px" }}
            onClick={() => setTab(8)}
          />
          <Tab
            label="Page Ten"
            sx={{ color: "white", fontSize: "10px" }}
            onClick={() => setTab(9)}
          />
        </Tabs>
        {/*Image rendering according to the tab number. */}
        {url ? (
          <Box ref={pdfRef}>
            {tab === 0 ? (
              <ImageTab src={url} />
            ) : tab === 1 ? (
              <ImageTab src={url1} />
            ) : tab === 2 ? (
              <ImageTab src={url2} />
            ) : tab === 3 ? (
              <ImageTab src={url3} />
            ) : tab === 4 ? (
              <ImageTab src={url4} />
            ) : tab === 5 ? (
              <ImageTab src={url5} />
            ) : tab === 6 ? (
              <ImageTab src={url6} />
            ) : tab === 7 ? (
              <ImageTab src={url7} />
            ) : tab === 8 ? (
              <ImageTab src={url8} />
            ) : (
              <ImageTab src={url9} />
            )}
          </Box>
        ) : (
          <CircularProgress style={{color:"#430470",justifyContent:'center',margin:'30%'}}/>
        )}
      </Box>
      <Button //Form submission button for downloading the current image.
        variant="contained"
        onClick={downloadPdf}
        size="small"
        sx={{
          backgroundColor:"#430470",
          color:'white',
          marginTop: "4%" 
        }}
        endIcon={<PictureAsPdfRoundedIcon />}
      >
        Download this page as
      </Button>
    </>
  );
}

export default OutputWindow;
