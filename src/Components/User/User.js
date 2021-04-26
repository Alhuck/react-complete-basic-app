import React, {useState} from 'react';
import classes from './User.module.css';
import { inferredPredicate } from '@babel/types';


const User = (props) => {

    const [userName, setUserName] = useState('');
    const [userAge, setUserAge] = useState('');

    const OnSubmitHandler = (event) => {
        event.preventDefault();

        if(userName.trim().length === 0 || userAge.trim().length === 0) {
            alert('Add User Details');
            return;
        }
        const userDetails = {
            id: Math.random()*100,
            name: userName,
            age: userAge
        }

        props.formSubmit(userDetails)
    }

    const userNameChangeHandler = (event) => {
        setUserName(event.target.value);
    }

    const userAgeChangeHandler = (event) => {
        setUserAge(event.target.value);
    }

    return (
        <form onSubmit={OnSubmitHandler}>
            <div>
                <label> UserName </label>
                <input type="text" value={userName} onChange={userNameChangeHandler}/>
            </div>
            <div>
                <label> Age </label>
                <input type="number" value={userAge} onChange={userAgeChangeHandler}/>
            </div>
            <div>
                <button type="submit"> Add User</button>
            </div>
        </form>
    );
}

export default User;