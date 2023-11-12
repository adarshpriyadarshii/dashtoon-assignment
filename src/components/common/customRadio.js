import React from "react";
import { 
  FormControlLabel, 
  Radio, 
  Typography 
} from "@mui/material";

/* This a Custom radio Button component . 
  Desc: 
  1. Hiding the default Radio Button.
  2. Making the image as the Radio button with border changing color and size on selection.
  3. The images will have a caption too.
*/

function CustomRadio(props) {
  return (
    <>
      <FormControlLabel
        value={props.value}
        control={
          <Radio
            checked={props.check === props.value}
            style={{
              display: "none",
            }}
          />
        }
        label={
          <>
            <div>
              <img
                src={props.src}
                style={{
                  width: "60px",
                  height: "60px",
                  borderRadius: "50%",
                  objectFit: "cover",
                  border: `${
                    props.check === props.value
                      ? "4px solid #4caf50"
                      : "2px solid  #ccc"
                  }`,
                }}
                alt="output"
              />
            </div>
            <Typography>{props.txt}</Typography>
          </>
        }
        labelPlacement="bottom"
      />
    </>
  );
}

export default CustomRadio;
