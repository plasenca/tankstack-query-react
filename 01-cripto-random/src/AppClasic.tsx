import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [number, setNumber] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [refreshToken, setRefreshToken] = useState(0);

  useEffect(() => {
    setIsLoading(true);

    fetch(
      "https://www.random.org/integers/?num=1&min=1&max=500&col=1&base=10&format=plain&rnd=new"
    )
      .then((response) => response.json())
      .then((data) => setNumber(data))
      .finally(() => setIsLoading(false));
  }, [refreshToken]);

  return (
    <>
      {isLoading ? <p>Loading...</p> : <h1>Number: {number}</h1>}

      <div>...</div>

      <button
        onClick={
          isLoading ? undefined : () => setRefreshToken(refreshToken + 1)
        }
      >
        Get new number
      </button>
    </>
  );
}

export default App;
