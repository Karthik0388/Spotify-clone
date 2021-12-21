import React from "react";
import UserLeftBlock from "./UserLeftBlock";
import "./userBlock.css";
import {useRouteMatch,Link,Switch,Route} from 'react-router-dom'
import UserRightBlock from './UserRightBlock';

const UserHome = () => {
  let { path }= useRouteMatch();
    console.log(path)
  return (
    <div id="userBlock">
          <UserLeftBlock />
          <Switch>
              <Route path={`${path}/:id`} >
                  <UserRightBlock/>
              </Route>
          </Switch>
    </div>
  );
};

export default UserHome;
// (:) -> means Dynamic paths