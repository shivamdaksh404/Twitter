import React, { useState } from "react";
import { isUserLoggedIn } from "../Data/AtomData/Atom";
import { useRecoilState } from "recoil";
import { useNavigate } from "react-router-dom";
import { Button, TextField } from "@mui/material";
import style from "./Login.module.css";
import { FaTwitter } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { BsApple } from "react-icons/bs";
import {RxCross2} from 'react-icons/rx';
import swal from 'sweetalert';

const Login = () => {
  const [isLogIn, setIsLogIn] = useRecoilState(isUserLoggedIn);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();


  function getData() {
    const users = localStorage.getItem("users");
    if (users) {
      try {
        return JSON.parse(users);
      } catch {
        return [];
      }
    }
    return [];
  }

  const handleLogin = () => {

    const userData = getData()
    
    if(!email||!password){
      alert("please Fill All the Data")
      return;
    }
    const currentUser = userData.find((data) => data.email === email || data.userName == email);
  
    if (!currentUser) {
      alert("User Not Found");
    }
    else if (currentUser.password !== password) {
      alert("Password is Incorrect");
    }
    else if (currentUser.password === password) {
     
      swal("Login Successful!", "You have Successfully logged In!", "success");
      setIsLogIn(true)
      currentUser.isLoggedIn = true
      localStorage.setItem('currentUser', JSON.stringify(currentUser))
      navigate("/");
    } 
  };
  


  return (
    <div className={style.main}>
    <div className={style.mainContainer}>
      <div className={style.heading}>

        <RxCross2 size={20}  />
        <FaTwitter  />
       

      </div>
      <div className={style.apple}>
      <span style={{fontWeight: "bolder"}}>Sign in to Twitter</span>
        <Button variant="outlined" startIcon={<FcGoogle />}>
          Sign in with Google
        </Button>
        <Button variant="outlined" startIcon={<BsApple />}>
          Sign in with Apple
        </Button>
      </div>
      <div className={style.sectionDivider}>
        <div>

          <hr style={{borderTop: "1px gray"}} />
        </div>
        <span>or</span>
        <div>
          <hr style={{borderTop:"gray"}} />


        </div>
      </div>

      <form className={style.login}>
        <TextField
          id="outlined-basic"

          label="Email address, or username"

          variant="outlined"
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          type="password"
          id="outlined-basic"
          label="Password"
          variant="outlined"
          onChange={(e) => setPassword(e.target.value)}
        />

        <Button

          onClick={handleLogin}
          sx={{ backgroundColor: "black", fontWeight: "bold" }}
          variant="contained"
        >
          Log In
        </Button>
        <Button variant="outlined">Forgot Password? </Button>
      </form>
      <div className={style.switch}>
        <span>Don't Have an Account?</span> &nbsp;

        <span onClick={()=>navigate('/signup')}>Sign Up</span>
      </div>
    </div>
    </div>
  );
};

export default Login;
