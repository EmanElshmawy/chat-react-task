import React from 'react';


class UsersTitle extends React.Component {
  toggleBtn(e,contactList) {
    // console.log("hello",e,contactList);
    
    // contactList.target.classList.remove('active');

    // if (contactList.classNameList.contains('active')) {
    // } else {
    //   contactList.classNameList.add('active');
    // }
  };
  render() {
    return (
      <div className="user-list__header">
        <p>Conversations</p>
        <div className="icon">
          <img src={require("../assets/images/actionbox/new_conversation.png")} alt="" className="img-fluid w-100" />
        </div>
        {/* <button type="button" id="contactListClose" className="btn btn-info float-right" onClick={(e) => this.toggleBtn(e,this.props.contactList)}> */}

        <button type="button" id="contactListClose" className="btn btn-info float-right">
          <i className="fa fa-times" aria-hidden="true"></i>
        </button>
      </div>
    );
  }

}


export default UsersTitle;

