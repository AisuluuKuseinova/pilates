import React from "react";
import "../Footer/Footer.css";
import Logo from "../../components/assets/img/logo.png";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="footer__text">
          <div className="footer__text_item first">
            <ul>
              <ol>Partners</ol>
              <br />
              <a target="_blank" href="https://www.instagram.com/stayfit.kg/">
                <li>Stay Fit</li>
              </a>
              <br />
              <a
                target="_blank"
                href="https://www.instagram.com/gantelka_sportswear/"
              >
                <li>Gantelka</li>
              </a>
              <br />
              <a
                target="_blank"
                href="https://www.instagram.com/omegasport.kg/"
              >
                <li>Omega Sport</li>
              </a>
            </ul>
          </div>
          <div className="footer__text_item second">
            <ul>
              <ol>Connect With Us</ol>
              <br />
              <a target="_blank" href="https://www.instagram.com/">
                <li>Instagram</li>
              </a>
              <br />
              <a target="_blank" href="https://ru-ru.facebook.com/">
                <li>Facebook</li>
              </a>
              <br />
              <a target="_blank" href="https://twitter.com/?lang=ru/">
                <li>Twitter</li>
              </a>
            </ul>
          </div>

          <div className="footer__text_item text_min">
            <ul>
              <ol>Contact</ol>
              <br />
              <li>Phone: +996702345**90</li>
              <br />
              <li>Email: pilatesstudio@gmail.com</li>
              <br />
              <li>Address: Bishkek st. Isanova 123/4</li>
            </ul>
          </div>
        </div>
        <div className="footerend">
          <div className="end">
            <img id="logoend" src={Logo} alt="" />
          </div>
          <div className="footer__text_logo text__min_logo">
            <ul>
              <ul>
                <ol>© 2022 Pilates Studio. Terms and Conditions</ol>
                <br />
                <li>
                  Website by
                  <a target="_blank" href="https://ru-ru.facebook.com/">
                    <li> Podfrontilo Team</li>
                  </a>
                </li>
              </ul>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
