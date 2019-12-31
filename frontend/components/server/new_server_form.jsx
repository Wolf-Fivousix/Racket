import React from "react";
import CreateServerFormContainer from "./create_server_form_container";
import JoinServer from "./join_server_form";

class NewServerForm extends React.Component {
  constructor(props) {
    super(props);
    this.addNewServer = this.addNewServer.bind(this);
    this.joinServer = this.joinServer.bind(this);
  }
  
  addNewServer() {
    this.props.openModal(() => <CreateServerFormContainer />);
  }

  joinServer() {
    this.props.openModal(() => <JoinServer />);
  }

  render() {
    return(
      <div className="newServerFormBackground modalDefault">
        <h1 className="newServerMessage">OH, ANOTHER SERVER HUH?</h1>
        <div className="newServerChoiceBoxes">
          <div className="newServerCard">
            <img
              className="createServerImage"
              src="https://discordapp.com/assets/845d431ebfc24e13a0b31f7e64fc612b.png" alt="Create Server Image" />
            <button
              onClick={this.addNewServer}
              className="createANewServerButton button">
              Create a server
            </button>
          </div>

          <div className="newServerCard">
            <img
              className="createServerImage"
              src="https://discordapp.com/assets/845d431ebfc24e13a0b31f7e64fc612b.png" alt="" />
            <button
              onClick={this.joinServer}
              className="joinAnExistingServerButton button">
              Join a Server
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default NewServerForm;