import React from "react";


/* This a Custom Image Tab component with specific Size. */
function ImageTab(props) {
  return (
    <img
      src={props.src}
      alt="Generated"
      style={{
        width: "100%",
        height: "54.44vh",
        objectFit: "contain",
      }}
    />
  );
}

export default ImageTab;
