import "./App.css";
import { useQuery } from "@tanstack/react-query";
// import RandomNumber from "./RandomNumber";

const getCryptoNumber = async (): Promise<number> => {
  const response = await fetch(
    "https://www.random.org/integers/?num=1&min=1&max=500&col=1&base=10&format=plain&rnd=new"
  ).then((response) => response.json());

  // throw new Error("Something went wrong");

  return Number(response);
};

function App() {
  const { data, error, refetch, isFetching } = useQuery({
    queryKey: ["randomNumber"],
    queryFn: () => getCryptoNumber(),
    refetchOnWindowFocus: false, // when window is in focus again
    // retry: false, // times to retry when request fails
    // retryDelay: 3000, // time to wait before retrying
  });

  return (
    <>
      {isFetching ? <h1>Loading...</h1> : <h1>Number: {data}</h1>}

      {/* <RandomNumber /> */}
      <div>{JSON.stringify(error)}</div>

      <button onClick={() => refetch()}>Get new number</button>
    </>
  );
}

export default App;
