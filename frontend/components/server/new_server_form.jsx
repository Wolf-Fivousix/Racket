import React from "react";


class NewServerForm extends React.Component {
  
  addNewSerer() {
    console.log("you have a new server");
    this.props.openModal(() => {});
  }

  render() {
    return(
      <div className="newServerFormBackground">
        <h1 className="newServerMessage">OH, ANOTHER SERVER HUH?</h1>
        <div className="newServerChoiceBoxes">
          <button
            onClick={this.addNewSerer}
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