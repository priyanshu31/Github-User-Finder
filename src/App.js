import React, { Fragment, useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import Search from './components/layout/Search';
import Alert from './components/layout/Alert';
import axios from 'axios';

function App () {

  let [loading, setLoading] = useState(false);
  let [users, setUsers] = useState([]);
  let [alert, setAlert] = useState(null);

  // const loadusers = async () => {
    
  //   const res = await axios.get(`https://api.github.com/users?client_id=${process.env.CLIENT_ID}&client_secret=${process.env.CLIENT_SECRET}`);
    
  //   setLoading(false);
  //   setUsers(res.data);
  // }

  const searchUsers = async e => {
    
    setLoading(true);

    console.log(e);
    const res = await axios.get(`https://api.github.com/search/users?q=${e}&client_id=${process.env.CLIENT_ID}&client_secret=${process.env.CLIENT_SECRET}`);
    
    console.log(res);
    setLoading(false);
    setUsers(res.data.items);
  }

  const clearUsers = () => setUsers([]);
  const setAlerts = (msg, type) => {
    setAlert({msg, type})
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  // useEffect(loadusers);

  return (
    <Fragment>
      <Navbar/>
      <div className="container">
          <Alert  alert = { alert }/>
          <Search searchUsers = { searchUsers } clearUsers = { clearUsers } showClear = { users.length ? true : false } setAlerts = { setAlerts }/>
          <Users loading={loading} users={users}/>
      </div>
    </Fragment>
  );

}

export default App;
