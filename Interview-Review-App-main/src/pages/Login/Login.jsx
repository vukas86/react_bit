import React, {useState} from "react";
import "./Login.scss";
import { useHistory } from "react-router-dom";
import App from "../../App/App";
import { getToken } from "../../fetch/fetch";

const Login = ({users}) => {
  const history = useHistory();
  const [password, setPassword] = useState("");
  const [userN, setUserN] = useState("");
  const [token, setToken] = useState("");


const handleLogin = () =>{
  getToken(userN, password).then(data=>console.log(data))}





  return (
    <section className="login-section">
      <div className="login-form">
        <h2>Admin Login</h2>
        <div className="login-content">
          <span>Email</span>
          <input type="text" name="" id="" onChange={(e) => setUserN(e.target.value) } />
          <span>password</span>
          <input type="password" name="" id="" onChange={(e) => setPassword(e.target.value)} />
          <button id="login-id" onClick={handleLogin}>Log in</button>
        </div>
      </div>
    </section>
  );
};

export default Login;


