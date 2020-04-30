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
                MsgReceived: 0,
            },
            {
                id: 2,
                name: 'Karen Becker',
                image: require('../assets/images/chat/user1.jpg'),
                msgTitle: 'Mom’s Diet',
                msg: 'Lorem Ipsum is simply dummy text of the printing and typesetting',
                date: '31 oct',
                MsgReceived: 2
            },
            {
                id: 3,
                name: '',
                image: require('../assets/images/chat/user2.jpg'),
                msgTitle: 'Anthony Baer',
                msg: 'Lorem Ipsum is simply dummy text of the printing and typesetting',
                date: '31 oct',
                MsgReceived: 0
            },
            {
                id: 4,
                name: 'Love One',
                image: require('../assets/images/chat/user3.png'),
                msgTitle: 'Easter Weekend',
                msg: 'Lorem Ipsum is simply dummy text of the printing and typesetting',
                date: '31 oct',
                MsgReceived: 0
            },
            {
                id: 5,
                name: '',
                image: require('../assets/images/chat/user1.jpg'),
                msgTitle: 'Stephanie Kim',
                msg: 'Lorem Ipsum is simply dummy text of the printing and typesetting',
                date: '31 oct',
                MsgReceived: 0
            },
            {
                id: 6,
                name: 'Love One',
                image: require('../assets/images/chat/user2.jpg'),
                msgTitle: 'Spring break schedule',
                msg: 'Lorem Ipsum is simply dummy text of the printing and typesetting',
                date: '31 oct',
                MsgReceived: 0
            }, {
                id: 7,
                name: '',
                image: require('../assets/images/chat/user3.png'),
                msgTitle: 'David Williams',
                msg: 'Lorem Ipsum is simply dummy text of the printing and typesetting',
                date: '31 oct',
                MsgReceived: 0
            }, {
                id: 8,
                name: 'Love One',
                image: require('../assets/images/chat/user3.png'),
                msgTitle: 'Spring break schedule',
                msg: 'Lorem Ipsum is simply dummy text of the printing and typesetting',
                date: '31 oct',
                MsgReceived: 0
            }
            , {
                id: 9,
                name: 'Karen Becker',
                image: require('../assets/images/chat/user3.png'),
                msgTitle: 'Mom’s Discharge Plan',
                msg: 'Lorem Ipsum is simply dummy text of the printing and typesetting',
                date: '31 oct',
                MsgReceived: 0
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