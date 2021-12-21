import React from "react";
import "./auth.css";
import Logo from "./../../Pages/HeaderComponent/Logo";
import SignUpForm from './SignUpForm';

const Signup = () => {
  return (
    <div>
      <section id="authBlock">
        <article>
          <Logo/>
          <div className="authContent">
            <h1>Sign up fro free to start listnening</h1>
            <button>Sign up with FaceBook</button>
            <p className="orBlock">
              <strong>or</strong>
            </p>
          </div>
          <div className="formContent">
            <SignUpForm/>
          </div>
        </article>
      </section>
    </div>
  );
};

export default Signup;
