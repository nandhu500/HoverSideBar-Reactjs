import React, { useState } from "react";
import "./Sidebarr.css";
import { makeStyles } from "@material-ui/core/styles";
import client from "./Clients.svg";
const Slidebar = () => {
  const [widths, setWidth] = useState("70px");
  const [marginImg, setMargin] = useState("100px");
  const mouseEnter = () => {
    setWidth("160px");
    setMargin("10px");
  };
  const mouseLeave = () => {
    setWidth("70px");
    setMargin("100px");
  };

  const useStyles = makeStyles((theme) => ({
    root: {
      width: "100%",
    },
    heading: {
      fontSize: theme.typography.pxToRem(15),
      fontWeight: theme.typography.fontWeightRegular,
    },
  }));
  const classes = useStyles();
  return (
    <div>
      <div
        className="myside_bar"
        onMouseEnter={mouseEnter}
        onMouseLeave={mouseLeave}
        style={{ width: widths }}
      >
        <div className="flexbox">
          <div className={classes.root}>
            <div className="icon">
              <img src={client} alt="" />
              <p>Clients</p>
            </div>
            <div className="icon">
              <img src={client} alt="" />
              <p>Clients</p>
            </div>
            <div className="icon">
              <img src={client} alt="" />
              <p>Clients</p>
            </div>
          </div>
        </div>
      </div>

      <div id="main" style={{ marginLeft: widths }}>
        <h2>DEMO APP</h2>
      </div>
    </div>
  );
};

export default Slidebar;
