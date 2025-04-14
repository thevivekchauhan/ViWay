import React, { useState, useRef } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import '../components/CSS/Home.css';
import '../components/CSS/Newsletter.css';
import logo from "../assets/MyLogo2.png";
import video from "../assets/bgvid.mp4"; // Correct the file extension if necessary
import chatVideo from "../assets/chat1.mp4"; // Import the new video
import currencyVideo from "../assets/currency.mp4"; // Import the currency video
import song from "../assets/Music/Hindi_Old_Songs_Mashup.mp3"; // Import the song
import AI from './AI1';
import CurrencyExchange from './CurrencyExchange';

function Home() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isSongPlaying, setIsSongPlaying] = useState(false);
  const audioRef = useRef(new Audio(song));

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const closeNav = () => {
    setIsNavOpen(false);
  };

  const toggleSong = () => {
    if (isSongPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsSongPlaying(!isSongPlaying);
  };

  return (
    <div>
      <nav>
        <ScrollLink to="home" smooth={true} duration={500}>
          <img src={logo} className="logo" alt="Logo" title="ViWay" />
        </ScrollLink>
        <div className="hamburger" onClick={toggleNav}>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
        <ul className={`navbar ${isNavOpen ? "active" : ""}`}>
          <li>
            <ScrollLink to="home" smooth={true} duration={500} onClick={closeNav}>Home</ScrollLink>
            <ScrollLink to="locations" smooth={true} duration={500} onClick={closeNav}>Locations</ScrollLink>
            <ScrollLink to="ai-section" smooth={true} duration={500} onClick={closeNav}>ViWay AI</ScrollLink>
            <ScrollLink to="currency-exchange-section" smooth={true} duration={500} onClick={closeNav}>Currency Exchange</ScrollLink>
            <ScrollLink to="about" smooth={true} duration={500} onClick={closeNav}>About Us</ScrollLink>
            <label className="switch">
              <input className="cb" type="checkbox" onChange={toggleSong} />
              <span className="toggle">
                <span className="left">off</span>
                <span className="right">on</span>
              </span>
            </label>
            {/* <ScrollLink to="packages" smooth={true} duration={500} onClick={closeNav}>Packages</ScrollLink> */}
          </li>
        </ul>
      </nav>

      <div className="banner" id="home">
        <video src={video} type="video/mp4" autoPlay muted loop></video>
        <div className="content">
          <div className="title">
            <h1>Vivek</h1>
            <h1>Chauhan</h1>
            <h1>Vlogs</h1>
            <a
              href="https://youtu.be/5XcrtlbZzoA?si=yUU44-_qd_Rfas8U"
              className="button"
              target="_blank"
              rel="noopener noreferrer"
            >
              Click To Watch
            </a>
          </div>
        </div>
      </div>

      <div id="ai-section" className="ai-video-container">
        <video src={chatVideo} type="video/mp4" autoPlay muted loop className="ai-video"></video>      
        <div className="ai-content">
          <AI />
        </div>
      </div>
      
      <div id="currency-exchange-section" className="currency-video-container">
        <video src={currencyVideo} type="video/mp4" autoPlay muted loop className="currency-video"></video>
        <div className="currency-content">
          <CurrencyExchange />
        </div>
      </div>
    </div>
  );
}

export default Home;