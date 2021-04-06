import React, { useEffect, useRef, useState } from "react";
import "./Popup.css";

import axios from "axios";

function Popup({ name, _id }) {
  console.log(name);
  console.log(_id);
  const [activePopup, setActivePopup] = useState(false);
  //   const [activeUpdate, setActiveUpdate] = useState(false);
  const popupRef = useRef();

  const handlerActivePopup = () => {
    setActivePopup(!activePopup);
  };

  const handleOutsideClick = (event) => {
    const path = event.path;
    if (!path.includes(popupRef.current)) {
      setActivePopup(false);
    }
  };

  const handlerUpdateName = () => {
    const newName = prompt("Введите новое имя:");
    axios.put("https://mern-test228.herokuapp.com/update", {
      newName,
      _id,
    });
  };

  const handlerDelete = () => {
    const question = window.confirm("Вы действительно хотите удалить друга?");
    if (question) {
      axios.delete(`https://mern-test228.herokuapp.com/delete/${_id}`);
    }
  };

  useEffect(() => {
    document.body.addEventListener("click", handleOutsideClick);
    return () => {
      document.body.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  return (
    <div className="news-info__menu ">
      <div
        className="news-info__btn"
        onClick={handlerActivePopup}
        ref={popupRef}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path d="M7.41 7.84L12 12.42l4.59-4.58L18 9.25l-6 6-6-6z" />
        </svg>
      </div>
      <div
        className={activePopup ? "news-info-popup active" : "news-info-popup"}
      >
        <ul className="news__menu">
          <li className="news__menu-item" onClick={handlerUpdateName}>
            Редактировать
          </li>
          <li className="news__menu-item" onClick={handlerDelete}>
            Удалить
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Popup;
