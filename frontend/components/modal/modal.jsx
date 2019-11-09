import React from 'react';

class Modal extends React.Component {
  render () { 
    if (!this.props.modal) {
      return null;
    }

    return (
      <div className="modal-background" onClick={this.props.closeModal}>
        <div className="modal-child" onClick={e => e.stopPropagation()}>
          {this.props.modal()}
        </div>
      </div>
    );
  };
}

export default Modal;