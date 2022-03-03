import React from "react";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <div>
      <header className="aboutUs">
        <div className="header-content"></div>
      </header>
      <section className="pilates">
        <div className="pilates-text">
          <h1>PILATES</h1>
          <div className="line"></div>
          <p>
            instruction anywhere and on your schedule. Our purpose is to help
            you experience the joy of movement through Pilates and as a result,
            bring more joy and ease into your life.Discover the benefits of a
            regular Pilates practice with the help of our programs and
            challenges, which feature different themes, teachers, and Pilates
            styles. Whether you are just beginning, an advanced practitioner, a
            Pilates teacher, or looking for classes with specific equipment, you
            will experience a warm welcome.
          </p>
          <a href="#" className="ctn">
            Find out more
          </a>
        </div>
      </section>

      <section className="founder">
        <div className="title">
          <h1>MEET THE FOUNDER</h1>
          <div className="linee"></div>
        </div>
        <div id="content" className="right">
          <div className="col">
            <p>
              For more than 20 years, we have worked hard to provide you with
              comprehensive information that you can rely on. Our team of
              editors, designers, developers, and more is passionate about being
              innovative in the online health space. After all, we are human,
              too, and want to ensure we are making the best decisions for the
              health of ourselves and our families. Meet some of our team below.
              They are just one part of our staff, which includes SEO experts,
              product managers, designers, developers, and sales and marketing
              partners.
            </p>
          </div>
          <div className="left">
            <img
              src="https://static.wixstatic.com/media/6dd698_7d0ac0d7fe814047a1555436f352d565~mv2.png/v1/fill/w_560,h_590,al_c,usm_0.66_1.00_0.01,enc_auto/6dd698_7d0ac0d7fe814047a1555436f352d565~mv2.png"
              alt=""
            />
          </div>
        </div>
      </section>

      <section className="practice">
        <div className="practice-text">
          <h1>PRACTICE PILATES</h1>
          <div className="lineee"></div>
          <p>
            A membership that gives you access to unlimited holistic classes,
            workshops and community events.
          </p>
          <a href="#" className="ctnn">
            Goin Now
          </a>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
