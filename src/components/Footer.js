import "./FooterStyles.css";
import React from 'react'
import {FaHome, FaPhone, FaMailBulk, FaLinkedin, FaFacebook, FaTwitter} from 'react-icons/fa';


const footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <FaHome size={20} style={{ color: "#fff", marginRight: "2rem" }} />
            <div>
              <p>Kadapa, Andhra Pradesh.</p>
              <p>India.</p>
            </div>
          </div>
          <div className="phone">
            <h4>
              <FaPhone
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              +91-7799152688
            </h4>
          </div>
          <div className="email">
            <h4>
              <FaMailBulk
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              Hidb4u@gmail.com
            </h4>
          </div>
        </div>

        <div className="right">
          <h4>About The Details</h4>
          <p>
            Hi, Am Full Stack Developer, I was developed Many E-Commerece
            Applications Websites.
          </p>
          <div className="social">
            <FaFacebook
              size={30}
              style={{ color: "#fff", marginRight: "1rem" }}
            />
            <FaTwitter
              size={30}
              style={{ color: "#fff", marginRight: "2rem" }}
            />
            <FaLinkedin
              size={30}
              style={{ color: "#fff", marginRight: "2rem" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default footer
