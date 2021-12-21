import React, { useContext, Fragment } from "react";
import { Link } from "react-router-dom";
import { AuthContextApi } from "../../Apis/AuthContext";
import { useState } from "react";
import { useEffect, useRef } from "react";
import firebase from "./../../FireBase";
import { toast } from "react-toastify";

const HeaderMenu = () => {
  let AUTH = useContext(AuthContextApi);
  console.log(AUTH);
  // let [state, setstate]= useState(false)
  // let HandleChange = () => {
  //   setstate(!state);
  let [toggle, settoggle] = useState(false);
  let toggleelement = useRef();
  let childRef = useRef();
  let Toggleit = () => {
    settoggle(!toggle);
  };
  const handleclickOutside = event => {
    if (
      childRef.current &&
      toggleelement.current &&
      !toggleelement.current.contains(event.target) &&
      !childRef.current.contains(event.target)
    ) {
      settoggle(false);
    }
  };
  useEffect(() => {
    document.addEventListener("mousedown", handleclickOutside);
    return () => {
      document.removeEventListener("mousedown", handleclickOutside);
    };
  }, []);

  let Logout = () => {
    firebase
      .auth()
      .signOut()
      .then(
        toast.success("Successfully logouted"),
        window.location.assign("/login")
      )
      .catch(err => toast.error(err.message));
  };

  let AnonymousUser = () => (
    <Fragment>
      <li>
        <Link to="">Premium</Link>
      </li>
      <li>
        <Link to="">Support</Link>
      </li>
      <li>
        <Link to="">Download</Link>
      </li>
      <li className="bar">
        <Link to="#"></Link>
      </li>

      <li>
        <Link to="/signup">Sigup</Link>
      </li>
      <li>
        <Link to="/login">Login</Link>
      </li>
    </Fragment>
  );
  let AuthenticatedUser = () => (
    <Fragment>
      <li>
        <figure className="profile_img" ref={toggleelement} onClick={Toggleit}>
          {/* {AUTH === null ? "loading...." : <img src={AUTH.photoURL} alt="" />} */}
          <img src={AUTH.photoURL} alt={AUTH.displayName} />
          <figcaption>{AUTH.displayName}</figcaption>
        </figure>
        <div
          ref={childRef}
          className="dropDown"
          style={toggle === true ? { display: "block" } : { display: "none" }}
        >
          <ul>
            <li>
              <Link to="">Account</Link>
            </li>
            <li>
              <Link to="/userHome/profile">Profile</Link>
            </li>
            <li>
              <Link to="">Upgrade to premium</Link>
            </li>
            <li>
              <a onClick={Logout}>Log Out</a>
            </li>
          </ul>
        </div>
      </li>
    </Fragment>
  );
  return (
    <Fragment>
      <nav>
        <ul>{AUTH ? <AuthenticatedUser /> : <AnonymousUser />}</ul>
      </nav>
    </Fragment>
  );
};

export default HeaderMenu;
