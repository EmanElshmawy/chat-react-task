import React from 'react';
import './App.scss';
import Scrollbar from '../node_modules/react-scrollbars-custom';
import Users from './components/Users';
import UsersTitle from './components/UsersTitle';
import ActionBox from './components/ActionBox';
import UserControl from './components/UserControl';
import Messages from './components/Messages';
import MessagesTyping from './components/MessagesTyping';

class App extends React.Component {
    // constructor() {
    //     super();
    //     this.contactList = this.contactList.bind(this);
    //     this.state = {
    //         x: document.getElementById('contactList'),

    //     };
    // }
    // contactList() {
    //     this.setState({
    //         x: document.getElementById('contactList'),

    //     });
    // }
    render() {
        return (
            <section className="chatbox">
                <div className="chatbox__wrapper">
                    <ActionBox></ActionBox>
                    <div className="contact-list" id="contactList">
                        {/* <UsersTitle contactList={this.contactList()}></UsersTitle> */}
                        <UsersTitle></UsersTitle>
                        <Scrollbar style={{ width: 300 }}>
                            <div className="user-list">
                                <ul className="user-list__wrapper">
                                    <Users></Users>
                                </ul>
                            </div>
                        </Scrollbar>
                    </div>
                    <div className="user-conversition" id="content">
                        <div className="user-conversition__wrapper">
                            <UserControl></UserControl>
                            <Scrollbar >
                                <Messages></Messages>
                            </Scrollbar>
                            <MessagesTyping></MessagesTyping>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default App;
