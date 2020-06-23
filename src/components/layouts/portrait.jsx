import React, { useState, useEffect } from 'react';
import portrait from 'assets/portrait.jpeg'
import {Link, useHistory} from 'react-router-dom'
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import Cookies from 'js-cookie'
import { Redirect } from 'react-router-dom'
import * as UserAPI from 'services/authAPI'
import { logoutSuccess } from 'redux/actions/authActions.jsx'
import { infoUserDown } from 'redux/actions/userActions.jsx'
import { useSelector, useDispatch } from 'react-redux';


function Portrait() {

  const dispatch = useDispatch();
  const [redirect, setRedirect] = useState('')
  const myfirstName = useSelector(state => state.userReducer.first_name)
  const myType = useSelector(state => state.authReducer.typeUser)
  const isAuth = useSelector(state => state.authReducer.isAuth)

  let history = useHistory();

  function logout(){
    UserAPI.sign_out(myType)
    dispatch(logoutSuccess())   
    dispatch(infoUserDown())
    Cookies.remove('token', {sameSite: 'lax'});
    history.push("/");
  }

  return(
    <div className="dropdown">
      <div id="navbarDropdownMenuLink" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
        <img src={portrait} className="rounded-circle" alt="portrait" id='portrait'/>
      </div>
      <div id="portrait-menu" className="dropdown-menu mt-2" aria-labelledby="navbarDropdownMenuLink">
        <p className="m-0 dropdown-item"> {myfirstName} </p>
        <Link className="dropdown-item" to="/profile"> Profile </Link>
        <p className="m-0 dropdown-item" onClick={logout}> Logout </p>  
      </div>
    </div> 

  )
}

export default Portrait
