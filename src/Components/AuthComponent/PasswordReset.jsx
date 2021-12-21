import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import firebase from "./../../FireBase";
import { toast } from 'react-toastify';

const PasswordReset = () => {
  let history = useHistory();
  let [state, setState] = useState({
    loading: false,
    email: "",
  });
  let { loading, email } = state;

  let handleChange = e => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  let handleSubmit = async e => {
    e.preventDefault();
    try {
      setState({ loading: true });
      await firebase.auth().sendPasswordResetEmail(email);
      let message = `Password reset link has been sent to ${email} address`;
      toast.info(message);
      history.push("/login");
    } catch (err) {
      toast.error(err.message);
    }
  };
  return (
    <section id="authBlock">
      <article>
        <p className="authContent"></p>
        <h1>Password Reset</h1>
        <p>
          Enter your Spotify username, or the email address that you used to
          register. We'll send you an email with your username and a link to
          reset your password.
        </p>
        <div className="formContent">
          <div className="addForm">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="email">Email address or username</label>
                <input
                  type="email"
                  name="email"
                  required
                  value={email}
                  onChange={handleChange}
                />
              </div>
            </form>
          </div>
          <div className="form-group btn-group">
            <button>{loading === true ? "loading..." : "Send"}</button>
            <p>If you still need help, contact Spotify Support.</p>
          </div>
        </div>
      </article>
    </section>
  );
};

export default PasswordReset;
