import React, {useState} from "react";
import style from "./CreateTweet.module.css";
import { BiWorld } from "react-icons/bi";
import { userPic } from "../Data/AtomData/data";
import { atomTweetCount } from "../Data/AtomData/Atom";
import { useRecoilState } from "recoil";
import AddPhotoAlternateOutlinedIcon from "@mui/icons-material/AddPhotoAlternateOutlined";
import GifBoxOutlinedIcon from "@mui/icons-material/GifBoxOutlined";
import BallotOutlinedIcon from "@mui/icons-material/BallotOutlined";
import EmojiEmotionsOutlinedIcon from "@mui/icons-material/EmojiEmotionsOutlined";
import PendingActionsOutlinedIcon from "@mui/icons-material/PendingActionsOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import { Button } from "@mui/material";
import { getPosts , getCurrentUser} from "../services/utilities";

const CreateTweet = () => {
  const [tweetCount, setTweetCount] = useRecoilState(atomTweetCount)
  const [input, setInput] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const [isDisable, setIsDisable] = useState(true)
  const posts = getPosts();

  const currentUser = getCurrentUser()
  function handleInput(e) {
    setInput((e.target.value));
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
    }
  }
 
  return (
    <div className={style.create}>
      <div className={style.create__first}>
        <div className={style.imgAndSelect}>
          <div className={style.imgDiv}>
            <img src={userPic} height={60} width={60} alt="user" />
          </div>
          <div className={style.wrapperForSelect}>
            <select
              name=""
              id=""
              style={isVisible ? {} : { display: "none" }}
              className={style.selectBoxOne}
            >
              <option value="EveryOne" default>
                Everyone
              </option>
              <option value="Twitter Circle">Twitter Circle </option>
            </select>
            <div>
              <textarea
                value={input}
                onChange={handleInput}
                className={style.textarea}
                onClick={() => setIsVisible(true)}
                placeholder="What's happening?"
              />
            </div>

            <div
              name=""
              id=""
              style={isVisible ? {} : { display: "none" }}
              className={style.selectBoxTwo}
            >
              <p value="Everyone can reply" default>
                <BiWorld /> Everyone can reply
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={style.create__second}>
        <div className={style.create__icons}>
          <AddPhotoAlternateOutlinedIcon className={style.ic} />
          <GifBoxOutlinedIcon className={style.ic} />
          <BallotOutlinedIcon className={style.ic} />
          <EmojiEmotionsOutlinedIcon className={style.ic} />
          <PendingActionsOutlinedIcon className={style.ic} />
          <LocationOnOutlinedIcon className={style.ic} />
        </div>
        <div className={style.create__btn}>
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
  );
};

export default CreateTweet;
