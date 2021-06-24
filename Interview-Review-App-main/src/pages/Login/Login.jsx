import React from "react";
import "./Login.scss";
import { useHistory } from "react-router-dom";
import {login} from '../../components/utilies';

const Login = () => {
  const history = useHistory();

const handleLogin = () =>{
  login();
  history.push('/admin');
}


  return (
    <section className="login-section">
      <div className="login-form">
        <h2>Admin Login</h2>
        <div className="login-content">
          <span>Username</span>
          <input type="text" name="" id="" />
          <span>password</span>
          <input type="password" name="" id="" />
          <button id="login-id" onClick={handleLogin}>Log in</button>
        </div>
      </div>
    </section>
  );
};

export default Login;
