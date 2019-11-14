import React from "react";
import CreateServerFormContainer from "./create_server_form_container";

class NewServerForm extends React.Component {
  constructor(props) {
    super(props);
    this.addNewServer = this.addNewServer.bind(this);
  }
  
  addNewServer() {
    this.props.openModal(() => <CreateServerFormContainer />);
  }

  render() {
    return(
      <div className="newServerFormBackground modalDefault">
        <h1 className="newServerMessage">OH, ANOTHER SERVER HUH?</h1>
        <div className="newServerChoiceBoxes">
          <button
            onClick={this.addNewServer}
            className="createANewServerButton button">
            Create a server
          </button>
          <button className="joinAnExistingServerButton button">
            Join a Server
          </button>
        </div>
      </div>
    );
  }
}

export default NewServerForm;