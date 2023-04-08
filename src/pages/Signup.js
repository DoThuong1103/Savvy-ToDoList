import { Link } from "react-router-dom";
import "./Signup.css";
import imgLeft from "../image/img1.png";
import imgRight from "../image/img2.png";
function Signin() {
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
      <div className="dialog-signup">
        <div className="signupForm">
          <div className="text-header">
            <div className="text-right">
              <p>Welcome to Lorem</p>
              <h1>Sign up</h1>
            </div>
            <div className="text-left">
              <p>No account?</p>
              <Link to="/signin" className="text-signin">
                Sign in
              </Link>
            </div>
          </div>
          <div className="box-input">
            <div>
              <p>Enter your username or email address</p>
              <input type="text" placeholder="Username or email address" />
            </div>
            <div>
              <p>Enter your Password</p>
              <input type="password" placeholder="Password" />
            </div>

            <div>
              <p>Confirm your Password</p>
              <input type="password" placeholder="Password" />
            </div>
          </div>
          <div>
            <button className="btn-signup">Sign up</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signin;
