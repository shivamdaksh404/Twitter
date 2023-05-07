import LeftSideBar from "../HomeComponent/LeftSideBar";
import React, { useState } from "react";
import RightSideBar from "../HomeComponent/RightSideBar";
import { useRecoilState } from "recoil";
import Styles from "./Home.module.css";
import MainComponent from "../HomeComponent/MainComponent";
import { isUserLoggedIn } from "../Data/AtomData/Atom";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import HomeHeader from "../HomeComponent/HomeHeader";
import TweetModel from "../HomeComponent/TweetModel";
import { getCurrentUser } from "../services/utilities";
import WhoFollow from "../HomeComponent/WhoFollow";
import SearchBar from "../HomeComponent/SearchBar";

const Home = () => {
  const [isLoggedIn, setIsLoggedIn] = useRecoilState(isUserLoggedIn);
  const navigate = useNavigate();

  useEffect(() => {
    const currentUser = getCurrentUser();
    setIsLoggedIn(currentUser.isLoggedIn);
    console.log(isLoggedIn);
    if (isLoggedIn === true) {
      fetch("/data.json")
        .then((res) => res.json())
        .then((data) => localStorage.setItem("posts", JSON.stringify(data)));
    } else {
      navigate("/signIn");
    }
  }, [isLoggedIn]);

  return (
    <div className={Styles.container}>
      <div className={Styles.leftDiv}>
        <LeftSideBar />
        <TweetModel />
      </div>
      <div className={Styles.centerDiv}>
        <HomeHeader />
        <div className={Styles.scroll}>
          <MainComponent />
        </div>
      </div>

      <div className={Styles.RMain}>
        <div>
          <SearchBar />
        </div>
        <div className={Styles.RightMain}>
          <div className={Styles.Content}>
            <RightSideBar />
          </div>
        </div>
        <div class={Styles.whoFollow}>
          <WhoFollow />
        </div>
      </div>
    </div>
  );
};

export default Home;
