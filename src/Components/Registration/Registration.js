import React, {useState} from 'react'
import './Registration.css';

function Registration() {

    const [user, setUser] = useState({
        name: "",
        email: "",
        password: "",
      });
      const [btnState, setBtnState] = useState(false);
      let nameError = '';
    let emailError = '';
    let passwordError = '';
      function handleUser(e){

        if (e.target.name === "name") {
            setUser(() => ({ ...user, name: e.target.value }));
          }
      
        if (e.target.name === "email") {
            setUser(() => ({ ...user, email: e.target.value }));
          }
        if (e.target.name === "password") {
            setUser(() => ({ ...user, password: e.target.value }));
          }
   
        if (user.name !== "" && user.email !== "" && user.pasword !== ""){
            setBtnState(true);
        }
        else{
            setBtnState(false);
        }
       }
    function showPassword(e){
        e.preventDefault();
        let x = user.password;
        if (x.type === "password") {
            x.type = "text";
            return false;
        } else {
            x.type = "password";
        }
    }
    function Validation(e){
        if (e.target.name === "name" && e.target.value === "") {
            nameError = "Please enter the name";
            return false;
          } else {
            nameError = "";
          }
      
          if (e.target.name === "email" && (e.target.value === "" || !e.target.value.endsWith("@gmail.com"))) {
            emailError =  "Please enter a valid email";
            return false;
          } else {
            emailError = "";
          }
      
          if (e.target.name === "password" && (e.target.value === "" || e.target.value.length < 8)) {
            passwordError = "Please enter a valid password";
            return false;
          } else {
            passwordError = "";
          }
    }
  return (
    <div> 
            <div className='regmain'>
                <form className='regform' onsubmit={Validation} method="get" action="">
                    <div className='regtitle'>
                        <p className='regheader'>Register</p>
                        <p className="regnew">Already a member? <a href="#">Login</a></p>
                    </div>
                    <input type="text" 
                    name="name" 
                    placeholder="Your Name" 
                    id="regname" 
                    value={user.name} 
                    onChange={handleUser}
                    />
                    <p id="regnameError">{nameError}</p>
                    <input type="text" 
                    name="email" 
                    placeholder="Email address" 
                    id="regemail" 
                    value={user.email} 
                    onChange={handleUser}
                    />
                    <p id="regemailError">{emailError}</p>
                    <input type="password" 
                    name="password" 
                    placeholder="Password" 
                    id="regpassword" 
                    value={user.password} 
                    onChange={handleUser}
                    />
                    <button id="regshow" 
                    onClick={showPassword}
                    ></button>
                    <p id="regpasswordError">{passwordError}</p>
                    <input type="submit" 
                    name="submit" 
                    placeholder="Get Started" 
                    value="Get Started" 
                    id="regbtn" 
                    disabled={btnState}
                    />
                    <p id="regoption">or register with</p>
                    <div className="regparent">
                        <div className="reggoogle">
                            <a href="https://www.google.com/" id="reggo"><img src='./Assets/Icons/google.svg' alt="" className="regimg-google"/>Google</a>
                        </div>
                        <div class="regfacebook">
                            <a href="https://www.facebook.com/" id="regfb"><img src="./Assets/Icons/facebook.svg" alt="" className="regimg-google"/>Facebook</a>
                        </div>
                    </div>
                </form>
            </div>
        </div>
  )
}

export default Registration