import React,{useState} from "react";
import style from "./HomeHeader.module.css";

export default function HomeHeader() {
  const [isSelected, setSelected] = useState(true)

  return (
    <div className={style.mainContainer}>
     
        <h2 className={style.headName}>Home</h2>
        <div className={style.toggleBtn}>
          <div onClick={()=>setSelected(!isSelected)}>
          <p style={isSelected ? {borderBottom:" 0.3rem solid #00acee"}:{}}>For you</p>
          </div>
          <div onClick={()=>setSelected(!isSelected)}>
            <p style={isSelected ? {}:{borderBottom:" 0.3rem solid #00acee"}}>Following</p>
          </div>
        </div>
     
     
    </div>
  );
}
