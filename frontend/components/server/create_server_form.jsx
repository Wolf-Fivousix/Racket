import React from "react";
import NewServerFormContainer from "./new_server_form_container";

class CreateServerForm extends React.Component {
    constructor(props) {
        super(props);
        this.backToNewServerForm = this.backToNewServerForm.bind(this);
    }

    backToNewServerForm() {
        console.log("going baaaaaaack");
        this.props.openModal(() => <NewServerFormContainer />)
    }

    render () {
        return (
            <div className="test">Hello!
                <button onClick={this.backToNewServerForm}>
                    {"<<<<<"} Click me to go Back!!! {'<<<<'}
                </button>
            </div>
        );
    }
}

export default CreateServerForm;