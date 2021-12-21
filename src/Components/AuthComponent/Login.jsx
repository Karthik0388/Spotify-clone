import React from "react";
import "./auth.css";
import Logo from "./../../Pages/HeaderComponent/Logo";
import LoginForm from "./LoginForm";
import { toast } from "react-toastify";
import { useHistory, Link } from "react-router-dom";
import SocialLogin, {
  GoogleProvider,
  FacebookProvider,
} from "./LoginWithSocialMedia";
const Login = () => {
  let history = useHistory();

  let handleClick = async Provider => {
    try {
      await SocialLogin(Provider);
      toast.success("SuccessFully logged in");
      history.push("/userhome/profile");
    } catch (error) {
      toast.error(error.message);
    }
  };
  return (
    <section id="authBlock">
      <article>
        <Logo />
        <p className="orBlock1"></p>
        <h4>To continue, log in to Spotify.</h4>
        <div className="loginContent">
          <button
            className="btn1"
            onClick={() => {
              handleClick(FacebookProvider);
            }}
          >
            CONTINUE WITH FACEBOOK
          </button>

          <button className="btn2">CONTINUE WITH APPLE</button>

          <button
            className="btn3"
            onClick={() => {
              handleClick(GoogleProvider);
            }}
          >
            CONTINUE WITH GOOGLE
          </button>

          <button className="btn4">
            <Link className="Link" to="/phone-auth">CONTINUE WITH PHONE NUMBER</Link>
          </button>
        </div>
        <p className="orBlock2">
          <strong>or</strong>
        </p>
        <div className="formContent">
          <LoginForm />
        </div>
        <div className="loginContent">
          <h1>Don't have an account?</h1>
          <button className="btn5">SIGN UP FOR SPOTIFY</button>
        </div>
      </article>
    </section>
  );
};

export default Login;
