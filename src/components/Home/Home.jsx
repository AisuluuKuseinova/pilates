import React from "react";
import "../Home/Home.css";
import notFound from "../assets/img/not_found_img.png";
import { Box, Grid } from "@mui/material";
import content from "../assets/img/pilates3.jpg";
import contentt from "../assets/img/pilates2.jpg";
import contenttt from "../assets/img/pilates5.jpg";

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

        <section className="practicelife">
          <div className="title">
            <h1>Practice wherever life might take you</h1>
            <div className="linee"></div>
          </div>
          <div id="content" className="row">
            <div className="col">
              <img id="contentt" src={content} alt=""></img>
              <h1>SET OFF ON A JOURNEY</h1>
              <div className="line"></div>
              <p>
                Join your favorite teachers online in stunning locations across
                country. Bring peace to your mat wherever you’re at.
              </p>
            </div>
            <div className="col">
              <img id="contentt" src={contentt} alt=""></img>
              <h1>COME AS YOU ARE</h1>
              <div className="line"></div>
              <p>
                A class for however you’re feeling in this present moment.
                Choose from 80+ pilates classes, 5-60 minutes in length, at
                every level of experience.
              </p>
            </div>
            <div className="col">
              <img id="contentt" src={contenttt} alt=""></img>
              <h1>WELCOME HOME</h1>
              <div className="line"></div>
              <p>
                With monthly book clubs, workshops, and inviting gatherings,
                connect with our global community to stay inspired and
                supported.
              </p>
            </div>
          </div>
        </section>
        <div className="step1">
          <Box
            sx={{
              bgcolor: "#FCF6EC",
              height: "100vh",
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
            <h1
              id="text1"
              style={{
                color: "rgb(125, 142, 125)",
                marginTop: "3vw",
                fontSize: "15vmin",
                fontFamily: "Cormorant Garamond",
              }}
            >
              Arrive Here Now
            </h1>
            <p
              id="text2"
              style={{
                color: "rgb(125, 142, 125)",
                marginTop: "3vw",
                fontSize: "3vmin",
                fontFamily: "Cormorant Garamond",
              }}
            >
              A membership to join our community with unlimited classes and
              workshops. Practice with us as much as you want on any digital
              device
            </p>
            <Grid
              container
              display="flex"
              direction="row"
              justifyContent="center"
              alignItems="center"
              fontSize="4vmin"
              fontFamily="Cormorant Garamond"
            >
              <h1>24 month | $ 249</h1>
            </Grid>
          </Box>
        </div>
      </div>

      <section className="discover">
        <div className="title">
          <h1>Discover Our Classes</h1>
          <div className="linee"></div>
        </div>
      </section>
      <section>
        <div className="col image-col">
          <div className="videos">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/C6PUdqJD9pQ"
              title="YouTube video player"
              frameborder="1"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope"
              allowfullscreen
            ></iframe>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/ciR7LA23ooY"
              title="YouTube video player"
              frameborder="1"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/nkFoySbh87w"
              title="YouTube video player"
              frameborder="1"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/kiY2MJESgfw"
              title="YouTube video player"
              frameborder="1"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </section>
      <section className="end">
        <div className="video-end"></div>
      </section>
    </div>
  );
};

export default Home;
