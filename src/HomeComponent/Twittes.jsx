import React from "react";
import CreateTweet from "./CreateTweet";
import style from "./Twittes.module.css";

const Twittes = () => {
  return (
    <div className={style.posts}>
      <div className={style.posts__home}>Home</div>
      <CreateTweet />
     
    </div>
  );
};

export default Twittes;