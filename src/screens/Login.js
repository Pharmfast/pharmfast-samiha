import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { firebase } from "../firebase";

function Login() {
    const [name, setName] = useState('');
    const [phoneno, setPhoneno] = useState('');
    const history   = useHistory();

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
          }).then(()=>{
              alert("Registration done");
              history.push("/home");
          }); 
        }).catch((e) => {
          console.log(e);
        });
      
    }
    return (
        <div className="bg-white h-screen">
          <img 
          className="w-full h-56 xl:h-80 object-cover"
          src="https://www.giftmugs.in/wp-content/uploads/2015/10/about-bg-gift.jpg" 
          alt=""/>
          <h1 onClick={() => history.push("/home")} className="flex m-4 cursor-pointer absolute top-0 right-0 items-end justify-end bg-gray-500 p-2 pr-3 rounded-3xl w-14 text-center text-white">Skip</h1>
            <div>
                <div className="flex mt-7 flex-col xl:justify-center xl:items-center">
                    <h1 className="text-lg ml-3 font-bold ">Sign Up or Login</h1>
                    <input
                    className="m-3 focus:outline-none hover:bg-gray-100 p-3 border xl:w-72 border-red-600 rounded-lg bg-transparent"
                    required
                    placeholder="Enter you name"
                    type="text"
                    onChange={(e) => setName(e.target.value)}
                    />
                    <input 
                    className="m-3 focus:outline-none hover:bg-gray-100 p-3 border xl:w-72 border-red-600 rounded-lg bg-transparent" 
                    required
                    placeholder="Enter your phone number using prefix +91" 
                    type="text" 
                    onChange={(e) => setPhoneno(e.target.value)}
                    />
                    <button 
                    className="m-3 p-3 text-white xl:w-72 font-bold border border-red-500 rounded-lg bg-red-600"
                    onClick={login}>
                      Send OTP
                      </button>
                    <div id="recaptcha-container"/>
                </div>
            </div>  
        </div>
    )
}

export default Login
