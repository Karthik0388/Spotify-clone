import React, { useContext, Fragment } from "react";
import Navbar from "./Pages/HeaderComponent/NavBar";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Components/AuthComponent/Login";
import Signup from "./Components/AuthComponent/Signup";
import PageNotFound from "./Pages/PageNotFound";
import { ToastContainer, toast } from "react-toastify";

import { AuthContextApi } from "./Apis/AuthContext";
import ProtectedRoute from "./helper/ProtectedRoute";
//import MyFirstPortal from "./Pages/MyFirstPortal";
import Spinner from "./Pages/Spinner/Spinner";
import UserHome from "./UserComponent/UserHome";
import PublicRoute from "./helper/PublicRoute";
import PasswordReset from "./Components/AuthComponent/PasswordReset";
import PhoneAuth from './Components/AuthComponent/PhoneAuth';

const App = () => {
  let state = useContext(AuthContextApi);
  return (
    <section id="SpotifyMainBlock">
      <article>
        <Router>
          <header>
            <Navbar />
            {/* {!state ? <Navbar /> : ""} */}
          </header>
          <ToastContainer />
          {/* <MyFirstPortal/> */}
          <main>
            {/* dynamic routing starts here */}
            <Switch>
              <PublicRoute path="/" exact>
                <Home />
              </PublicRoute>
              <PublicRoute path="/login" exact>
                <Login />
              </PublicRoute>
              <PublicRoute path="/signup" exact>
                <Signup />
              </PublicRoute>
              <PublicRoute path="/password-reset" exact>
                <PasswordReset />
              </PublicRoute>
              <PublicRoute path="/phone-auth" exact>
                <PhoneAuth/>
              </PublicRoute>
              {/* Start Authenticated Router */}
              {/* <Route path="/userhome">
                <UserHome/>
              </Route> */}
              <ProtectedRoute path="/userhome" component={UserHome} />

              {/* End Authenticated Router */}
              <PublicRoute path="*">
                <PageNotFound />
              </PublicRoute>
            </Switch>
            {/* dynamic routing ends here*/}
          </main>
        </Router>
      </article>
    </section>
  );
};

export default App;
