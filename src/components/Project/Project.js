import React from "react";
import "./Project.css";
let imgStr = (arg) => {
  return "./images/"+arg;
}
export default function Project(props){
 
  return (
    <div className={props.className}>
      <h6>{props.title}</h6>
      <a target='_blank' href={props.link}><img src={imgStr(props.img)} /></a>
      {/* <p><a target='_blank' href={props.link}>{props.title}</a></p> */}
      <p><img src={imgStr(props.stack)} title={props.tech}/></p>
    </div>
  )
}