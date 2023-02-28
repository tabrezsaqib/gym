import React, {useState, useEffect} from 'react'
import './Registration.css';
import Google from './Assets/Icons/google.svg';
import Facebook from './Assets/Icons/facebook.svg';

function Registration() {

    const [user, setUser] = useState({
        name: "",
        email: "",
        password: "",
      });
    const [btnState, setBtnState] = useState(true);
    let details = {
      name: user.name,
      email: user.email,
      password: user.password,
    };
    let nameError = '';
    let emailError = '';
    let passwordError = '';
    useEffect(() => {
      fetch("http://localhost:8000/userDetails", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(details),
        })
          .then((resp) => {
            console.log(resp.status);
          })
          .catch((error) => {
            console.log(error.message);
          });
    }, [user]);
      function handleUser(e){
        if(e.target.name === "name")
        {
            setUser(() => ({ ...user, name: e.target.value }));
        }
        if(e.target.name==="email")
        {
            setUser(() => ({ ...user, email: e.target.value }));
        }
        if(e.target.name === "password")
        {
            setUser(() => ({ ...user, password: e.target.value }));
        }
       }
    function showPassword(p){
        p.preventDefault();
        let x = user.password;
        if (x.type === "password") {
            x.type = "text";
            return false;
        } else {
            x.type = "password";
        }
    }
    useEffect(() => {
      if (user.name !== "" && user.email !== "" && user.password !== ""){
          setBtnState(false);
      }
      else{
          setBtnState(true);
      }
  }, [user.name, user.email, user.password])
    function SubmitData(err)
    {
      err.preventDefault();

      if(user.name.length > 0 && user.email.length > 0 && user.password.length > 0){

            fetch("http://localhost:8000/userDetails",{
              method: "POST",
              headers:{
                'Content-Type': "apllication/json",
              },
              body: JSON.stringify(details),
            }
            ).then((resp) => {
              console.log(resp.status);
            } ).catch((error) => {
              console.log(error.message);
            });
            } 
      else {
            alert("Please fill the form");
          }

        if (user.name === "") {
          nameError = "Please enter the first name";
          return false;
        } 
        if (user.email === "" || !user.email.endsWith("@gmail.com")) {
          emailError = "Please enter the valid Email";
          return false;
        } 
        if (user.password === "" || user.password.length < 8) {
          passwordError = "Please enter the valid password";
          return false;
        }
    }

  return (
    <div> 
            <div className='regmain'>
                <form className='regform' onsubmit={SubmitData} method="get" action="">
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
                            <a href="https://www.google.com/" id="reggo"><img src={Google} alt="" className="regimg-google"/>Google</a>
                        </div>
                        <div class="regfacebook">
                            <a href="https://www.facebook.com/" id="regfb"><img src={Facebook} alt="" className="regimg-google"/>Facebook</a>
                        </div>
                    </div>
                </form>
            </div>
        </div>
  )
}

export default Registration