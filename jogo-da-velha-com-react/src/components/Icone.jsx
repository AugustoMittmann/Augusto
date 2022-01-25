import React from "react";
import './Style.css'
import o from './img/o.png'
import x from './img/x.png'

export default props => {
  return (
    <>
      <img src={x} className="img" id={props.idx}/> 
      <img src={o} className="img" id={props.ido}/>
    </>
  )
}