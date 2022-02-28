import { Button } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import "../NotFound/NotFound.css";
import notFound from "../assets/img/ScreenShot.png";
const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div>
      <img className="notFoundImg" src={notFound} alt="ert"></img>
      <div className="text">
        <h1>PAGE NOT FOUND</h1>
        <p>
          We looked everywhere for this page. Are you sure the website URL is
          correct? Get in touch with the site owner.
        </p>
        <Button
          onClick={() => navigate("/")}
          variant="outlined"
          sx={{
            color: "white",
            border: "2px solid white",
          }}
        >
          Go Back Home
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
