import React from 'react';


class UserControl extends React.Component {



  render() {
    return (
      <div className="user-conversition__actionBar">
        <button type="button" id="contactListCollapse" className="btn btn-info float-left" onClick={this.props.clickAction}>
          <img src={require("../assets/images/topBar/menu.svg")} alt="" />
        </button>
        <p className="title">
          <span className="name">Mom’s Discharge Plan</span>
        </p>
        <ul className="setting list-unstyled">
          <li>
            <img src={require("../assets/images/topBar/ico_group.png")} alt="" className="img-fluid w-100" />
          </li>
          <li>
            <img src={require("../assets/images/topBar/ico_filter.png")} alt="" className="img-fluid w-100" />
          </li>
          <li>
            <img src={require("../assets/images/topBar/ico_search.png")} alt="" className="img-fluid w-100" />
          </li>
        </ul>
      </div>
    );
  }

}


export default UserControl;

