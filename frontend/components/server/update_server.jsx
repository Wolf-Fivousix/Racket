import React from 'react';
import { withRouter } from "react-router-dom";

class UpdateServer extends React.Component {
    render() {
        return (
            <div className="updateServerModal modalDefault">
                <form className="UpdateServerForm">
                    <label className="updateServerLabel">Master, what should be my new name?
                        <input type="text" className="updateServerInput defaultInput"/>
                    </label>

                    <button
                        className="updateServerButton button"
                        onClick={() => console.log("Beep Boop, name update!")}>
                        Update Name
                    </button>
                </form>
            </div>
        );
    }
}

export default withRouter(UpdateServer);