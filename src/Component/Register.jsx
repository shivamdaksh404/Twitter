import React, { useState } from "react";
import { FaTwitter } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { BsApple } from "react-icons/bs";
import styles from "./Register.module.css";
import { Button, TextField } from "@mui/material";
import { Days, Month, Year } from "../Data/AtomData/data";
import { useNavigate } from "react-router-dom";
import {RxCross2} from 'react-icons/rx'
const Register = () => {
  const [isInput, setIsInput] = useState(false);
  const navigate = useNavigate();

  const [nameError, setNameError]=useState(false)

  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    date: "",
    month: "",
    year: "",
    isLoggedIn: false,
    userName:""
  });

  function handleName(e) {
    const input = { ...data };
    input.name = e.target.value;
    setData(input);
  }

  function handleUserName(e) {
    const input = { ...data };
    input.userName = e.target.value;
    setData(input);
  }

  function handleEmail(e) {
    const input = { ...data };
    input.email = e.target.value;
    setData(input);
  }

  function handlePassword(e) {
    const input = { ...data };
    input.password = e.target.value;
    setData(input);
  }

  function handleDate(e) {
    const input = { ...data };
    input.date = e.target.value;
    setData(input);
  }

  function handleMonth(e) {
    const input = { ...data };
    input.month = e.target.value;
    setData(input);
  }

  function handleYear(e) {
    const input = { ...data };
    input.year = e.target.value;
    setData(input);
  }
 
  // helper function to get the data by  local storage and prevent the over writing of the data
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

  function handleSubmit(e) {
    e.preventDefault();

    const ValidMonth = [
      "January",
      "March",
      "May",
      "July",
      "August",
      "October",
      "December",
    ];

    let leapYear = true;
    let year = data.year;

    if ((year % 100 == 0 && year % 400 == 0) || year % 4 == 0) {
      leapYear = true;
    } else {
      leapYear = false;
    }

    let Name = data.name;
    Name = Name.trim(); // empty space validation
    let UserName = data.userName;
    UserName  = UserName.trim();   // empty space validation

    const users = getData();
    // check the data from local storage and if user already exists or not 
    const currentUser = users.find((local) => (local.email === data.email) || (local.userName == data.userName) );
    //check field is empty
    if (
      !Name||
      !UserName ||
      Name == " " ||
      !data.email ||
      !data.password ||
      !data.date ||
      data.name == "Day" ||
      !data.month ||
      data.month == "Month" ||
      !data.year ||
      data.year == "Year"
    ) {
      alert("Please Fill All the deatails!!");
    } 
    else if(!currentUser){
       if (data.password.length < 8) {
        alert("Password Should contains 8 letter");
      }
       else if (
        leapYear == false &&
        data.month == "February" &&
        data.date > 28
      ) {
        alert("Enter Valid date");
      } 
      else if (leapYear == true && data.month == "February" && data.date > 29) {
        alert("Enter Valid date");
      } 
      else if (ValidMonth.includes(data.month) == false && data.date > 30) {
        alert("Enter Valid date");
      } 
      // store data in local storge if user is new
       else {
         alert("registeration success");
         users.push(data);
         localStorage.setItem("users", JSON.stringify(users));
         navigate("/signIn");
      }
    }
    else if(currentUser.email == data.email){
      alert("Email exists");
    }
    else if(currentUser.userName == data.userName){
      alert("User Name exists")
    }
    
  }

  return (
    <div className={styles.main}>
    <div className={styles.mainContainer}>
        <div className={styles.heading}>
        <RxCross2 size={30}  />
          <FaTwitter />
          
        
        </div>
        <div className={styles.header}>
        <h1>Join Twitter Today</h1>
      </div>

      {isInput ? (
        <form onSubmit={(e) => handleSubmit(e)} className={styles.Register}>
          <TextField
            id="outlined-basic"
            label="Name"
            variant="outlined"
            onChange={(e) => handleName(e)}
          />
          <TextField
          id="outlined-basic"
          label="UserName"
          variant="outlined"
          onChange={(e) => handleUserName(e)}
        />
          <TextField
            id="outlined-basic"
            type="email"
            label="Email"
            variant="outlined"
            onChange={(e) => handleEmail(e)}
          />
          <TextField
            type="password"
            id="outlined-basic"
            label="Password"
            variant="outlined"
            onChange={(e) => handlePassword(e)}
          />
          <div>
          <div><h3>Date of Birth</h3>
          <p style={{color:"darkGray", fontSize:"smaller"}}
          >This will not be shown publicly. Confirm your own age, even if this account is for a business, a pet, or something else.</p>
          </div>
          <div className={styles.Calender}>
            
            <select onChange={(e) => handleMonth(e)}>
              <option>Month</option>
              {Month.map((ele) => (
                <option>{ele}</option>
              ))}
            </select>

            <select onChange={(e) => handleDate(e)}>
              <option>Day</option>
              {Days.map((ele) => (
                <option>{ele}</option>
              ))}
            </select>

            <select onChange={(e) => handleYear(e)}>
              <option>Year</option>
              {Year.map((ele) => (
                <option>{ele}</option>
              ))}
            </select>
          </div>
          </div>

          <Button variant="contained" type="submit">
            Register
          </Button>
        </form>
      ) : (
        <div className={styles.Inside}>
          <div className={styles.apple}>
            <Button variant="outlined" startIcon={<FcGoogle />}>
           Sign in with Google
            </Button>
            <Button variant="outlined" startIcon={<BsApple />}>
              Sign in with Apple
            </Button>
          </div>
          <div className={styles.sectionDivider}>
            <div>
              <hr />
            </div>
            <span>or</span>
            <div>
              <hr />
            </div>
          </div>
          <div className={styles.Create}>
            <Button variant="contained" onClick={() => setIsInput(true)}>
              Create account
            </Button>
            <div className={styles.createAccount}>
              <span>
                By signing up, you agree to the Terms of Service and Privacy
                Policy, including Cookie Use.
              </span>
            </div>
          </div>
        </div>
      )}

      <div className={styles.switch}>
        <span>Already Have an Account?</span> &nbsp;
        <span onClick={() => navigate("/signin")}>Sign In</span>
      </div>
    </div>
    </div>
  );
};

export default Register;
