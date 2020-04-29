import React from 'react';


class MessagesTyping extends React.Component {

  render() {
    return (
        <div className="messageInput">
        <div className="messageInput__image-wrapper float-left">
            <img src={require("../assets/images/messageInputBar/invalid_name.png")} alt="" className="img-fluid w-100" />
            <input id="my_file" type="file" className="input-file" />
        </div>
        <div className="form-group">
            <input type="text" placeholder="message" className="form-control" id="btn-input" />
        </div>
        <div className="btn-wrapper" id="btn-chat">
            <img src={require("../assets/images/messageInputBar/send.svg")} alt="" className="img-fluid w-100" />
        </div>
    </div>
    );
  }

}


export default MessagesTyping;

