import React from "react";
import "./Project.css";
let imgStr = (arg) => {
  return "./images/"+arg;
}
export default function Project(props){
const doClick = event => {
  props.showModal(props.title)
}
  return (
    <div className={props.className}>
      <h6>{props.title}</h6>
      <a target='_blank' href={props.link}><img src={imgStr(props.img)} /></a>
      <p style={{margin:0}}><img src={imgStr(props.stack)} title={props.tech}/></p>
      <button className='btn-small' onClick={doClick}>details</button>
    </div>
  )
}