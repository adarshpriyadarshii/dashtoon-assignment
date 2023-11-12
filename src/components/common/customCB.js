import {
  Checkbox,
  FormControlLabel,
  Typography,
} from "@mui/material";
import React from "react";

/* This a Custom CheckBox Button component . 
  Desc: 
  1. Hiding the default CheckBox Button.
  2. Making the Text as the CheckBox button with changing color and background-color on selection.
*/

function CustomCB(props) {
  return (
    <>
      <FormControlLabel
        control={
          <Checkbox
            checked={props.check}
            onChange={props.func}
            style={{
              display: "none",
            }}
          />
        }
        label={
          <>
            <div>
              <Typography
                style={{
                  fontSize: "14px",
                  fontWeight: "bold",
                  color: props.check === 1 ? "white" : "white",
                  transition: "color 0.3s",
                  padding: "2px",
                  backgroundColor: props.check === 1 ? "#4caf50" : "#430470",
                  border: `${
                    props.check === 1
                      ? "2px solid #4caf50"
                      : "2px solid #430470"
                  }`,
                }}
              >
                {props.txt}
              </Typography>
            </div>
          </>
        }
        labelPlacement="bottom"
      />
    </>
  );
}

export default CustomCB;
