import React, { useState } from "react";
import Styles from "./RightSideBar.module.css";
import { Button } from "@mui/material";
import { CgSmileSad } from "react-icons/cg";

export default function RightSideBar() {
  const [Right, setRight] = useState([
    {
      id: "0",
      isNotIntrested: false,
      country: "Sports Trending",
      keyword: "Gautam Gambhir",
      totalKeywords: "8000k Tweets",
      popUp: false,
    },
    {
      id: "1",
      isNotIntrested: false,
      country: "Trending in India",
      keyword: "#Virat kohli",
      totalKeywords: "6000k Tweets",
      popUp: false,
    },
    {
      id: "2",
      isNotIntrested: false,
      country: "Trending in Sports",
      keyword: "Telugu",
      totalKeywords: "2560k Tweets",
      popUp: false,
    },
    {
      id: "3",
      isNotIntrested: false,
      country: "Trending in Politics",
      keyword: "#Pappu",
      totalKeywords: "2000k Tweets",
      popUp: false,
    },
    {
      id: "4",
      isNotIntrested: false,
      country: "Trending in Sports",
      keyword: "#sachin",
      totalKeywords: "2000k Tweets",
      popUp: false,
    },
  ]);

  const [isVisible, setIsVisible] = useState(false);

  function handleVisible(index) {
    Right[index].popUp = !Right[index].popUp;
    setIsVisible(true);
  }

  function handlediv(index) {
    Right[index].popUp = false;
    setIsVisible(Right[index].popUp);
  }

  function handleDelete(Index) {
    let newArr = Right.filter((ele, index) => index !== Index);
    setRight(newArr);
    setIsVisible(false);
  }

  return (
    <div className={Styles.Main}>
      <div>
        <h3>What's Happening</h3>
      </div>

      {Right.map((ele, index) => (
        <div key={ele.id} className={Styles.map}>
          <div className={Styles.Contents}>
            <h4>{ele.country}</h4>
            <strong>{ele.keyword}</strong>
            <br />
            <span>{ele.totalKeywords}</span>
          </div>
          <div className={Styles.butt1}>
            <Button
              className={Styles.butt2}
              key={ele.id}
              color="secondary"
              style={isVisible?{ color: "solid-black", zIndex: "-1" }:{}}
              onClick={() => handleVisible(index)}
            >
              ...
            </Button>
            {isVisible == true && ele.popUp == true ? (
              <div key={ele.id} className={Styles.wrapper}>
                <div
                  onClick={() => handlediv(index)}
                  style={{
                    backgroundColor: "transparent",
                    position: "fixed",
                    height: "5000px",
                    width: "5000px",
                    left: "-80rem",
                    top: "0",
                  }}
                ></div>
                <div
                  onClick={() => handleDelete(index)}
                  className={Styles.Pop}
                  style={{ zIndex: "999999" }}
                >
                  <p key={index}>
                    <CgSmileSad />
                    {ele.popUp}
                    Not Interested in this{" "}
                  </p>

                  <p key={ele.id}>
                    <CgSmileSad />
                    This Trend is harmful or spammy{" "}
                  </p>
                </div>
              </div>
            ) : (
              " "
            )}
          </div>
        </div>
      ))}
      <button>Show More</button>

    </div>
  
  );
}
