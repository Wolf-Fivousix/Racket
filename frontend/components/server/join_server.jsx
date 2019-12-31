import React from "react";
import { useSelector, useDispatch } from "react-redux";

export default function JoinServer(props) {







    let joinServerLabel = "serverNameLabel";
    let joinServerErrorMessage = "";
    const errorsArray = useSelector(state => state.errors.servers.responseJSON);
    if (errorsArray) {
        joinServerLabel += " serverWithErrors";
        joinServerErrorMessage = " - " + errorsArray;
    }

    return (
        <div className="modalDefault">
        <form
            className="joinServerForm"
            // onSubmit={this.handleSubmit}
            >
            <div>
                <h1 className="joinServerMessage">JOIN A SERVER</h1>
                <h3 className="joinServerSubMessage">Enter a Server ID below to join an existing server.</h3>
            </div>
        
            <label className={joinServerLabel}>
                {`SERVER ID${joinServerErrorMessage}`}
            </label>
            <input
                className="joinServerInputField"
                type="text"
                // onChange={this.handleInput("name")}
                placeholder="Enter an ID" />
            <div className="joinServerFormButtonsBar">
                <button
                    type="button"
                    className="goBackButton"
                    // onClick={this.backToNewServerForm}
                    >
                    <img
                        className="goBackButtonImage"
                        src="https://discordapp.com/assets/eb57a76361c43375bf23207ad2acc631.svg"
                        alt="Go Back Button Image" />
                    <p className="goBackButtonText">BACK</p>
                </button>

                <button
                    className="joinServerSubmitButton button">
                    Join
                </button>
            </div>
        </form>
    </div>
    );
};