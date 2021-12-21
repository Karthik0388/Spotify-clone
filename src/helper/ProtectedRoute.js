import React, {useContext,Fragment} from 'react'
import { AuthContextApi } from './../Apis/AuthContext';
import { Route, Redirect } from "react-router-dom";
import Spinner from '../../src/Pages/Spinner/Spinner'

const ProtectedRoute = ({ component:Component, ...parameter }) => {
    let USER = useContext(AuthContextApi);

    return (
        <Route
        {...parameter}
            render={props => {
                return (
                    <Fragment>
                        {USER === null ? (
                            <Spinner/>
                        ) : (
                                <Fragment>
                                   {USER ?  <Component{...props}/> : <Redirect to="/login" />}
                                </Fragment>
                        )}
                </Fragment>
            )
        }}
        >
            
       </Route>
    );
};

export default ProtectedRoute
