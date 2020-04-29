

import React from 'react'


const UserDetails = ({ userData }) => {
  const { name, image , msgTitle, date ,msg,MsgReceived } = userData;
          return (
          <li className="user-list__msg" data-chat="">

          <div className="user-list__item">
            <img className="personImg" src={image} alt="" />
            <div className="user-list__item__info">
              <p className="msg-title">{msgTitle}</p>
              <h3 className="name">{name}</h3>
              <p className="msg-prev">
               {msg} </p>
            </div>
            <div className="user-list__item__date">
              <span className="date">{date}</span>
              <p className="badge badge-secondary">{MsgReceived}</p>
            </div>
          </div>
        </li>
        )
    }
export default UserDetails;

