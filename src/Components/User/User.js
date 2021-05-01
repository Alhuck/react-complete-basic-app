import React, {useState} from 'react';
import classes from './User.module.css';
import { inferredPredicate } from '@babel/types';
import ErrorModal from './Modal/ErrorModal';


const User = (props) => {

    const [userName, setUserName] = useState('');
    const [userAge, setUserAge] = useState('');
    let isShowModal;

    const resetUserDetails = () => {

        setUserName('');
        setUserAge('');
    }

    const OnSubmitHandler = (event) => {
        event.preventDefault();

        if (userName.trim().length === 0 || userAge.trim().length === 0 || parseInt(userAge) < 0) {

            isShowModal();
            return;
        }
        const userDetails = {
            id: Math.random()*100,
            name: userName,
            age: userAge
        }

        props.formSubmit(userDetails);
        resetUserDetails();
    }

    const userNameChangeHandler = (event) => {
        setUserName(event.target.value);
    }

    const userAgeChangeHandler = (event) => {
        setUserAge(event.target.value);
    }


    const openModal = (ele) => {
        isShowModal = ele;
    }

    const errorMsgToRender = () => {

        if(userName.trim().length == 0) {
            return 'Enter proper user name';
        } else if (userAge.trim().length == 0 || parseInt(userAge) < 0) {
            return 'Enter proper user age';
        } else {
            return 'xxxx';
        }
    }

    return (
        <form onSubmit={OnSubmitHandler}>
            <ErrorModal onShowModal={openModal} labelMsg={errorMsgToRender()}/>
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