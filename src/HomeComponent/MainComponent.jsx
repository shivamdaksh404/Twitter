import React ,{useState,useEffect} from "react";
import styles from "./Main.module.css";
import {  getPosts } from "../services/utilities";
import { Button } from "@mui/material";
import { FaRegComment } from "react-icons/fa";
import { MdSync, MdPoll } from "react-icons/md";
import { FiShare } from "react-icons/fi";
import { BsHeart } from "react-icons/bs";
import { AiFillHeart } from "react-icons/ai";
import CreateTweet from "./CreateTweet";
import { atomTweetCount } from "../Data/AtomData/Atom";
import { useRecoilState } from "recoil";

export default function MainComponent() {
  const [tweetCount, setTweetCount] = useRecoilState(atomTweetCount)
  const [likes, setLikes] = useState(0);
  
  let posts = getPosts();

  useEffect(() => {
     posts = getPosts();
  },[tweetCount])
  
  function handleLikeClick(index) {
    setLikes(likes+1)
    const currentPostIndex = posts.findIndex((ele) => ele.id === index);
    if (posts[currentPostIndex].isLiked === false) {
      posts[currentPostIndex].likes += 1;
      posts[currentPostIndex].isLiked = true;
    } else {
      posts[currentPostIndex].likes -= 1;
      posts[currentPostIndex].isLiked = false;
    }
    localStorage.setItem("posts", JSON.stringify(posts));
  }
  return (
    <div className={styles.mainWrapper}>
      <CreateTweet />
      {posts.map((user) => (
        <div className={styles.container}>
          <div className={styles.header}>
            <img src={user.profilePic} alt="user img" />
            <div>
              <h5>
                {user.name}&nbsp;<span>{user.userName}</span>
              </h5>
              <br />
              <span>{user.postText}</span>
            </div>
          </div>
          <div className={styles.post}>
           <img src={user.postPic}/>
            
          </div>
          <div className={styles.btnDiv}>
            <Button
              variant="text"
              startIcon={<FaRegComment />}
              id={styles.commentBtn}
            >
              {user.comment}
            </Button>
            <Button id={styles.retweetBtn} startIcon={<MdSync />}>
              {user.retweet}
            </Button>
            <Button
              onClick={() => handleLikeClick(user.id)}
              id={styles.likesBtn}
              startIcon={
                user.isLiked ? (
                  <AiFillHeart size={24} style={{ color: "deeppink" }} />
                ) : (
                  <BsHeart />
                )
              }
            >
              {user.likes}
            </Button>
            <Button id={styles.trendingBtn} startIcon={<MdPoll />}>
              {user.veiw}
            </Button>
            <Button id={styles.shareBtn} startIcon={<FiShare />}></Button>
          </div>
        </div>
      ))}
    </div>
  );
}
