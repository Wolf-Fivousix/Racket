import React from "react";
import { Link } from "react-router-dom";

class Splash extends React.Component {
    render () {
        let splashLoginButton = "Login";
        if(this.props.loggedIn) {
            splashLoginButton = "Open";
        }

        const loginOpenButton = (
            <button
                className="splashLoginButton">
                <Link
                    to="/login"
                    >{splashLoginButton}
                </Link>
            </button>
        );


        return (
            <div className="splashWrapper">
                <header>
                    <nav className="navBar">
                        {/* <div className="logoIcon"></div> */}
                        <img className="logoIcon" src="./assets/racketLogo.png"/>
                        <div className="rightSideNav">
                            {loginOpenButton}
                            <span className="splashNavSeparator"></span>
                        </div>
                    </nav>
                </header>

                <section className="splashContent">
                    <article className="splashMessage">
                        <div className="splashText">
                            <h1 className="title">It's time to ditch second hand apps.</h1>
                            <h3 className="subtitle">This pixel perfect clone will change your life! Looks familiar, those with high perception might wonder, but is nothing more than your imagination! =) </h3>
                        </div>
                        <div className="callToActionButtons">
                            <a
                                className="githubButton button"
                                href="https://github.com/Wolf-Fivousix/Racket"
                                target="_blank">
                                    Racket's GitHub
                            </a>
                            <a
                                className="contactButton button"
                                href="mailto:DiegoFranciscoBueno@gmail.com">Contact Me</a>
                        </div>
                    </article>
                    <article className="splashImages">
                        <div className="deviceImagesContainer">
                            <img
                                className="triangleImage1 deviceImages"
                                src="https://discordapp.com/assets/0a2fd7b3bab977b4619f466b81b426d4.svg"
                                alt="Triangle Image" />
                            <img
                                className="triangleImage2 deviceImages"
                                src="https://discordapp.com/assets/0a2fd7b3bab977b4619f466b81b426d4.svg"
                                alt="Triangle Image" />
                            <img
                                className="triangleImage3 deviceImages"
                                src="https://discordapp.com/assets/0a2fd7b3bab977b4619f466b81b426d4.svg"
                                alt="Triangle Image" />
                            <img
                                className="xImage1 deviceImages"
                                src="https://discordapp.com/assets/a14c5b02487874dca7fae0481ef90dbb.svg"
                                alt="x Image" />
                            <img
                                className="xImage2 deviceImages"
                                src="https://discordapp.com/assets/a14c5b02487874dca7fae0481ef90dbb.svg"
                                alt="x Image" />
                            <img
                                className="circleImage1 deviceImages"
                                src="https://discordapp.com/assets/afdfaaeb6d6639e24086ced7aa07975d.svg"
                                alt="Circle Image" />
                            <img
                                className="circleImage2 deviceImages"
                                src="https://discordapp.com/assets/afdfaaeb6d6639e24086ced7aa07975d.svg"
                                alt="Circle Image" />
                            <img
                                className="circleImage3 deviceImages"
                                src="https://discordapp.com/assets/afdfaaeb6d6639e24086ced7aa07975d.svg"
                                alt="Circle Image" />
                            <img
                                className="squareImage1 deviceImages"
                                src="https://discordapp.com/assets/173ee5a6d2f1b6a19190465c41371a3b.svg"
                                alt="Square Image" />
                            <img
                                className="squareImage2 deviceImages"
                                src="https://discordapp.com/assets/173ee5a6d2f1b6a19190465c41371a3b.svg"
                                alt="Square Image" />
                            <img
                                className="squareImage3 deviceImages"
                                src="https://discordapp.com/assets/173ee5a6d2f1b6a19190465c41371a3b.svg"
                                alt="Square Image" />
                            <img
                                className="dotImage1 deviceImages"
                                src="https://discordapp.com/assets/f877364ca453abc089cf7fe8d22c9c3f.svg"
                                alt="Dot Image" />
                            <img
                                className="dotImage2 deviceImages"
                                src="https://discordapp.com/assets/f877364ca453abc089cf7fe8d22c9c3f.svg"
                                alt="Dot Image" />
                            <img
                                className="dotImage3 deviceImages"
                                src="https://discordapp.com/assets/f877364ca453abc089cf7fe8d22c9c3f.svg"
                                alt="Dot Image" />
                            <img
                                className="dotImage4 deviceImages"
                                src="https://discordapp.com/assets/f877364ca453abc089cf7fe8d22c9c3f.svg"
                                alt="Dot Image" />
                            <img
                                className="dotImage5 deviceImages"
                                src="https://discordapp.com/assets/f877364ca453abc089cf7fe8d22c9c3f.svg"
                                alt="Dot Image" />
                            <img
                                className="bombImage deviceImages"
                                src="https://discordapp.com/assets/eb301f28da3199edbd3ef19690d61674.svg"
                                alt="Bomb Image" />
                            <img
                                className="goldenCoinImage1 deviceImages"
                                src="https://discordapp.com/assets/9e05338bd66e0985fceb83317cb94b9c.svg"
                                alt="Golden Coin Image" />
                            <img
                                className="goldenCoinImage2 deviceImages"
                                src="https://discordapp.com/assets/9e05338bd66e0985fceb83317cb94b9c.svg"
                                alt="Golden Coin Image" />
                            <img
                                className="questionBoxImage deviceImages"
                                src="https://discordapp.com/assets/81d74b2ebb053fbccee41865a47d48c3.svg"
                                alt="questionBox Image" />
                            <img
                                className="floppyDiskImage deviceImages"
                                src="https://discordapp.com/assets/215346366a9a7d50924fc245ddb048d2.svg"
                                alt="Floppy Disk Image" /> 



                            <img
                                className="desktopImage deviceImages"
                                src="https://discordapp.com/assets/0d82411c439e3558f8b2f6fb12eccbc1.svg"
                                alt="Desktop Image" /> 
                            <img
                                className="potionImage deviceImages"
                                src="https://discordapp.com/assets/0b5a0339571e72656eea93eb55d73eae.svg"
                                alt="Potion Image" />
                            <img
                                className="androidPhoneImage deviceImages"
                                src="https://discordapp.com/assets/5a31f41848bf3ba1817a092ac28c623d.svg"
                                alt="Android Phone Image"/>
                            <img
                                className="applePhoneImage deviceImages"
                                src="https://discordapp.com/assets/82fa4f388cfc9cf47a6972ae39ae90de.svg"
                                alt="Apple Phone Image"/>
                            <img
                                className="controllerImage deviceImages"
                                src="https://discordapp.com/assets/c4bae281354a2b4e2db85415955e0994.svg"
                                alt="Controller Image" />
                            <img
                                className="shieldImage deviceImages"
                                src="https://discordapp.com/assets/15149ecb9d5cd8faa24e1bbf45d70e5b.svg"
                                alt="Shield Image" />
                            <img
                                className="laptopImage deviceImages"
                                src="https://discordapp.com/assets/7edaed9d86e1b5dd9d4c98484372222b.svg"
                                alt="Laptop Phone Image" />
                            <img
                                className="headsetImage deviceImages"
                                src="https://discordapp.com/assets/69db64955960eb333f5ff831cc1c0294.svg"
                                alt="Headset Image" />
                        </div>                         
                    </article>
                </section>
                <footer className="footer">
                    <div className="skillsBar">
                        <ul>
                            <li className="footerTitle">Features</li>
                            
                            <li className="footerEntry">User Authentication</li>
                            <li className="footerEntry">User Bootstrapping</li>
                            <li className="footerEntry">Responsive Design</li>
                            <li className="footerEntry">CRUD Server Funcionality</li>
                        </ul>
                        <ul>
                            <li className="footerTitle">Skills</li>

                            <li className="footerEntry">React</li>
                            <li className="footerEntry">Redux</li>
                            <li className="footerEntry">JavaScript</li>
                            <li className="footerEntry">Ruby on Rails</li>
                            <li className="footerEntry">PostgreSQL</li>
                        </ul>
                    </div>
                    <div className="splashFooterSeparator"></div>
                </footer>
            </div>
        );
    }
}

export default Splash;