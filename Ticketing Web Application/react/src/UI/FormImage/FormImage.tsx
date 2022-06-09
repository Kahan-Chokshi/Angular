import React from "react";
import busGlow from "../../images/Bus logo.svg";
import classes from "./FormImage.module.css";

const FormImage: React.FC<{}> = () => {
  return (
    <div className={`${classes.common}`}>
      <img
        className={classes.busImage}
        src={busGlow}
        alt={"bus-illustration"}
      />
      <div className={`${classes.headingContainer} }`}>
        <h1 className={classes.heading}>Air Bus</h1>
        <h1 className={classes.heading}>Bus Ticketing System</h1>
      </div>
    </div>
  );
};
export default FormImage;
