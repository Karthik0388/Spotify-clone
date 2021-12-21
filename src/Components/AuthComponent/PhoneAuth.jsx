import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import firebase from "./../../FireBase";
import { toast } from "react-toastify";

const PhoneAuth = () => {
  let history = useHistory();
  let [state, setState] = useState({
    loading: false,
    phone: "",
  });
  let { loading, phone } = state;

  let handleChange = e => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  let handleSubmit = async e => {
    e.preventDefault();
    try {
      setState({ loading: true });
      let recaptchaContainer = new firebase.auth.RecaptchaVerifier(
        "recaptcha-container"
      );
      let ConfirmationMessage = await firebase
        .auth()
        .signInWithPhoneNumber(phone, recaptchaContainer);
      let code = window.prompt("Enter OTP");
      ConfirmationMessage.confirm(code);
      toast.success("SuccessFully logged in");
      history.push("/userhome/profile");
    } catch (error) {
      toast.error(error.message);
    }
    setState({ loading: false,phone:"" });
  };
  return (
    <section id="authBlock">
      <article>
        <p className="authContent"></p>
        <h1>Enter Phone Number</h1>
        <div className="formContent">
          <div className="addForm">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  name="phone"
                  placeholder="Enter Your Phone Number"
                  required
                  value={phone}
                  onChange={handleChange}
                />
              </div>
            </form>
          </div>
          <div id="recaptcha-container"></div>
          <div className="form-group btn-group">
            <button onClick={handleSubmit}>
              {loading ? "Sending..." : "Send"}
            </button>
          </div>
        </div>
      </article>
    </section>
  );
};

export default PhoneAuth;
