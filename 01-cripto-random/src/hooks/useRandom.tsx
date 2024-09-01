import { useQuery } from "@tanstack/react-query";

const getCryptoNumber = async (): Promise<number> => {
  const response = await fetch(
    "https://www.random.org/integers/?num=1&min=1&max=500&col=1&base=10&format=plain&rnd=new"
  ).then((response) => response.json());

  // throw new Error("Something went wrong");

  return Number(response);
};

export const useRandom = () => {
  const randomQuery = useQuery({
    queryKey: ["randomNumber"],
    queryFn: () => getCryptoNumber(),
    refetchOnWindowFocus: false, // when window is in focus again
    // retry: false, // times to retry when request fails
    // retryDelay: 3000, // time to wait before retrying
  });

  return {
    randomQuery,
  };
};
