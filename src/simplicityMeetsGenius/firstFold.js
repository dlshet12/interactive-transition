import React, { useState, useEffect } from 'react';
import sun from '../asset/sun.png';
import hand from '../asset/3D_hand.png';
import circle from '../asset/circleButton.png';
import cloud from '../asset/Cloud.png'
import gradient from '../asset/Gradient.png';
import completeCloud from '../asset/Cloud.svg';
import './firstFold.css';

const FirstFold = () => {
    const [scrollPosition, setScrollPosition] = useState(0);
    const [isClicked, setIsClicked] = useState(false);
    const [showText, setShowText] = useState(false);
    const [hasTriggered, setHasTriggered] = useState(false);
    const [showNextLevel, setShowNextLevel] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const position = window.scrollY;
            setScrollPosition(position);

            // Trigger click effect when hand reaches circle (adjust threshold as needed)
            if (position > 600 && !isClicked) {
                setIsClicked(true);
                setHasTriggered(true);
                setTimeout(() => {
                    setShowText(true);
                }, 600);
            }

            if (position > 600) {
                // Show "Taking digital experience to NEXT LEVEL" text
                setShowNextLevel(true);
                setShowText(false); // Hide "Simplicity meets GENIUS"
            } else if (position > 300 && position <= 600) {
                // Show "Simplicity meets GENIUS" text
                setShowText(true);
                setShowNextLevel(false); // Hide "Taking digital experience to NEXT LEVEL"
            } else {
                // Reset everything at the top of the page
                setShowText(false);
                setShowNextLevel(false);
                setIsClicked(false);
                setHasTriggered(false);
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
                            className="cloud"
                            style={{
                                opacity: showNextLevel ? 1 : 0,
                            }}
                        />
                        <img
                            src={circle}
                            className={`circle ${isClicked ? 'clicked' : ''}`}
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
                            left:'38%'
                        }}
                    >
                        <img
                            src={hand}
                            alt="Reaching hand"
                            className="hand-image"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FirstFold;
