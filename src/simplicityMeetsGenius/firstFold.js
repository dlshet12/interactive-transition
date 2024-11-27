import React, { useState, useEffect } from 'react';
import sun from '../asset/sun.png';
import hand from '../asset/3D_hand.png';
import circle from '../asset/circleButton.png';
import cloud from '../asset/Cloud.png'
import gradient from '../asset/Gradient.png';
import completeCloud from '../asset/Cloud.svg';
import halfFlight from '../asset/Flight.png';
import distance from '../asset/distance.png';
import fullFlight from '../asset/fullFlight.png';
import pcloudy from '../asset/pcloudy.png';
import cloudText from '../asset/cloudtext.png';
import sundegree from '../asset/sun&degree.png';
import BigSun from '../asset/Bigsun.png';
import innerSun from '../asset/innerSun.png';
import './firstFold.css';

const FirstFold = () => {
    const [scrollPosition, setScrollPosition] = useState(0);
    const [isClicked, setIsClicked] = useState(false);
    const [showText, setShowText] = useState(false);
    const [hasTriggered, setHasTriggered] = useState(false);
    const [showNextLevel, setShowNextLevel] = useState(false);
    const [cloudTransition, setCloudTransition] = useState(false);
    const [showCompleteCloud, setShowCompleteCloud] = useState(false);
    const [showBlackStrip, setShowBlackStrip] = useState(false);
    const [showFlight, setShowFlight] = useState(false);
    const [showFullFlight, setShowFullFlight] = useState(false);
    const [showNewBackground, setShowNewBackground] = useState(false);
    const [showPCloudy, setShowPCloudy] = useState(false);
    const [textNextLevel, setTextNextLevel] = useState(false);
    const [sunCenter, setSunCenter] = useState(false);
    const [humanizeText, setHumanizeText] = useState(false);
    const [showSunDegree, setShowSunDegree] = useState(false);
    const [thirdBg, setThirdBg] = useState(false);
    const [transitionToBigSun, setTransitionToBigSun] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const position = window.scrollY;
            setScrollPosition(position);
            if (position > 700 && !isClicked && position <= 1300) {
                setIsClicked(true);
                setHasTriggered(true);
                setTimeout(() => {
                    setShowText(true);
                }, 300);
                // Show "Taking digital experience to NEXT LEVEL" text
                //  setShowNextLevel(true);
                //  setShowText(false); 
            } else if (position > 1500) {
                // Show "Simplicity meets GENIUS" text
                setShowText(false);
                setShowNextLevel(true);
            } else {
                setShowText(false);
                setShowNextLevel(false);
                setIsClicked(false);
                setHasTriggered(false);
            }

            if (position > 1500 && position <= 1800) {

                setCloudTransition(true);
                setShowCompleteCloud(false);
            } else if (position > 2000 && position <= 2500) {
                setCloudTransition(false); // Hide initial cloud
                setShowCompleteCloud(true);
            } else if (position > 2530 && position <= 3000) {
                setCloudTransition(false);
                setShowCompleteCloud(true);
                setShowBlackStrip(true);
                // setShowFlight(false)
            }
            if (position > 3000 && position <= 4000) {
                // setShowBlackStrip(true); 
                setShowFullFlight(true);
                // setShowFullFlight(false);
            }
            else if (position > 4000) {
                setShowFullFlight(true);
                setShowNewBackground(true);
            }
            // Logic to show half-flight and transition to full-flight
            else if (position > 1200) {
                // setShowFlight(false);
                // setShowFullFlight(false)
                // setShowFullFlight(true);
            }

            else {
                setCloudTransition(false);
                setShowCompleteCloud(false);
                setShowBlackStrip(false);
                setShowFlight(false);
                setShowFullFlight(false);
                setShowNewBackground(false);
            }

            // Sun and complete cloud move to center
            if (position > 4500 && position) {
                setCloudTransition(false);
                setShowBlackStrip(false);
                setShowFullFlight(false);
                setShowCompleteCloud(true);
            } else if (position > 5000 && position <= 5500) {
                setCloudTransition(false);
                setShowNewBackground(true);
            }
            if (position > 5500) {
                setSunCenter(true)
                setTextNextLevel(false)
                setHumanizeText(true)

            } else {
                setSunCenter(false);
                setTextNextLevel(true)
                setHumanizeText(false)
            }
            if (position >= 5700 && position <= 6500) {
                const newHeight = Math.min(450, ((position - 5700) / (6500 - 5700)) * 450);
                document.querySelector('.expandable-container').style.height = `${newHeight}px`;
                setShowPCloudy(true);

            } else if (position > 6500) {
                document.querySelector('.expandable-container').style.height = '450px';
            } else {
                document.querySelector('.expandable-container').style.height = '10px';
                setShowPCloudy(false);
            }
            if (position > 7000) {
                setShowSunDegree(true)
            } else {
                setShowSunDegree(false)
            }
            if (position > 7500) {
                setThirdBg(true);
            }
            else {
                setThirdBg(false)
            }
            if (position > 7500) {
                setTransitionToBigSun(true);

                setShowSunDegree(false);
                document.querySelector('.expandable-container').style.display = 'none';
                document.querySelector('.cloudtext-container').style.display = 'none';
                document.querySelector('.todays-weather').style.display = 'none';
                setHumanizeText(false);
            } else {
                setTransitionToBigSun(false);

                // document.querySelector('.expandable-container').style.display = 'flex';
                document.querySelector('.cloudtext-container').style.display = 'flex';
                document.querySelector('.todays-weather').style.display = 'flex';
            }


        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // Calculate opacity and position based on scroll
    const handOpacity = Math.min(scrollPosition / 300, 1);
    const handTransform = `translateY(${Math.max(80 - (scrollPosition / 4), 180)}px)`;

    return (
        <div className="scroll-container">
            <div className="scroll-spacer">
                <div className={`animation-container ${showNextLevel ? 'next-level' : ''} ${showNewBackground ? 'new-background' : ''} ${thirdBg ? 'thirdBg' : ''}`} >
                    <div className={`text-overlay ${showText ? 'show' : ''}`}>
                        <div className="text-line">Simplicity meets</div>
                        <div className="text-genius">GENIUS</div>
                    </div>

                    <div style={{ opacity: textNextLevel ? 1 : 0 }} className={`next-level-text ${showNextLevel ? 'show' : ''}`}>
                        <div className="text-line">Taking digital experience to</div>
                        <div className="text-genius">NEXT LEVEL</div>
                    </div>


                    <div className={`circle-container ${showNextLevel ? 'move-to-sun' : ''}`} >
                        {/* <img src={gradient} alt="Gradient" className="gradient" style={{ opacity: showNextLevel ? 1 : 0, }} /> */}
                        <div className="gradient" style={{ opacity: showNextLevel ? 1 : 0 }} ></div>
                        <img src={cloud} alt="Cloud" className={`cloud ${cloudTransition ? 'show-cloud' : ''}`}
                            style={{
                                opacity: cloudTransition ? 1 : 0,
                                transform: cloudTransition ? "translate(-150%, 10%)" : "translate(-150%, 10%)",
                            }} />
                        <img src={completeCloud}
                            alt="Complete Cloud"
                            className={`complete-cloud ${showCompleteCloud ? 'show-complete-cloud' : ''} ${sunCenter ? 'center' : ''}`}
                            style={{
                                opacity: sunCenter ? 0 : showCompleteCloud ? 1 : 0,
                                transition: 'opacity 1s ease-out, transform 1s ease-out',
                            }} />

                        <img src={circle} alt='circle' className={`circle ${isClicked ? 'clicked' : ''}`}
                            style={{
                                opacity: showNextLevel ? 0 : Math.max(1 - handOpacity, 1)
                            }}
                        />
                        <img src={sun} className={`sun ${sunCenter ? 'center' : ''}`} alt='sun'
                            style={{
                                opacity: sunCenter ? 0 : showNextLevel ? 1 : 0,
                                transform: sunCenter && !showPCloudy ? 'translate(-300%, 50%)' : '',
                                transition: 'opacity 1s ease-out, transform 1s ease-out',
                            }}
                        />
                        <div className={`pcloudy-container ${showPCloudy ? 'show' : ''} ${transitionToBigSun ? 'pcloudy-to-sun' : ''}`}
                            style={{
                                opacity: showPCloudy ? 1 : 0,
                                // transform: showPCloudy && sunCenter ? 'translate(-180%, -10%)' : '',
                                transition: 'opacity 1s ease-out, transform 1s ease-out',
                            }}>
                            <img src={pcloudy} alt="Partially Cloudy" />
                            {/* Big Sun Image */}
                            <img
                                src={BigSun}
                                alt="Big Sun"
                                className={`bigsun-image ${transitionToBigSun ? 'bigsun-visible' : ''}`}
                            />
                        </div>
                        <div className={'expandable-container'} style={{ display: showPCloudy ? 'flex' : 'none', height: `${scrollPosition >= 5700 && scrollPosition <= 6500 ? Math.min(450, ((scrollPosition - 5700) / (6500 - 5700)) * 450) : scrollPosition > 6500 ? 450 : 10}px`, }}></div>

                        <div className={`cloudtext-container ${showPCloudy ? 'show' : ''}`}
                            style={{
                                position: 'absolute',
                                top: '260%',
                                left: '-580%',
                                transform: 'translate(-50%, -50%)',
                                opacity: showPCloudy ? 1 : 0,
                                transition: 'opacity 1s ease-out',
                            }}>
                            <img src={cloudText} alt="Cloud Text" />
                        </div>

                        <div className={`todays-weather ${showPCloudy ? 'show' : ''}`}
                            style={{
                                position: 'absolute',
                                top: '70%',
                                left: '-800%',
                                opacity: showPCloudy ? 1 : 0,
                                transition: 'opacity 1s ease-out',

                            }}>
                            <div className="weather-text">Today's Weather <br /> <span>28 March 2024 </span><br /></div>
                            <div className="place-text"> San Franciso</div>
                        </div>
                        {showSunDegree && (
                            <img
                                src={sundegree}
                                alt="Sun & Degree"
                                className="sundegree-image"
                            />
                        )}
                        <div style={{ opacity: humanizeText ? 1 : 0 }} className={`humanize-text ${humanizeText ? 'show' : ''}`}>
                            <div className="text-line">Humanising</div>
                            <div className="humanize-text-genius"><span>smart interaction</span></div>
                        </div>

                    </div>


                    <div className={`hand-container ${isClicked ? 'clicked' : ''}`}
                        style={{
                            opacity: showNextLevel ? 0 : handOpacity,
                            transform: handTransform,
                            left: '37%'
                        }}>
                        <img src={hand} alt="Reaching hand" className="hand-image" />
                    </div>

                    <div className="black-strip" style={{ opacity: showBlackStrip ? 1 : 0, }} >
                    </div>

                    <div className={`flight-container ${showFlight ? "half-flight" : ""} ${showFullFlight ? "full-flight" : ""}`}
                        style={{
                            // opacity: showBlackStrip ? 1 : 0,
                            transform: showBlackStrip ? 'translateY(0)' : 'translateY(50px)',
                            transition: 'opacity 0.8s ease-out, transform 0.8s ease-out',
                        }} >
                        <img src={showFlight ? halfFlight : fullFlight} alt="Flight" />
                    </div>
                    <div className={`distance-container ${showFullFlight ? "visible" : ""}`}>
                        <img src={distance} alt="Distance" />
                    </div>


                </div>
            </div>
        </div>
    );
};

export default FirstFold;
