import "./App.css";
import Friends from "./components/Friends/Friends";
import axios from "axios";
import { useState, useCallback, useEffect } from "react";

function App() {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [image, setImage] = useState(
    "https://hope.be/wp-content/uploads/2015/05/no-user-image.gif"
  );

  const [data, setData] = useState([]);

  const handlerChangeName = (e) => {
    setName(e.target.value);
  };

  const handlerChangeAge = (e) => {
    setAge(e.target.value);
  };

  const handlerChangeImage = (e) => {
    setImage(e.target.value);
  };

  const handlerAddFriend = () => {
    axios.post("http://localhost:3001/insert", {
      name,
      age,
      image,
    });
  };

  useEffect(() => {
    axios.get("http://localhost:3001/read").then((res) => setData(res.data));
  }, []);

  return (
    <div className="App">
      <h1>MERN</h1>
      <div className="App__content">
        <form action="">
          <input
            type="text"
            placeholder="Имя"
            onChange={handlerChangeName}
            required
          />
          <input
            type="number"
            placeholder="Возраст"
            onChange={handlerChangeAge}
            min={0}
            required
          />
          <input
            type="text"
            placeholder="Фото друга"
            onChange={handlerChangeImage}
          />
          <button onClick={handlerAddFriend}>Добавить</button>
        </form>
      </div>
      <Friends data={data} />
    </div>
  );
}

export default App;
