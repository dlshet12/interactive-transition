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
import iphone from '../asset/iphone.png';
import iwatch from '../asset/iwatch.png';
import watchface from '../asset/watchface.png';
import mail from '../asset/mail.png';
import message from '../asset/tooltip_2.png';
import call from '../asset/call.png';
import './firstFold.css';
import largemsg from '../asset/larger_mesg.png';
import largemail from '../asset/larger_mail.png';
import largecall from '../asset/larger_call.png';
import hovermsg from '../asset/hover1.png';
import hovermail from '../asset/hover2.png';
import hovercall from '../asset/hover3.png';


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
    const [problemSolving, setProblemSolving] = useState(false);
    const [showInnerCircle, setShowInnerCircle] = useState(false);
    const [showIphone, setShowIphone] = useState(false);
    const [iphonePosition, setIphonePosition] = useState('-20%');
    const [iwatchPosition, setwatchPosition] = useState('-10%');
    const [showIwatch, setShowIwatch] = useState(false);
    const [showFutureText, setShowFutureText] = useState(false);
    const [MoveSunCenter, setMoveSunCenter] = useState(false);
    const [showInnerSuns, setShowInnerSuns] = useState(false);
    const [showClock, setShowClock] = useState(false);
    const [contactUs, setContactUs] = useState(false);

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
                setProblemSolving(true)
            } else {
                setTransitionToBigSun(false);
                setProblemSolving(false)
                // document.querySelector('.expandable-container').style.display = 'flex';
                document.querySelector('.cloudtext-container').style.display = 'flex';
                document.querySelector('.todays-weather').style.display = 'flex';
            }
            if (position > 7800) {
                setShowInnerCircle(true)
            } else {
                setShowInnerCircle(false)
            }
            if (position > 8000) {
                setShowIphone(true)
            } else {
                setShowIphone(false)
            }
            if (position > 8200) {
                setShowIwatch(true);
            } else {
                setShowIwatch(false);
            }

            if (position > 8500) {
                setShowIwatch(false);
                setShowIphone(false);
                setProblemSolving(false);
                setShowFutureText(true);
            } else {
                setShowFutureText(false); // Hide the text when scrolling out of this range
            }
            if (position > 8700) {
                setMoveSunCenter(true);
            } else {
                setMoveSunCenter(false);
            }
            if (position > 9000) {
                setShowInnerSuns(true);
            } else {
                setShowInnerSuns(false);
            }
            if (position > 9300) {
                setShowClock(true);
            } else {
                setShowClock(false)
            }
            if (position > 11000) {
                setShowClock(false);
            }
            if (position > 11000) {
                setShowInnerSuns(false);
            }
            if (position > 13000) {
                setContactUs(true)
            } else {
                setContactUs(false)
            }

        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        if (showIphone) {
            // Trigger the movement when showIphone is true
            setTimeout(() => {
                setIphonePosition('50%');
            }, 100); // Slight delay for smoother effect
        } else {
            setIphonePosition('10%'); // Reset position when showIphone is false
        }
    }, [showIphone]);

    useEffect(() => {
        if (showIwatch) {
            // Trigger the movement when showIphone is true
            setTimeout(() => {
                setwatchPosition('20%');
            }, 100); // Slight delay for smoother effect
        } else {
            setwatchPosition('-10%'); // Reset position when showIphone is false
        }
    }, [showIwatch]);
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
                    {showFutureText && (
                        <div className="future-text">
                            <div className="build-text">Build future</div>
                            <div className="with-text">WITH US</div>
                        </div>
                    )}
                    <div className={`circle-container ${showNextLevel ? 'move-to-sun' : ''}`} >
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
                        <div style={{ opacity: problemSolving ? 1 : 0, transform: 'translate(-350%, -60%) translateY(20px)' }} className={`humanize-text ${problemSolving ? 'show' : ''}`}>
                            <div className="text-line">Product minded</div>
                            <div className="humanize-text-genius"><span>problem solving</span></div>
                        </div>
                        <div style={{ opacity: humanizeText ? 1 : 0 }} className={`humanize-text ${humanizeText ? 'show' : ''}`}>
                            <div className="text-line">Humanising</div>
                            <div className="humanize-text-genius"><span>smart interaction</span></div>
                        </div>
                        <div className={`pcloudy-container ${showPCloudy ? 'show' : ''} ${transitionToBigSun ? 'pcloudy-to-sun' : ''}`}
                            style={{
                                opacity: showPCloudy ? 1 : 0,
                                transition: 'opacity 1s ease-out, transform 1s ease-out',
                            }}>
                            <img src={pcloudy} alt="Partially Cloudy" style={{ opacity: transitionToBigSun ? 0 : 1, transition: 'opacity 1s ease-out, transform 1s ease-out', }} />
                            <img
                                src={BigSun}
                                alt="Big Sun"
                                className={`bigsun-image ${transitionToBigSun ? 'bigsun-visible' : ''} ${MoveSunCenter ? 'hidden' : ''}`}
                            />
                            {showInnerCircle && (
                                <img
                                    src={innerSun}
                                    alt="Inner Sun"
                                    className={`inner-sun main ${MoveSunCenter ? "move-to-center" : ""}`}
                                />
                            )}
                            {/* {showInnerSuns && ( */}
                            <>
                                <img
                                    src={innerSun}
                                    alt="Left Inner Sun"
                                    className={`inner-sun extra ${showInnerSuns ? 'left' : ''} `}
                                />
                                <img
                                    src={innerSun}
                                    alt="Right Inner Sun"
                                    className={`inner-sun extra ${showInnerSuns ? 'right' : ''} `}
                                />
                            </>

                            {showIphone && (
                                <img
                                    src={iphone}
                                    alt="Inner Sun"
                                    className="iphone"     style={{ left: iphonePosition }}
                                />
                            )}
                            {showIwatch && (
                                <img
                                    src={iwatch}
                                    alt="iWatch"
                                    className="iwatch " style={{bottom: iwatchPosition}}
                                />
                            )}
                        </div>
                        {showClock && (
                            <img alt='watch' className='clock' src={watchface} />
                        )}

                        {contactUs &&
                         (
                            <div className={`contact-box ${contactUs ? 'show' : ''}`}>
  <div className="icon-box call">
  <img src={message} alt="Message Icon"  />
  <img src={largemsg} alt="Message Icon Large" className="hover-image" />
  <img src={hovermsg} className="hover-msg" />
    </div>
    <div className="icon-box message">
    <img src={mail} alt="Mail Icon"/>
    <img src={largemail} alt="Message Icon Large" className="hover-image"/>
    <img src={hovermail} className="hover-msg" />
    </div>
    <div className="icon-box mail">
    <img src={call} alt="Call Icon" />
    <img src={largecall} alt="Message Icon Large" className="hover-image" />
    <img src={hovercall} className="hover-msg" />
    </div>
                            </div>
                         
                        )}
                        

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
                            />  )}
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

   // <div className={`contact-grid ${contactUs ? 'show' : ''}`}>
                            //     <div className="Mesg">
                            //         <div className="child">
                            //             <img src={message} alt="Message Icon" />

                            //         </div>
                            //         <div className="large-msg">
                            //             <img src={largemsg} alt="Message Icon Large" />
                            //             <div className="text">MessageText</div>
                            //         </div>
                            //     </div>
                            //     <div className="Email">
                            //         <div className="child">
                            //             <img src={mail} alt="Mail Icon" />

                            //         </div>
                            //         <div className="large-mail">
                            //             <img src={largemail} alt="Message Icon Large" />
                            //             <div className="text">email@example.com</div>
                            //         </div>
                            //     </div>
                            //     <div className="call">
                            //         <div className="child">
                            //             <img src={call} alt="Call Icon" />

                            //         </div>
                            //         <div className="large-call">
                            //             <img src={largecall} alt="Message Icon Large" />
                            //             <div className="text">+1234567890</div>
                            //         </div>
                            //     </div>
                            // </div>