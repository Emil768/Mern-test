import React, { memo } from "react";
import "./Friends.css";
import Friend from "../Friend/Friend";
function Friends({ data }) {
  return (
    <div className="friends">
      <div className="container">
        <h2 className="friends__title">Список друзей</h2>
        <ul className="friends__list">
          {data.map((item, index) => {
            return <Friend item={item} key={index} />;
          })}
        </ul>
      </div>
    </div>
  );
}

export default memo(Friends);
