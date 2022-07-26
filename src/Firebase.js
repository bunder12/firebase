import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA0zQiEHsW6Hc_4u_8ZpzjxjsflHvz8nK4",
  authDomain: "login-9a9b3.firebaseapp.com",
  projectId: "login-9a9b3",
  storageBucket: "login-9a9b3.appspot.com",
  messagingSenderId: "459875223765",
  appId: "1:459875223765:web:f92db983dd02240b543a5c",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export const signInWithGoogle = () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      const name = result.user.displayName;
      const email = result.user.email;
      const profilePic = result.user.photoURL;

      localStorage.setItem("name", name);
      localStorage.setItem("email", email);
      localStorage.setItem("profilePic", profilePic);
    })
    .catch((error) => {
      console.log(error);
    });
};
