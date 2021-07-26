import React, { useState } from 'react';
import { firebase } from "../firebase";

function Login() {
    const [name, setName] = useState('');
    const [phoneno, setPhoneno] = useState('');

    const login = (e) => {
        e.preventDefault();
      
        var appVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container');
        const number = phoneno;
        firebase.auth().signInWithPhoneNumber(number, appVerifier)
        .then((e) => {
          let code = prompt('Enter OTP', '');
          if(code == null) {
            return;
          }
          e.confirm(code).then((res) => {
            console.log(res.user, "user");
          }).then((e)=>{
              alert("Registration done");
          }); 
        }).catch((e) => {
          console.log(e);
        });
      
    }
    return (
        <div className="bg-gray-100 h-screen">
            <img alt=""/>
            <div className="flex items-end ml-auto justify-end m-4 bg-gray-500 p-2 pr-3 rounded-3xl w-14">
                <h1 className="flex justify-center items-center text-center text-white">Skip</h1>
            </div>
            <div>
                <h1>Sign Up or Login</h1>
                <div className="flex flex-col">
                    <input
                    required
                    placeholder="Enter you name"
                    type="text"
                    onChange={(e) => setName(e.target.value)}
                    />
                    <input  
                    required
                    placeholder="Enter your phone number" 
                    type="text" 
                    onChange={(e) => setPhoneno(e.target.value)}
                    />
                    <button onClick={login}>Send OTP</button>
                    <div id="recaptcha-container"/>
                </div>
            </div>  
        </div>
    )
}

export default Login
