import React, { useState, useEffect } from 'react';
import sun from '../asset/sun.png';
import hand from '../asset/3D_hand.png';
import circle from '../asset/circleButton.png';
import cloud from '../asset/Cloud.png'
import gradient from '../asset/Gradient.png';
import completeCloud from '../asset/Cloud.svg';
import halfFlight from '../asset/Flight.png';
import distance from '../asset/distance.png';
import fullFlight from '../asset/fullFlight.png'
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

    useEffect(() => {
        const handleScroll = () => {
            const position = window.scrollY;
            setScrollPosition(position);

            // Trigger click effect when hand reaches circle (adjust threshold as needed)
            if (position > 700 && !isClicked && position <= 1300) {
                setIsClicked(true);
                setHasTriggered(true);
                setTimeout(() => {
                    setShowText(true);
                }, 300);
                         // Show "Taking digital experience to NEXT LEVEL" text
                        //  setShowNextLevel(true);
                        //  setShowText(false); 
            }else if (position > 1500) {
                // Show "Simplicity meets GENIUS" text
                setShowText(false);
                setShowNextLevel(true); 
            } else {
                //  of the page
                setShowText(false);
                setShowNextLevel(false);
                setIsClicked(false);
                setHasTriggered(false);
            }

            if (position > 1500  && position <= 1800) {

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
            if  (position > 3000 && position <= 4000) {
                // setShowBlackStrip(true); 
                setShowFullFlight(true);
                // setShowFullFlight(false);
              } 
            //   else if  (position >= 4000) {
            //     setShowFullFlight(true);
            // }  
               // Logic to show half-flight and transition to full-flight
        else if (position > 1200){
            // setShowFlight(false);
            // setShowFullFlight(false)
            // setShowFullFlight(true);
        } 
      
             else {
                // Reset scrolled back up
                setCloudTransition(false);
                setShowCompleteCloud(false);
                setShowBlackStrip(false);
                setShowFlight(false);
            setShowFullFlight(false);
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
                <div
                    className={`animation-container ${showNextLevel ? 'next-level' : ''}`}
                >
                    <div className={`text-overlay ${showText ? 'show' : ''}`}>
                        <div className="text-line">Simplicity meets</div>
                        <div className="text-genius">GENIUS</div>
                    </div>

                    <div className={`next-level-text ${showNextLevel ? 'show' : ''}`}>
                        <div className="text-line">Taking digital experience to</div>
                        <div className="text-genius">NEXT LEVEL</div>
                    </div>
                    <div
                        className={`circle-container ${showNextLevel ? 'move-to-sun' : ''}`}
                    >
                        <img
                            src={gradient}
                            alt="Gradient"
                            className="gradient"
                            style={{
                                opacity: showNextLevel ? 1 : 0,
                            }}
                        />
                        <img
                            src={cloud}
                            alt="Cloud"
                            className={`cloud ${cloudTransition ? 'show-cloud' : ''}`}
                            style={{
                                opacity: cloudTransition ? 1 : 0,
                                transform: cloudTransition ? "translate(-150%, 10%)" : "translate(-150%, 10%)",
                            }}
                        />
                        <img
                            src={completeCloud}
                            alt="Complete Cloud"
                            className={`complete-cloud ${showCompleteCloud ? 'show-complete-cloud' : ''}`}
                            style={{
                                opacity: showCompleteCloud ? 1 : 0,
                            }}
                        />

  <img src={circle} className={`circle ${isClicked ? 'clicked' : ''}`}
                            style={{
                                opacity: showNextLevel ? 0 : Math.max(1 - handOpacity, 1)
                            }}
                        />
                        <img
                            src={sun}
                            className="sun"
                            style={{
                                opacity: showNextLevel ? 1 : 0
                            }}
                        />
                    </div>

                    <div
                        className={`hand-container ${isClicked ? 'clicked' : ''}`}
                        style={{
                            opacity: showNextLevel ? 0 : handOpacity,
                            transform: handTransform,
                            left: '37%'
                        }}
                    >
                        <img
                            src={hand}
                            alt="Reaching hand"
                            className="hand-image"
                        />
                    </div>
                    <div
                        className="black-strip"
                        style={{
                            opacity: showBlackStrip ? 1 : 0,
                        }}
                    >
                    </div>
                    <div
                         className={`flight-container ${showFlight ? "half-flight" : ""} ${
                            showFullFlight ? "full-flight" : ""
                        }`}
                        style={{
                            // opacity: showBlackStrip ? 1 : 0,
                            transform: showBlackStrip ? 'translateY(0)' : 'translateY(50px)',
                            transition: 'opacity 0.8s ease-out, transform 0.8s ease-out',
                        }}
                    >
                       <img src={showFlight ? halfFlight : fullFlight} alt="Flight" />
                    </div>
                    <div
    className={`distance-container ${showFullFlight ? "visible" : ""}`}
>
    <img src={distance} alt="Distance" />
</div>

                </div>
            </div>

        </div>
    );
};

export default FirstFold;
