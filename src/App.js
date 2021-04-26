import React, {useState} from 'react';
import classes from './App.module.css';
import User from './Components/User/User';
import UserList from './Components/User/UserList';


function App() {

      const DUMMY_USERS = [
        {
            id: '1',
            name: 'Alhuck',
            age: '29'
        },
        {
            id: '2',
            name: 'Sindhura',
            age: '26'
        }, {
            id: '3',
            name: 'Senthil',
            age: '29'
        }, {
            id: '4',
            name: 'Allah',
            age: '9909908009809'
        }
    ]

    const [users, setUserList] = useState(DUMMY_USERS);

    const appOnSubmitHandler = (newUser) => {

      setUserList( prevState => [newUser, ...prevState]);
    }

  return (
    <div className={classes.App}>
      <h1>My app!</h1>
      <User formSubmit={appOnSubmitHandler}/> 
      <UserList userList={users}/>
    </div>
  );
}

export default App;
