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
                        <svg viewBox="0 0 220.506 220.506" className="logoIcon">
                            <path d="M201.12,19.385C188.62,6.885,172,0,154.323,0c-17.678,0-34.298,6.885-46.799,19.386L90.547,36.362
                                c-15.085,15.086-21.336,35.7-18.784,55.381l0.001,46.393l-20.758,20.758c-5.002-1.333-10.556-0.051-14.48,3.873L4.394,194.899
                                c-5.857,5.858-5.857,15.355,0.001,21.213c2.929,2.93,6.768,4.393,10.606,4.393c3.839,0,7.678-1.465,10.607-4.393L57.74,183.98
                                c3.923-3.924,5.205-9.477,3.873-14.479l20.759-20.759h46.117c2.913,0.388,5.867,0.6,8.855,0.6c0.003,0,0.004,0,0.005,0
                                c17.675,0,34.294-6.885,46.794-19.385l16.978-16.977c12.501-12.501,19.384-29.12,19.384-46.798
                                C220.504,48.505,213.621,31.886,201.12,19.385z M86.764,133.742v-7.926c1.198,1.419,2.447,2.808,3.783,4.144
                                c1.33,1.329,2.715,2.581,4.134,3.782H86.764z M190.514,102.374l-16.978,16.978c-9.667,9.668-22.518,14.992-36.187,14.991
                                c-0.001,0-0.003,0-0.004,0c-13.673-0.001-26.525-5.324-36.191-14.989c-19.956-19.957-19.956-52.429,0-72.384l16.977-16.977
                                C127.798,20.325,140.652,15,154.323,15c13.67,0,26.524,5.324,36.19,14.992c9.667,9.667,14.991,22.519,14.991,36.191
                                C205.504,79.854,200.181,92.707,190.514,102.374z"/>
                        </svg>
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
                                href="mailto:DiegoFranciscoBueno+Racket@gmail.com">Contact Me</a>
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
                        <ul className="skillsList">
                            <li className="footerTitle">Features</li>
                            
                            <li className="footerEntry">User Authentication</li>
                            <li className="footerEntry">User Bootstrapping</li>
                            <li className="footerEntry">Responsive Design</li>
                            <li className="footerEntry">CRUD Server Funcionality</li>
                        </ul>
                        <ul>
                            <li className="footerTitle">Technologies</li>

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