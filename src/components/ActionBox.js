

import React from 'react'


const ActionBox = () => {
  
          return (
            <div className="action-box">
            <ul className="action-box__wrapper list-unstyled">
                <li>
                    <img src={require("../assets/images/actionbox/logo_outline.png")} alt="" className="img-fluid w-100" />
                </li>
                <li className="active">
                    <img src={require("../assets/images/actionbox/ico_conversation_png.png")} alt="" className="img-fluid w-100" />
                </li>
                <li>
                    <img src={require("../assets/images/actionbox/ico_profile_png.png")} alt="" className="img-fluid w-100" />
                </li>
                <li>
                    <img src={require("../assets/images/actionbox/cog.png")} alt="" className="img-fluid w-100" />
                </li>
                <li>
                    <img src={require("../assets/images/actionbox/logout.png")} alt="" className="img-fluid w-100" />
                </li>
            </ul>
        </div>    
        )
    }
export default ActionBox;

