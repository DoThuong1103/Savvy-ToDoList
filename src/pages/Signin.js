import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import "./Signin.css";
import imgLeft from "../image/img1.png";
import imgRight from "../image/img2.png";
function Signin() {
  const userRef = useRef();
  const errRef = useRef();
  const [userName, setUserName] = useState("");
  const [pasword, setPassword] = useState("");
  const [errMsg, setRErrMsg] = useState("");
  const [success, setSetSuccess] = useState(false);

  return (
    <div className="signin">
      <div className="background">
        <div className="background-left">
          <div className="img-left">
            <img src={imgLeft} alt="" />
          </div>
        </div>
        <div className="background-right">
          <div className="img-right">
            <img src={imgRight} alt="" />
          </div>
        </div>
      </div>
      <div className="dialog-signin">
        <div className="signinForm">
          <div className="text-header">
            <div className="text-right">
              <p>Welcome to Lorem</p>
              <h1>Sign in</h1>
            </div>
            <div className="text-left">
              <p>No account?</p>
              <Link to="/signup" className="text-signup">
                Sign up
              </Link>
            </div>
          </div>
          <div className="box-input">
            <div>
              <p>Enter your username or email address</p>
              <input
                type="text"
                onChange={(e) => {
                  setUserName(e.target.value);
                }}
                placeholder="Username or email address"
              />
            </div>
            <div>
              <p>Enter your Password</p>
              <input
                type="password"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                placeholder="Password"
              />
            </div>
          </div>
          <div>
            <button className="btn-signin">Sign in</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signin;
