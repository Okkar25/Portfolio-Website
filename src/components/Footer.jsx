import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import React from "react";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="socialMedia">
        <a
          href="https://www.facebook.com/profile.php?id=100017983992380"
          target="blank"
        >
          <FacebookIcon />
        </a>
        <a href="https://www.instagram.com/okkarnovack/" target="blank">
          <InstagramIcon />
        </a>
        <a
          href="https://www.linkedin.com/in/okkar-novack-88362b22a/"
          target="blank"
        >
          <LinkedInIcon />
        </a>
        <a href="" target="blank"></a>
        <TwitterIcon />
      </div>
      <p className="footer-text">
        Ph : +959782111982 | Gmail : okkaaung2508@gmail.com
      </p>
      <p className="footer-text">
        &copy; 2024 All Rights Reserved. Developed by Okkar Aung.
      </p>
    </div>
  );
};

export default Footer;
