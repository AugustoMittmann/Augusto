import React from "react";
import './Style.css'
import o from './img/o.png'
import x from './img/x.png'

export default props => {
  return (
    <>
    {
      props.id === '' ? null : <img src={props.id === 'x' ? x : o} className="img"/>
    }
    </>
  )
}