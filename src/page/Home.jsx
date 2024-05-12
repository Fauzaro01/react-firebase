import React, { useState, useEffect } from 'react';
import { onAuthStateChanged } from "firebase/auth";
import firebase from '../firebase';

const auth = firebase.auth;

const Home = () => {
    const [AccountID, setAccountID] = useState('')
 
    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
              // User is signed in, see docs for a list of available properties
              // https://firebase.google.com/docs/reference/js/firebase.User
              const uid = user.uid;
              // ...
              setAccountID(user)
              console.log("uid", uid)
            } else {
              // User is signed out
              // ...
              console.log("user is logged out")
            }
          });
         
    }, [])
 
  return (
    <section>        
        <div className="card">
            <div className="card-header">
                <h1>Home Page</h1>
            </div>
            <div className="card">
                <h3>Hello Seseorang</h3>
                { AccountID ? (<div>
                    <h4>ID: {AccountID.uid}</h4>
                    <h4>Ingfo lengkap: {JSON.stringify(AccountID, null, 2)}</h4>
                </div>) : "" }
            </div>
        </div>
    </section>
  )
}
 
export default Home