import React, { Fragment, useState } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import style from "./TweetModel.module.css";
import { Tweet ,atomTweetCount} from "../Data/AtomData/Atom";
import CloseIcon from "@mui/icons-material/Close";
import IconButton from "@mui/material/IconButton";
import { Button } from "@mui/material";
import AddPhotoAlternateOutlinedIcon from "@mui/icons-material/AddPhotoAlternateOutlined";
import GifBoxOutlinedIcon from "@mui/icons-material/GifBoxOutlined";
import BallotOutlinedIcon from "@mui/icons-material/BallotOutlined";
import EmojiEmotionsOutlinedIcon from "@mui/icons-material/EmojiEmotionsOutlined";
import PendingActionsOutlinedIcon from "@mui/icons-material/PendingActionsOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import PublicOutlinedIcon from "@mui/icons-material/PublicOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import { userPic } from "../Data/AtomData/data";
import { getCurrentUser, getPosts } from "../services/utilities";


export default function TweetModel() {

  const [isTweet, setIsTweet] = useRecoilState(Tweet);

  return (
    <Fragment>
      {isTweet 
      && 
      (<div className={style.mainBlurContainer}>
          <Tweets />
        </div>
      )
      }
    </Fragment>
  );
}

export function Tweets() {
  const setIsTweet = useSetRecoilState(Tweet);
  const [input, setInput] = useState("")
  const [isDisable, setIsDisable] = useState(true)
  const [tweetCount, setTweetCount] = useRecoilState(atomTweetCount)
  
  const posts = getPosts();
  const currentUser = getCurrentUser()

  function handleInput(e) {
    setInput(e.target.value);
    if (input) {
      setIsDisable(false)
    }
    
  }
  function handleTweet() {
    setInput(input.trim())
    if (input) {
      let id = Math.random()
      id = Math.floor(id * 80)
      const newPost = {
        id: id,
        comments: 0,
        likes: 0,
        isLiked: false,
        retweets: 0,
        trending: 0,
        profilePic: userPic,
        postText: input,
        name: currentUser.name,
        userName: currentUser.userName
      }
    
      setIsDisable(true)
      setInput("")
      setTweetCount(tweetCount + 1)
      posts.unshift(newPost)
      localStorage.setItem("posts", JSON.stringify(posts))
      setIsTweet(false)
    }
  }
  return (
    <Fragment>
      <div 
      // onClick={() => setIsTweet(true)}
       className={style.wrapper}>
        <div className={style.closeBtn}>
          <IconButton
           
            sx={{
              color: "black",
              "&:hover": {
                backgroundColor: "rgba(204, 201, 201, 0.486)",
              },
            }}
            onClick={() => setIsTweet(false)}
          >
            <CloseIcon
              sx={{
                color: "black",
              }}
            />
          </IconButton>
        </div>
        <div className={style.wrapperRightSide}>
          <div className={style.imgDiv}>
            <img
              src={userPic}
              height={60}
              width={60}
              alt="user"
            />
          </div>
          <div className={style.twoSectionDivided}>
            <div className={style.wrapperForSelect}>
              <select name="" id="" className={style.selectBoxOne}>
                <option value="EveryOne" default>
                  Everyone 
                </option>
                <option value="Twitter Circle">
                  Twitter Circle
                 
                </option>
              </select>
              <textarea
                value={input}
                onChange={handleInput}
                className={style.textarea}
                placeholder="What's happening?"
              />

              <select name="" id="" className={style.selectBoxTwo}>
                <option value="Everyone can reply" default>
                   Everyone can reply
                </option>
                <option value="People you follow">
                 People you follow
                </option>
                <option value="Only people you following">
                  Only people you following
                </option>
              </select>
            </div>
            <hr />
            <div className={style.iconNButton}>
              <div className={style.icons}>
                <IconButton title="Media" color="primary" size="larger">
                  <AddPhotoAlternateOutlinedIcon fontSize="larger" />
                </IconButton>
                <IconButton title="GIF" size="small" color="primary">
                  <GifBoxOutlinedIcon />
                </IconButton>
                <IconButton title="Poll" color="primary" size="small">
                  <BallotOutlinedIcon />
                </IconButton>
                <IconButton title="Emoji" color="primary" size="small">
                  <EmojiEmotionsOutlinedIcon />
                </IconButton>
                <IconButton title="Schedule" color="primary" size="small">
                  <PendingActionsOutlinedIcon />
                </IconButton>
                <IconButton title="Tag Location" color="primary" size="small">
                  <LocationOnOutlinedIcon />
                </IconButton>
              </div>
              <Button
                onClick={handleTweet}
                disabled={isDisable}
                className={style.tweetBtn}
                sx={{
                  fontSize: "1.2rem",
                  textTransform: "none",
                  borderRadius: "3rem",
                  width: "6rem",
                  height: "2.8rem",
                  backgroundColor: "rgb(29, 155, 240)",
                  "&:hover": {},
                }}
                variant="contained"
              >
                Tweet
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
