import { useState } from "react";
import Spinner from "./components/Spinner";
import "./App.css";

function App() {
  const [list, setList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  function generateNumber() {
    return Math.floor(Math.random() * (90 - 1 + 1) + 1);
  }

  function isNumInList(n) {
    return list.includes(n);
  }

  function handleGenerateClick() {
    const n = generateNumber();
    if (!isNumInList(n)) {
      setIsLoading(true);
      setTimeout(() => {
        setList([...list, n]);
        setIsLoading(false);
      }, 1000);
    }
  }

  return (
    <>
      <h1>Numeri</h1>
      <div style={{ display: "flex", alignItems: "center" }}>
        <ul
          style={{
            display: "flex",
            gap: "1rem",
            listStyle: "none",
            height: "50px",
          }}
        >
          {list.length > 0 &&
            list.map((n) => (
              <li
                key={n}
                style={{
                  width: "50px",
                  height: "50px",
                  lineHeight: "50px",
                  background: "white",
                  color: "green",
                  borderRadius: "55px",
                  fontSize: "2rem",
                  fontWeight: "bold",
                }}
              >
                {n}
              </li>
            ))}
        </ul>
        {isLoading && <Spinner />}
      </div>
      {list.length < 6 && <button onClick={handleGenerateClick}>Genera</button>}
      {/* {isLoading && <Spinner />} */}
      {list.length > 5 && <button onClick={() => setList([])}>Resetta</button>}
    </>
  );
}

export default App;
