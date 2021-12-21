import firebase from "../../FireBase";

export let GoogleProvider = new firebase.auth.GoogleAuthProvider();
export let FacebookProvider = new firebase.auth.FacebookAuthProvider();

let SocialLogin = async Provider => {
  try {
    let DATA = await firebase.auth().signInWithPopup(Provider);
    return DATA.user;
  } catch (error) {
    return error;
  }
};

export default SocialLogin;
