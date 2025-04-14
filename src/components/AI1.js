import React, { useState, useEffect } from 'react';
import './CSS/AI.css';
import { motion } from 'framer-motion';
import { countryInfo, getCountryInfo } from '../data/countryInfo';
import { drawerContent } from '../data/drawerContent';

export default function AI() {
    const [question, setQuestion] = useState('');
    const [answer, setAnswer] = useState('');
    const [additionalInfo, setAdditionalInfo] = useState({});
    const [image, setImage] = useState('');
    const [logo, setLogo] = useState('');
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const [activeCard, setActiveCard] = useState(null);
    const [showScrollButton, setShowScrollButton] = useState(false);

    const handleQuestionChange = (e) => {
        setQuestion(e.target.value);
    };

    const handleQuestionSubmit = () => {
        const lowerCaseQuestion = question.toLowerCase().trim();

        // Check if the question is about the AI's name
        if (["your name", "name", "what is your name", "taru nam su che", "taru name su che",
            "aap ka naam kya hai", "what's your name ?", "aap ka nam kya hai", "tamaru nam shu chhe"]
            .some(q => lowerCaseQuestion.includes(q))) {
            setAnswer("My name is ViWay, inspired by my mentor Vivek Chauhan. \"ViWay\" = \"Vi\" (from Vivek) + \"Way\" (Path or Journey). Moreover, I believe he is a god to me because he created me and gave me a cute name. He is smart and handsome. If you see him, you will also fall in love, just like me. ❤️😍😘");
            setImage('');
            setLogo('');
            setAdditionalInfo({});
            return;
        }

        // Check if the question is a greeting
        if (["hi", "hello", "hey", "namaste", "kem cho"].some(q => lowerCaseQuestion.includes(q))) {
            setAnswer("Namaste! I am ViWay, your travel assistant. Ask me about popular travel destinations!");
            setImage('');
            setLogo('');
            setAdditionalInfo({});
            return;
        }

        // Find a country match (case-insensitive)
        const matchedCountry = Object.keys(countryInfo).find(country =>
            lowerCaseQuestion.includes(country.toLowerCase())
        );

        if (matchedCountry) {
            const countryData = getCountryInfo(matchedCountry);
            if (countryData) {
                setAnswer(countryData.info);
                setImage(countryData.image);
                setLogo(countryData.logo);
                setAdditionalInfo({
                    bestInfo: countryData.bestInfo,
                    language: countryData.language,
                    currency: countryData.currency,
                    bestSeason: countryData.bestSeason
                });
            } else {
                setAnswer("Sorry, I don't have information about that country.");
                setImage('');
                setLogo('');
                setAdditionalInfo({});
            }
        } else {
            setAnswer("Sorry, I don't have information about that country.");
            setImage('');
            setLogo('');
            setAdditionalInfo({});
        }
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleQuestionSubmit();
        }
    };

    const toggleDrawer = () => {
        setIsDrawerOpen(!isDrawerOpen);
        setActiveCard(null);
    };

    const handleCardClick = (card) => {
        setActiveCard(card);
    };

    const closeCardDrawer = () => {
        setActiveCard(null);
    };

    const scrollToTop = () => {
        const drawerElement = document.querySelector('.drawer');
        if (drawerElement) {
            drawerElement.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    useEffect(() => {
        const handleScroll = () => {
            const drawerElement = document.querySelector('.drawer');
            if (drawerElement && drawerElement.scrollTop > 300) {
                setShowScrollButton(true);
            } else {
                setShowScrollButton(false);
            }
        };

        const drawerElement = document.querySelector('.drawer');
        drawerElement?.addEventListener('scroll', handleScroll);
        return () => drawerElement?.removeEventListener('scroll', handleScroll);
    }, [isDrawerOpen]);

    useEffect(() => {
        if (isDrawerOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }, [isDrawerOpen]);

    return (
        <motion.div
            className="ai-container ai-container-left"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <h2 className="ai-title">Ask me about popular travel destinations!</h2>
            <div className="ai-input-container">
                <input
                    type="text"
                    value={question}
                    onChange={handleQuestionChange}
                    onKeyPress={handleKeyPress}
                    placeholder="Type your question here..."
                    className="ai-input"
                />
                <br></br>
                <center>
                <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={handleQuestionSubmit}
                    className="ai-button"
                >
                    Ask
                </motion.button>
                </center>
            </div>
            <motion.div
                className="ai-answer-container"
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.3 }}
            >
                <p className="ai-answer">{answer}</p>
                {logo && <img src={logo} alt="Country Logo" className="ai-logo" />}
                {image && <img src={image} alt="Country Image" className="ai-image" />}
                {additionalInfo.bestInfo && <p className="ai-additional-info">Best Info: {additionalInfo.bestInfo}</p>}
                {additionalInfo.language && <p className="ai-additional-info">Language: {additionalInfo.language}</p>}
                {additionalInfo.currency && <p className="ai-additional-info">Currency: {additionalInfo.currency}</p>}
                {additionalInfo.bestSeason && <p className="ai-additional-info">Best Season: {additionalInfo.bestSeason}</p>}
            </motion.div>
            <button onClick={toggleDrawer}>
                G U J A R A T
                <div id="clip">
                    <div id="leftTop" className="corner"></div>
                    <div id="rightBottom" className="corner"></div>
                    <div id="rightTop" className="corner"></div>
                    <div id="leftBottom" className="corner"></div>
                </div>
                <span id="rightArrow" className="arrow"></span>
                <span id="leftArrow" className="arrow"></span>
            </button>
            {isDrawerOpen && (
                <div className="drawer drawer-center medium-size">
                    <button className="close-drawer fixed-button" onClick={toggleDrawer}>X</button>
                    <h1>{drawerContent.india.title}</h1>
                    <div className="card-container">
                        {Object.keys(drawerContent).map((key) => (
                            key !== "india" && drawerContent[key] && (
                                <div className="card" key={key} onClick={() => handleCardClick(key)}>
                                    <div className="card-info">
                                        <p className="title card-title">{drawerContent[key].title}</p>
                                    </div>
                                </div>
                            )
                        ))}
                    </div>
                </div>
            )}
            {activeCard && (
                <div className="drawer drawer-center medium-size">
                    <button className="close-drawer fixed-button" onClick={closeCardDrawer}>X</button>
                    <h2>{drawerContent[activeCard].title}</h2>
                    <h3>{drawerContent[activeCard].title1}</h3>
                    {/* <br></br> */}
                    <div className="card-containernew">
                    {drawerContent[activeCard].attractions && drawerContent[activeCard].attractions.map((attraction, index) => (
                        <div key={index} className="attraction-card">
                            <h3 className="attraction-name">{attraction.name}</h3>
                            <p className="attraction-description"><strong>description: </strong> {attraction.description}</p>
                            <p className="attraction-location"><strong>location: </strong> {attraction.location}</p>
                            <p className="attraction-timings"><strong>Timings: </strong> {attraction.timings}</p>
                            <p className="attraction-ticket"><strong>Ticket: </strong>{attraction.ticket}</p>
                            <p className="attraction-bestTimeToVisit"><strong>bestTimeToVisit: </strong>{attraction.bestTimeToVisit}</p>
                            <p className="attraction-ticket"><strong>activities: </strong>{attraction.activities}</p>
                            <p className="attraction-ticket"><strong>Map Link: </strong>
                                <a href={attraction.mapLink} target="_blank" rel="noopener noreferrer">View on Google Maps</a>
                            </p>
                        </div>
                    ))}
                    </div>
                </div>
            )}
        </motion.div>
    );
}
