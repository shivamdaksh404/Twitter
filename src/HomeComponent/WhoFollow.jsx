import React, { useState } from "react";
import style from "./WhoFollow.module.css";
import { Button } from "@mui/material";

export default function WhoFollow() {
  const [data, setData] = useState([
    {
      img: "https://xsgames.co/randomusers/assets/avatars/male/63.jpg",
      name: "Jack ",
      username: "@jacK",
      id: "1",
      isFollowed: false
    },
    {
      img: "https://xsgames.co/randomusers/assets/avatars/male/74.jpg",
      name: "Remo",
      username: "@remo",
      id: "2",
     
      isFollowed: false
    },
    {
      img: "https://xsgames.co/randomusers/assets/avatars/female/75.jpg",
      name: "Nikki Minaj",
      username: "@nikkiminaj",
      id: "3",
      isFollowed: false
    },
    {
      img: "https://xsgames.co/randomusers/assets/avatars/male/54.jpg",
      name: "John" ,
      username: "@john",
      id: "4",
      isFollowed: false
    },
  ]);


  const handleToggleFollow = (index) => {
    const rawData = [...data]
    const current = rawData.findIndex((ele) => ele.id == index)

    if (rawData[current].isFollowed === false) {
      rawData[current].isFollowed = true;
    }
    else {
      rawData[current].isFollowed = false;
    }
    setData(rawData)
  }
  return (
    <div className={style.mainContainer}>
      <h2>Who to follow</h2>
      {data.map((ele, index) => (
        <div key={index} className={style.userDiv}>
          <img src={ele.img} />
          <div className={style.userDetail}>
            <h5>{ele.name}</h5>
            <p>{ele.username}</p>
          </div>
          <Button
            onClick={() => handleToggleFollow(ele.id)}
            variant="contained"
            size="small"
            sx={{
              borderRadius: "2rem",
            }}
          >
            {ele.isFollowed?"Following":"Follow"}
          </Button>
        </div>
      ))}
      <p className={style.showMore}>Show more</p>
    </div>
  );
}
