import { useState } from "react";
import "./App.css";

function App() {
  const [list, setList] = useState([]);

  return (
    <>
      <h1>Numeri</h1>
      <ul>{list.length > 0 && <li>{list}</li>}</ul>
    </>
  );
}

export default App;
