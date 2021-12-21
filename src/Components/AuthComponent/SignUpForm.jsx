import React, { useState } from "react";
import { Link, withRouter } from "react-router-dom";
import firebase from "../../FireBase";
import { toast } from "react-toastify";
const SignUpForm = ({ history }) => {
  let [state, setState] = useState({
    email: "",
    email1: "",
    password: "",
    profile_Name: "",
    month: "",
    DD: "",
    YY: "",
    gender: "",
    loading: false,
  });
  let {
    email,
    email1,
    password,
    profile_Name,
    month,
    DD,
    YY,
    gender,
    loading,
  } = state;
  let handleChange = e => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  let handleSubmit = async e => {
    e.preventDefault();
    try {
      setState({ loading: true });
      if (email === email1) {
        let USER_DATA = await firebase
          .auth()
          .createUserWithEmailAndPassword(email, password);
        // console.log(USER_DATA);
        let confirmMessage = `A verification message has been sent to ${email}
        verify and login`;
        USER_DATA.user.sendEmailVerification();
        toast.info(confirmMessage);
        USER_DATA.user.updateProfile({
          displayName: profile_Name,
          photoURL:
            "https://img.favpng.com/8/19/8/united-states-avatar-organization-information-png-favpng-J9DvUE98TmbHSUqsmAgu3FpGw.jpg",
        });
        // toast.success("Successfully user Registered");
        history.push("/login");
      } else {
        toast.error("Confirm your email is not matching");
      }
    } catch (error) {
      toast.error(error.message);
    }
    setState({ loading: false });
  };
  return (
    <div className="addForm">
      <h2>Sign up with email address</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <lable htmlFor="email">What's your email?</lable>
          <input
            type="email"
            className="form-control"
            name="email"
            placeholder="Enter your email"
            value={email}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <lable htmlFor="email1">Confirm your email</lable>
          <input
            type="email"
            className="form-control"
            name="email1"
            placeholder="Enter your email again"
            value={email1}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <lable htmlFor="password">Create a password</lable>
          <input
            type="password"
            className="form-control"
            name="password"
            placeholder="Create a Password"
            value={password}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <lable htmlFor="profile_Name">What should we call you?</lable>
          <input
            type="text"
            className="form-control"
            name="profile_Name"
            placeholder="Enter a Profile Name"
            value={profile_Name}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <lable htmlFor="Date">What's your date of birth?</lable>
          <div className="dateBlock">
            <input
              type="text"
              className="form-control"
              name="month"
              placeholder="Month"
              value={month}
              onChange={handleChange}
            />
            <input
              type="text"
              className="form-control"
              name="DD"
              placeholder="DD"
              value={DD}
              onChange={handleChange}
            />
            <input
              type="text"
              className="form-control"
              name="YY"
              placeholder="YYYY"
              value={YY}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="form-group">
          <lable htmlFor="gender">What's your gender?</lable>
          <main className="genderBlock" value={gender} onChange={handleChange}>
            <span>
              <input type="radio" name="gender" id="gender" value="Male" />
              Male
            </span>
            <span>
              <input type="radio" name="gender" id="gender" value="Female" />
              Female
            </span>
            <span>
              <input
                type="radio"
                name="gender"
                id="gender"
                value="Non-binary"
              />
              Non-binary
            </span>
          </main>
        </div>
        <div className="form-group">
          <input type="Checkbox" className="form-control" />
          <span className="checkBoxContent">
            Share my registration data with Spotify's content providers for
            marketing purposes.
          </span>
        </div>
        <div className="form-group">
          <p className="copyWriteText">
            <p>
              By clicking on sign-up, you agree to Spotify's
              <Link style={{ color: "#1ed760" }}>
                Terms and Conditions of Use.
              </Link>
            </p>
            <br />
            <p>To learn more about how Spotify collects, uses.</p>
            shares and protects your personal data, please see{" "}
            <Link style={{ color: "#1ed760" }}>Spotify's Privacy Policy.</Link>
          </p>
        </div>
        <div className="form-Group btn-group">
          <button>{loading === true ? "Loading..." : "Sign up"}</button>
        </div>
        <div className="form-Group">
          <p className="endBlock">
            Have an account?
            <Link style={{ color: "#1ed760" }} to="/login">
              Log in.
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default withRouter(SignUpForm);
