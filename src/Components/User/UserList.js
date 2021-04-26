import React, {useState} from 'react';
import classes from './UserList.module.css';

const UserList = (props) => {


    return (
        <div>
            {props.userList.map(user => <div key={user.id} >{user.name} ( {user.age} Years Old ) </div>)}
        </div>
    );

}

export default UserList;