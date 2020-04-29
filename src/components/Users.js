import React from 'react';
import UserDetails from './UserDetails';


class Users extends React.Component {
    state ={ UserData: [],

     };
     componentWillMount() {
        this.setState({
            UserData: [{
                id: 1,
                name: 'Karen Becker',
                image: require('../assets/images/chat/user3.png'),
                msgTitle: 'Mom’s Discharge Plan',
                msg: 'Lorem Ipsum is simply dummy text of the printing and typesetting',
                date: '31 oct',
                MsgReceived: '2'
            },
            {
                id: 2,
                name: 'Karen Becker',
                image: require('../assets/images/chat/user1.jpg'),
                msgTitle: 'Mom’s Discharge Plan',
                msg: 'Lorem Ipsum is simply dummy text of the printing and typesetting',
                date: '31 oct',
                MsgReceived: '2'
            },
            {
                id: 3,
                name: 'Karen Becker',
                image: require('../assets/images/chat/user2.jpg'),
                msgTitle: 'Mom’s Discharge Plan',
                msg: 'Lorem Ipsum is simply dummy text of the printing and typesetting',
                date: '31 oct',
                MsgReceived: '2'
            },
            {
                id: 4,
                name: 'Karen Becker',
                image: require('../assets/images/chat/user3.png'),
                msgTitle: 'Mom’s Discharge Plan',
                msg: 'Lorem Ipsum is simply dummy text of the printing and typesetting',
                date: '31 oct',
                MsgReceived: '2'
            },
            {
                id: 5,
                name: 'Karen Becker',
                image: require('../assets/images/chat/user1.jpg'),
                msgTitle: 'Mom’s Discharge Plan',
                msg: 'Lorem Ipsum is simply dummy text of the printing and typesetting',
                date: '31 oct',
                MsgReceived: '2'
            },
            {
                id: 6,
                name: 'Karen Becker',
                image: require('../assets/images/chat/user2.jpg'),
                msgTitle: 'Mom’s Discharge Plan',
                msg: 'Lorem Ipsum is simply dummy text of the printing and typesetting',
                date: '31 oct',
                MsgReceived: '2'
            }, {
                id: 7,
                name: 'Karen Becker',
                image: require('../assets/images/chat/user3.png'),
                msgTitle: 'Mom’s Discharge Plan',
                msg: 'Lorem Ipsum is simply dummy text of the printing and typesetting',
                date: '31 oct',
                MsgReceived: '2'
            }, {
                id: 8,
                name: 'Karen Becker',
                image: require('../assets/images/chat/user3.png'),
                msgTitle: 'Mom’s Discharge Plan',
                msg: 'Lorem Ipsum is simply dummy text of the printing and typesetting',
                date: '31 oct',
                MsgReceived: '2'
            }
            , {
                id: 9,
                name: 'Karen Becker',
                image: require('../assets/images/chat/user3.png'),
                msgTitle: 'Mom’s Discharge Plan',
                msg: 'Lorem Ipsum is simply dummy text of the printing and typesetting',
                date: '31 oct',
                MsgReceived: '2'
            }
            ]
        });
    }

    render() {
        return this.state.UserData.map(userData => {
            return <UserDetails key={userData.id} userData={userData}></UserDetails>
        })

    }

}


export default Users;