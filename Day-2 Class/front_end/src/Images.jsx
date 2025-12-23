import React from "react";
const Images = (props) => {
  return (
    <div>
      <img
        src={props.text}
        style={{ width: "100vw", height: "250px" }}
        alt=""
      />
    </div>
  );
};
export default Images;
