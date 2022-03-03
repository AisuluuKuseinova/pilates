import React from "react";
import "../Home/Home.css";
import notFound from "../assets/img/not_found_img.png";
import { Box } from "@mui/material";

const Home = () => {
  return (
    <div>
      <div className="step">
        <video autoPlay loop muted>
          <source
            src="https://video.wixstatic.com/video/6dd698_1f1266f9d9214a2abbdddbe569cba9c5/720p/mp4/file.mp4"
            type="video/mp4"
          />
        </video>
        <div className="step1">
          <Box
            sx={{
              bgcolor: "#FCF6EC",
              height: "100vh",
              paddingTop: "100px",
              backgroundImage: `url(${notFound})`,
              backgroundSize: "cover",
              backgroundRepeat: "norepeat",
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
              justifyContent: "center",
              color: "rgb(125, 142, 125)",
            }}
          >
            <h1 id="text1" style={{ color: "rgb(125, 142, 125)" }}>
              Arrive Here Now
            </h1>
            <h4 id="text2" style={{ display: "flex", alignItems: "center" }}>
              A membership to join our community with unlimited classes and
              workshops. Practice with us as much as you want on any digital
              device.
            </h4>
          </Box>
        </div>
      </div>
    </div>
  );
};

export default Home;
