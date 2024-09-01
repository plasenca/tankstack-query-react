import "./App.css";
import { useRandom } from "./hooks/useRandom";
// import RandomNumber from "./RandomNumber";

function App() {
  const { randomQuery } = useRandom();

  return (
    <>
      {randomQuery.isFetching ? (
        <h1>Loading...</h1>
      ) : (
        <h1>Number: {randomQuery.data}</h1>
      )}

      {/* <RandomNumber /> */}
      <div>{JSON.stringify(randomQuery.error)}</div>

      <button onClick={() => randomQuery.refetch()}>Get new number</button>
    </>
  );
}

export default App;
