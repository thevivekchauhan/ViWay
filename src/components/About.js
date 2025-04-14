import React from "react";
import "../components/CSS/AboutUs.css";
import AboutPic from "../assets/AboutPic.png";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

function About() {
  return (
    <motion.div
      className="about-container"
      id="about" // Ensure this ID matches the ScrollLink in Home.js
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
    >
      <div className="about-content">
        <motion.div className="about-image" whileHover={{ scale: 1.05 }}>
          <img src={AboutPic} alt="About Us" />
        </motion.div>
        <div className="about-text">
          <h1>About <span>Us</span></h1>
          <p>
            I love traveling to escape daily routines and discover new places, cultures, and people. As a passionate self-taught software engineer, I enjoy learning new technologies and applying them in real-world projects.
          </p>
          <motion.a
            href="https://www.linkedin.com/in/vivekchauhan005"
            className="connect-btn"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
          >
            Connect with Me!
          </motion.a>

          {/* Social Media Icons */}
          <div className="social-icons">
            <motion.a href="https://www.linkedin.com/in/vivekchauhan005" target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.1 }}>
              <FaLinkedin size={30} />
            </motion.a>
            <motion.a href="https://github.com/thevivekchauhan" target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.1 }}>
              <FaGithub size={30} />
            </motion.a>
            <motion.a href="https://www.instagram.com/the_vivekchauhan" target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.1 }}>
              <FaInstagram size={30} />
            </motion.a>
            <motion.a href="https://twitter.com/vivekchauhan005" target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.1 }}>
              <FaTwitter size={30} />
            </motion.a>
            <motion.a href="https://www.youtube.com/@theVivekChauhan" target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.1 }}>
              <FaYoutube size={30} />
            </motion.a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default About;
