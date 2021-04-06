import React from "react";
import Popup from "../Popup/Popup";
import "./Friend.css";
function Friend({ item }) {
  return (
    <li className="friends__item">
      <img className="friends__item-img" src={item.image} alt="" />
      <h3 className="friends__item-title">{item.name}</h3>
      <span>{item.age}</span>
      <Popup {...item} />
    </li>
  );
}

export default Friend;
