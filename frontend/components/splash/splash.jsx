import React from "react";
import { Link } from "react-router-dom";

class Splash extends React.Component {
    render () {
        let splashLoginButtonText = "Login";
        if(this.props.loggedIn) {
            splashLoginButtonText = "Open";
        }

        const loginOpenButton = (
            <Link
                className="splashLoginButton"
                to="/login">
                    {splashLoginButtonText}
            </Link>
        );


        return (
            <div className="splashWrapper">
                <header>
                    <nav className="navBar">
                        <svg viewBox="0 0 220.506 220.506" className="logoIcon"><path d="M201.12,19.385C188.62,6.885,172,0,154.323,0c-17.678,0-34.298,6.885-46.799,19.386L90.547,36.362 c-15.085,15.086-21.336,35.7-18.784,55.381l0.001,46.393l-20.758,20.758c-5.002-1.333-10.556-0.051-14.48,3.873L4.394,194.899 c-5.857,5.858-5.857,15.355,0.001,21.213c2.929,2.93,6.768,4.393,10.606,4.393c3.839,0,7.678-1.465,10.607-4.393L57.74,183.98 c3.923-3.924,5.205-9.477,3.873-14.479l20.759-20.759h46.117c2.913,0.388,5.867,0.6,8.855,0.6c0.003,0,0.004,0,0.005,0 c17.675,0,34.294-6.885,46.794-19.385l16.978-16.977c12.501-12.501,19.384-29.12,19.384-46.798 C220.504,48.505,213.621,31.886,201.12,19.385z M86.764,133.742v-7.926c1.198,1.419,2.447,2.808,3.783,4.144 c1.33,1.329,2.715,2.581,4.134,3.782H86.764z M190.514,102.374l-16.978,16.978c-9.667,9.668-22.518,14.992-36.187,14.991 c-0.001,0-0.003,0-0.004,0c-13.673-0.001-26.525-5.324-36.191-14.989c-19.956-19.957-19.956-52.429,0-72.384l16.977-16.977 C127.798,20.325,140.652,15,154.323,15c13.67,0,26.524,5.324,36.19,14.992c9.667,9.667,14.991,22.519,14.991,36.191 C205.504,79.854,200.181,92.707,190.514,102.374z"/></svg>
                        <ul className="leftSideNav">
                            <li><a href="https://www.linkedin.com/in/diegofrancisco/" target="_Blank" rel="noreferrer"><svg className="onlineProfileIcon" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg></a></li>
                            <li><a href="https://github.com/Wolf-Fivousix" target="_Blank" rel="noreferrer"><svg className="onlineProfileIcon" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg></a></li>
                            <li><a href="https://angel.co/diego-francisco-1" target="_Blank" rel="noreferrer"><svg className="onlineProfileIcon" viewBox="0 0 56.6934 56.6934"><path d="M26.6278,24.5211c0.1606-0.0657,0.3797-0.0986,0.6571-0.0986c0.0876,0,0.2628,0.0076,0.5256,0.0219   c0.2628,0.0146,0.6933,0.0514,1.2922,0.1096l-2.3654-6.8335c-0.6133-1.7375-1.0878-2.8724-1.4236-3.4057   c-0.3362-0.533-0.7009-0.7994-1.0952-0.7994c-0.3066,0-0.5552,0.1171-0.7447,0.3504c-0.1898,0.2336-0.2847,0.5475-0.2847,0.9418   c0,0.6718,0.2552,1.8398,0.7665,3.5043c0.511,1.6646,1.2776,3.8475,2.2997,6.5486C26.3431,24.6999,26.4669,24.5868,26.6278,24.5211   z"/><path d="M29.2561,33.3366c0.3504-0.438,0.7191-0.8357,1.1061-1.1936c0.3866-0.3578,0.7918-0.6754,1.2155-0.9529   c-0.6278-0.0292-1.2231-0.0947-1.785-0.197c-0.5621-0.1019-1.0988-0.2483-1.6098-0.438c0.2333,0.4675,0.4414,0.9344,0.6243,1.4016   C28.9896,32.4243,29.139,32.8842,29.2561,33.3366z"/><path d="M37.1846,27.7297c-0.5989-0.4961-1.7631-0.9418-3.4933-1.336c-1.7302-0.3942-3.5372-0.5914-5.4208-0.5914   c-0.5256,0-0.8979,0.0876-1.1169,0.2628c-0.2191,0.1752-0.3286,0.4746-0.3286,0.8979c0,0.9932,0.5549,1.712,1.6646,2.1573   c1.1094,0.4457,2.9054,0.6681,5.3879,0.6681h0.898c0.2044,0,0.3687,0.0767,0.4928,0.23c0.1238,0.1533,0.2081,0.3833,0.2519,0.6899   c-0.2486,0.2336-0.7593,0.5002-1.5332,0.7993c-0.7741,0.2993-1.3655,0.595-1.774,0.887c-0.8762,0.6428-1.5806,1.4055-2.1136,2.2888   c-0.5333,0.8838-0.7994,1.7194-0.7994,2.5078c0,0.4819,0.1129,1.0623,0.3395,1.7412c0.2264,0.679,0.3395,1.0986,0.3395,1.2593   v0.1533l-0.0438,0.1971c-0.6428-0.0438-1.1499-0.4194-1.5222-1.1279c-0.3724-0.7081-0.5585-1.6536-0.5585-2.8363V36.381   c-0.1171,0.1022-0.23,0.1753-0.3395,0.2191c-0.1095,0.0437-0.23,0.0657-0.3614,0.0657c-0.1315,0-0.2556-0.011-0.3724-0.033   c-0.1171-0.0217-0.2485-0.0547-0.3942-0.0985c0.0438,0.161,0.0767,0.3176,0.0986,0.4709c0.0219,0.1533,0.0328,0.2738,0.0328,0.3615   c0,0.5402-0.2117,1.0042-0.6351,1.3906c-0.4238,0.387-0.9275,0.5804-1.5112,0.5804c-0.9199,0-1.8544-0.449-2.8035-1.347   c-0.9494-0.8979-1.4236-1.7773-1.4236-2.6392c0-0.1605,0.0182-0.303,0.0547-0.427c0.0362-0.1238,0.0986-0.23,0.1862-0.3176   c0.2044,0.2485,0.4891,0.6133,0.8542,1.0952c0.9637,1.3286,1.8541,1.9929,2.6721,1.9929c0.2771,0,0.5256-0.0875,0.7446-0.2627   c0.219-0.1753,0.3285-0.3578,0.3285-0.5476c0-0.219-0.146-0.5837-0.438-1.0951c-0.2924-0.5111-0.6936-1.0875-1.2046-1.7302   c-0.5841-0.7448-1.0699-1.2887-1.4565-1.6317c-0.3869-0.3429-0.6974-0.5146-0.9308-0.5146c-0.5114,0-0.9822,0.2737-1.4127,0.8213   c-0.4308,0.5475-0.6461,1.1936-0.6461,1.9382c0,0.5991,0.1497,1.2671,0.449,2.0042c0.299,0.7373,0.7337,1.4783,1.3032,2.2229   c0.8615,1.1536,1.9307,2.0403,3.2087,2.6609c1.2775,0.6211,2.6902,0.9308,4.238,0.9308c2.8472,0,5.231-1.0621,7.151-3.1864   c1.9198-2.1245,2.8801-4.7855,2.8801-7.9833c0-0.9779-0.0733-1.7555-0.2191-2.3325   C37.7614,28.4123,37.5205,27.9925,37.1846,27.7297z"/><path d="M23.7806,32.3947c0.6425,0.8618,1.2484,1.5332,1.8179,2.0151c0.5695,0.4817,1.0218,0.7227,1.358,0.7227   c0.2482,0,0.4742-0.1128,0.6789-0.3394c0.2044-0.2264,0.3066-0.4709,0.3066-0.7338c0-0.2772-0.2008-0.9232-0.6023-1.9384   c-0.4019-1.0149-0.9017-2.0114-1.5003-2.9896c-0.438-0.7301-0.8687-1.2812-1.2922-1.6537   c-0.4238-0.3722-0.825-0.5584-1.2046-0.5584c-0.3066,0-0.6461,0.1938-1.0185,0.5804c-0.3723,0.387-0.5585,0.7483-0.5585,1.0842   c0,0.3503,0.1826,0.876,0.5475,1.5769C22.6779,30.8618,23.1673,31.6064,23.7806,32.3947z"/><path d="M28.5557,4.0694c-13.5997,0-24.625,11.0234-24.625,24.623c0,13.5997,11.0253,24.625,24.625,24.625   c13.5986,0,24.624-11.0253,24.624-24.625C53.1798,15.0928,42.1543,4.0694,28.5557,4.0694z M36.3414,40.4438   c-2.2122,2.3433-5.0411,3.5149-8.487,3.5149c-1.3579,0-2.6757-0.2446-3.9533-0.7336c-1.278-0.4893-2.3764-1.1719-3.2962-2.0479   c-1.0513-0.9634-1.8398-1.9818-2.3654-3.0549c-0.5257-1.0732-0.7885-2.1718-0.7885-3.2964c0-1.2556,0.2701-2.2263,0.8104-2.9128   c0.5399-0.6863,1.3941-1.1533,2.5625-1.4019c-0.2189-0.511-0.3799-0.9418-0.4818-1.2922   c-0.1022-0.3503-0.1533-0.6205-0.1533-0.8103c0-0.657,0.3468-1.3284,1.0403-2.015c0.6932-0.6863,1.347-1.0294,1.9603-1.0294   c0.2628,0,0.5399,0.0475,0.8322,0.1424c0.2921,0.0952,0.6276,0.2519,1.0075,0.4709c-1.1246-3.1831-1.942-5.6398-2.453-7.3701   c-0.5114-1.7302-0.7665-2.9239-0.7665-3.5809c0-0.9053,0.2333-1.6241,0.7009-2.1573c0.4672-0.533,1.1024-0.7994,1.9054-0.7994   c1.3723,0,3.1101,3.0663,5.2127,9.1989c0.3647,1.0513,0.6425,1.8616,0.8323,2.4312c0.1606-0.4524,0.3867-1.0951,0.679-1.9274   c2.1026-6.0742,3.9128-9.1112,5.4317-9.1112c0.7447,0,1.3394,0.2519,1.785,0.7556c0.4453,0.5038,0.668,1.1794,0.668,2.0259   c0,0.6428-0.2446,1.8179-0.7337,3.5262c-0.4894,1.7084-1.2302,3.9424-2.223,6.702c1.314,0.2485,2.2413,0.8031,2.7815,1.6645   c0.54,0.8618,0.8104,2.2197,0.8104,4.0739C39.6595,35.0888,38.5535,38.1003,36.3414,40.4438z"/><path d="M36.7794,18.7171c0.5475-1.7302,0.8213-2.7925,0.8213-3.1867c0-0.4235-0.0912-0.752-0.2737-0.9856   c-0.1829-0.2334-0.4347-0.3504-0.7556-0.3504c-0.4089,0-0.825,0.3394-1.2484,1.0184c-0.4238,0.679-0.8907,1.7707-1.4017,3.2744   l-2.1902,6.3297l2.7597,0.4819C35.4686,22.6411,36.2318,20.4474,36.7794,18.7171z"/></svg></a></li>
                        </ul>
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
                                href="https://DiegoBueno.dev"
                                target="_blank">
                                    Meet the Developer
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