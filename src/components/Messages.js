import React from 'react';


class Messages extends React.Component {

  render() {
    return (
      <div className="user-conversition__chat-wrapper">
        <div className="user-conversition__chat-box" data-chat="person1">
          <p className="plan-alert text-center">
            Starter Care Plan created + daily actions added
                </p>
          <div className="bubble me">
            <div className="text">
              <div className="msg-details_title">
                Daily grooming assistance
                    </div>
              <div className="msg-details__date">
                <img
                  src={require("../assets/images/messages/vector_smart_object.png")}
                  alt=""
                />
                <div className="details_date">
                  <p>Dec 1</p>
                  <p>Daily</p>
                </div>
              </div>
              <div className="msg-details_content">
                <img src={require("../assets/images/messages/notes_26.png")} alt="" />
                <p>
                  assist with daily grooming activities such as bathing,
                  teeth, hair
                      </p>
              </div>
              <div className="msg-details_action">
                <button type="button" className="btn btn-light">
                  <img src={require("../assets/images/messages/tick.svg")} alt="" />
                        done
                      </button>
                <div className="msg-details_user">
                  <div className="content">
                    <p>Derek Smith completed</p>
                    <span className="date">Mar 23 3:23p</span>
                  </div>
                  <img src={require("../assets/images/chat/user1.jpg")} alt="" />
                </div>
              </div>
            </div>
            <div className="time">
              <span>me</span>
              <div className="msg-details_user">
                <div className="content">
                  <span className="date">12:20p</span>
                </div>
                <img src={require("../assets/images/chat/user1.jpg")} alt="" />
              </div>
            </div>
          </div>
          <div className="bubble you">
            <div className="text">
              <div className="msg-details_title">
                Daily grooming assistance
                    </div>

              <div className="msg-details__date">
                <img
                  src={require("../assets/images/messages/vector_smart_object.png")}
                  alt=""
                />
                <div className="details_date">
                  <p>FRI Oct 12 4:27 PM</p>
                  <p className="email">
                    kbecker@gmail.com completed - THU Oct 11 3:29 PM
                        </p>
                </div>
              </div>
              <div className="msg-details_action">
                <div className="img-wrapper">
                  <span className="icon" >😥</span>
                  <span>Severe</span>
                </div>
                <div className="img-wrapper">
                  <img
                    src={require("../assets/images/messages/invalid_name.png")}
                    alt=""
                  />
                  <span>View History</span>
                </div>
              </div>
            </div>
            <div className="time">
              <span>me</span>
              <div className="msg-details_user">
                <div className="content">
                  <span className="date">12:20p</span>
                </div>
                <img src={require("../assets/images/chat/user3.png")} alt="" />
              </div>
            </div>
          </div>
          <div className="bubble you">
            <p className="text">
              I moved Karen’s knitting kit from the study upstairs to the
              the living room.
                  </p>
            <div className="time">
              <span>me</span>
              <div className="msg-details_user">
                <div className="content">
                  <span className="date">12:20p</span>
                </div>
                <img src={require("../assets/images/chat/user2.jpg")} alt="" />
              </div>
            </div>
          </div>
          <div className="bubble me">
            <p className="text">
              That’s a good call. I’ll be stopping by later to have dinner
              with her. Pizza for everyone! Join us. Lorem ipsum dolor sit
              amet, consectetur adipiscing elit. Maecenas a lorem enim.
              Praesent accumsan feugiat lorem et finibus. Vestibulum
              scelerisque id eros dignissim tincidunt. Morbi id tortor
              egestas, feugiat massa viverra, posuere nisl.
                  </p>
            <div className="time">
              <span>me</span>
              <div className="msg-details_user">
                <div className="content">
                  <span className="date">12:20p</span>
                </div>
                <img src={require("../assets/images/chat/user1.jpg")} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

}


export default Messages;

