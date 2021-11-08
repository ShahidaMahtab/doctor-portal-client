import { useEffect, useState } from "react";
import initializeFirebase from "../Pages/Login/Firebase/firbase.initialize";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
  onAuthStateChanged,
  GoogleAuthProvider,
  getIdToken,
  signInWithPopup,
} from "firebase/auth";

//initialize firebase app
initializeFirebase();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const [admin, setAdmin] = useState(false);
  const [token, setToken] = useState("");
  const auth = getAuth();
  //google signin
  const googleProvider = new GoogleAuthProvider();
  const signInWithGoogle = (location, history) => {
    setIsLoading(true);
    signInWithPopup(auth, googleProvider)
      .then((res) => {
        const user = res.user;
        const destination = location?.state?.from || "/";
        history.replace(destination);
        saveUser(user.email, user.displayName, "PUT");
        setError("");
      })
      .catch((error) => setError(error.message))
      .finally(() => setIsLoading(false));
  };
  //email register
  const registerUser = (email, password, name, history) => {
    setIsLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        setError("");
        const newUser = { email, displayName: name };
        setUser(newUser);
        //save user to db
        saveUser(email, name, "POST");
        //send name to firebase
        updateProfile(auth.currentUser, {
          displayName: name,
        })
          .then(() => {
            setError("");
          })
          .catch((error) => {
            setError(error.message);
          });
        history.replace("/");
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => setIsLoading(false));
  };
  //email sign in
  const loginUser = (email, password, location, history) => {
    setIsLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const destination = location?.state?.from || "/";
        history.replace(destination);
        setError("");
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => setIsLoading(false));
  };
  //observer user current state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        //people use it in local storage most of the time
        getIdToken(user).then((idToken) => {
          setToken(idToken);
        });
      } else {
        // User is signed out
        setUser({});
      }
      setIsLoading(false);
    });

    return () => unsubscribe;
  }, [auth]);
  //admim
  useEffect(() => {
    const url = `https://ancient-eyrie-18743.herokuapp.com/users/${user.email}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data.admin);
        setAdmin(data.admin);
      });
  }, [user.email]);
  //log out
  const logOut = () => {
    setIsLoading(true);
    signOut(auth)
      .then(() => {
        setError("");
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => setIsLoading(false));
  };
  //save user to db
  const saveUser = (email, displayName, method) => {
    const user = { email, displayName };
    fetch("https://ancient-eyrie-18743.herokuapp.com/users", {
      method: method,
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId || data.modifiedCount) {
          alert("info saved");
        }
      });
  };
  return {
    user,
    isLoading,
    admin,
    token,
    error,
    signInWithGoogle,
    registerUser,
    logOut,
    loginUser,
  };
};

export default useFirebase;
