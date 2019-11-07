import React from "react";

class Splash extends React.Component {
    render () {
        return (
            <div className="spalshWrapper">
                <header>
                    <nav className="navBar">
                        Nav Bar
                    </nav>
                </header>

                <section className="splashContent">
                    <article className="splashMessage">
                        <h1 className="title">It's time to ditch Skype and TeamSpeak.</h1>
                        <h3 className="subtitle">All-in-one voice and text chat for gamers that's free, secure, and works on both your desktop and phone. Stop paying for TeamSpeak servers and hassling with Skype. Simplify your life.</h3>
                        <div className="callToActionButtons">
                            <button className="githubButton">Check my Github</button>
                            <button className="contactButton">Contact Me =)</button>
                        </div>
                    </article>
                    <article className="splashImages">
                        Device Images
                        <img
                            className="androidPhoneImage deviceImages"
                            src="https://discordapp.com/assets/5a31f41848bf3ba1817a092ac28c623d.svg"
                            alt="Android Phone Image"/>
                        <img
                            className="applePhoneImage deviceImages"
                            src="https://discordapp.com/assets/82fa4f388cfc9cf47a6972ae39ae90de.svg"
                            alt="Apple Phone Image"/>
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