import { useQuery } from "@tanstack/react-query";

export const useIssues = async () => {
  const issuesQuery = useQuery({
    queryKey: ["issues"],
  });

  return {};
};
