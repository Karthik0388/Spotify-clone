import React, { useState } from "react";
import { Link, withRouter } from "react-router-dom";
import firebase from "./../../FireBase";
import { toast } from 'react-toastify';

const LoginForm = ({ history }) => {
  let [state, setState] = useState({
    email: "",

    password: "",

    loading: false,
  });
  let { email, password, loading } = state;
  let handleChange = e => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  let handleSubmit = async e => {
    e.preventDefault();
    try {
      setState({ loading: true });

      let userData = await firebase
        .auth()
        .signInWithEmailAndPassword(email, password);
      // console.log(USER_DATA);

      if (userData.user.emailVerified === true) {
        toast.success(`Successfully ${email} logged in`);
        history.push("/");
      } else {
        history.push("/login");
        toast.error(`Email has not verified go to ${email} verify then login`);
      }
    } catch (error) {
      toast.error(error.message);
    }
    setState({ loading: false });
  };

  return (
    <div className="addForm">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <lable htmlFor="email">Email address or username</lable>
          <input
            type="email"
            className="form-control"
            name="email"
            placeholder="Email address or username"
            value={email}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <lable htmlFor="password">Password</lable>
          <input
            type="password"
            className="form-control"
            name="password"
            placeholder="Password"
            value={password}
            onChange={handleChange}
          />
        </div>
        <div>
          <Link to="/password-reset">Forget Your Password</Link>
        </div>
        <div className="form-group1">
          <div className="form-Group2 btn-group">
            <p>
              <input type="checkbox" className="checkbox" name="checkbox" />
              Remember Me
            </p>
            <button>Login</button>
            <p className="borderBottom"></p>
          </div>
        </div>
      </form>
    </div>
  );
};

export default withRouter(LoginForm);
