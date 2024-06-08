import "./footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-5">
            <h4>SPSV Travels</h4>
            <p>
              Address: <br/>
              Pole No. 45, <br />
              Village Khaira, Najafgarh, <br />
              New Delhi, India
            </p>
            <p>Phone: +91 8587097108</p>
            <p>Email: spsvtravel@gmail.com</p>
          </div>
          <div className="col-md-4">
            <h4>Follow Us</h4>
            <ul className="social-media">
              <li>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faTwitter} size="2x" />
                </a>
              </li>
              <li>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faFacebook} size="2x" />
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faInstagram} size="2x" />
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-3">
            <h4>Legal</h4>
            <ul>
              <li>
                <a href="/home">Terms of Service</a>
              </li>
              <li>
                <a href="/home">Privacy Policy</a>
              </li>
              <li>
                <a href="/home">Licenses</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bottom-bar">
        <p>&copy; 2024 SPSV Travels. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
