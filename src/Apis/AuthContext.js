import React,{createContext,useState,useEffect} from 'react';
import firebase from './../FireBase';

export  let AuthContextApi = createContext();

const AuthProvider = ({ children }) => {
    let [state, setState] = useState(null);
    useEffect(() => {
        firebase.auth().onAuthStateChanged(user => {
            if (user.emailVerified === true || user.reauthenticateWithPhoneNumber) {
                setState(user)
            } else {
                setState(null)
            }
        })
    },[])
    return <AuthContextApi.Provider value={state}>
        { children}
    </AuthContextApi.Provider>
}

export default AuthProvider;