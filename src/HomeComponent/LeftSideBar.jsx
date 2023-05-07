import React, { useState } from "react";
import style from "./LeftSideBar.module.css";
import { Button } from "@mui/material";
import FaTwitter from "@mui/icons-material/Twitter";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import { FiMoreHorizontal } from "react-icons/fi";
import { useRecoilState } from "recoil";
import { Tweet } from "../Data/AtomData/Atom";
import { leftSideIconData } from "../Data/AtomData/data";
import { getCurrentUser } from "../services/utilities";
import { useNavigate } from "react-router-dom";

export default function LeftSideBar() {
  const [isTweet, setIsTweet] = useRecoilState(Tweet);

  const navigate = useNavigate();

  const [isVisible, setIsVisible] = useState(false);
  const currentUser = getCurrentUser();

 
  function handleLogOut() {
    navigate("/logout");
  }

  return (
    <div className={style.mainContainer}>
      <div className={style.sideBarBtnGroup}>
        <FaTwitter
          sx={{
            margin: "8px",
            fontSize: "3.5rem",
            borderRadius: "50%",
            padding: "5px",
            "&:hover": {
              backgroundColor: "rgba(204, 201, 201, 0.486)",
            },
          }}
          className={style.mainIcon}
        />
        {leftSideIconData.map((ele, index) => (
          <Button
            title= {ele.name}
            size="large"
            className={style.sideBarBtn}
            key={index}
            variant="text"
            sx={{
              color: "black",
              borderRadius: "3rem",
              fontWeight: "500",
              // backgroundColor: "black",
              fontSize: "1.3rem",
              textTransform: "none",
              gap: "1rem",
              padding: "0.6rem",
              paddingLeft: "1.5rem",
              paddingRight: "1.5rem",
              "&:hover": {
                backgroundColor: "rgba(204, 201, 201, 0.486)",
              },
            }}
            startIcon={ele.icon}
          >
            {ele.name}
          </Button>
        ))}

        {/* Tweet PopUp here */}
        {/* {isTweet&&<Tweets/>} */}

        <Button
          onClick={() => setIsTweet(true)}
          className={style.tweetBtn}
          sx={{
            fontSize: "1.2rem",
            textTransform: "none",
            borderRadius: "3rem",
            width: "16rem",
            height: "3.7rem",
            marginTop: "0.5rem",
            // marginLeft: "-2rem",
            // position:"relative",
            // left: "-1rem",
            backgroundColor: "rgb(29, 155, 240)",
          }}
          variant="contained"
        >
          Tweet
        </Button>
      </div>

      {/*Logout button user when am clicked then use logged out */}

      <div
        style={isVisible ? {} : { display: "none" }}
        className={style.logoutPopup}
      >
        <hr />
        <div>
          <p>Add an existing account </p>
        </div>
        <div onClick={handleLogOut}>
          <p> Log out @{currentUser.userName}</p>
        </div>
      </div>
      <div onClick={() => setIsVisible(!isVisible)} className={style.userDiv}>
        <PermIdentityIcon
          sx={{
            height: "3rem",
            width: "3rem",
          }}
        />
        <div className={style.userDetail}>
          <h5>{currentUser.name}</h5>
          <p>{currentUser.userName}</p>
        </div>
        <FiMoreHorizontal />
      </div>
    </div>
  );
}
