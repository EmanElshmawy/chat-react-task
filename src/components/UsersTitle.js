import React from 'react';


class UsersTitle extends React.Component {

  render() {
    return (
      <div className="user-list__header">
        <p>Conversations</p>
        <div className="icon">
          <img src={require("../assets/images/actionbox/new_conversation.png")} alt="" className="img-fluid w-100" />
        </div>

        <button type="button" id="contactListClose" className="btn btn-info float-right" onClick={this.props.clickAction}>
        <img src={require("../assets/images/topBar/close.svg")} alt="" />
        </button>
      </div>
    );
  }

}


export default UsersTitle;

