import { useQuery } from "@tanstack/react-query";
import { getIssues } from "../actions/get-issues.action";

export const useIssue = (issueNumber: number) => {
  const issueQuery = useQuery({
    queryKey: ["issues", issueNumber],
    queryFn: getIssues,
    staleTime: 1000 * 60 * 60,
  });

  return {
    issueQuery,
  };
};
