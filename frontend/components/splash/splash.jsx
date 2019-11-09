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
            <div className="spalshWrapper">
                <header>
                    <nav className="navBar">
                        Logo
                        {loginOpenButton}
                    </nav>
                </header>

                <section className="splashContent">
                    <article className="splashMessage">
                        <div className="splashText">
                            <h1 className="title">It's time to ditch Skype and TeamSpeak.</h1>
                            <h3 className="subtitle">All-in-one voice and text chat for gamers that's free, secure, and works on both your desktop and phone. Stop paying for TeamSpeak servers and hassling with Skype. Simplify your life.</h3>
                        </div>
                        <div className="callToActionButtons">
                            <button className="githubButton">Check my Github</button>
                            <button className="contactButton">Contact Me =)</button>
                        </div>
                    </article>
                    <article className="splashImages">
                        <div className="deviceImagesContainer">
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
                                className="desktopImage deviceImages"
                                src="https://discordapp.com/assets/0d82411c439e3558f8b2f6fb12eccbc1.svg"
                                alt="Desktop Image" /> 
                            <img
                                className="controllerImage deviceImages"
                                src="https://discordapp.com/assets/c4bae281354a2b4e2db85415955e0994.svg"
                                alt="Controller Image" />
                            <img
                                className="laptopImage deviceImages"
                                src="https://discordapp.com/assets/7edaed9d86e1b5dd9d4c98484372222b.svg"
                                alt="Laptop Phone Image" />
                            <img
                                className="headsetImage deviceImages"
                                src="https://discordapp.com/assets/69db64955960eb333f5ff831cc1c0294.svg"
                                alt="Headset Image" />
                            <img
                                className="shieldImage deviceImages"
                                src="https://discordapp.com/assets/15149ecb9d5cd8faa24e1bbf45d70e5b.svg"
                                alt="Shield Image" />
                        </div>                         
                    </article>
                </section>
                <footer className="footer">
                    Footer
                </footer>
            </div>
        );
    }
}

export default Splash;