import { useQuery } from "@tanstack/react-query";
import { getIssue, getIssueComments } from "../actions";

export const useIssue = (issueNumber: number) => {
  const issueQuery = useQuery({
    queryKey: ["issues", issueNumber],
    queryFn: () => getIssue(issueNumber),
    staleTime: 1000 * 60 * 60,
  });

  // const issueComments = useQuery({
  //   queryKey: ["issueComments", issueNumber, "comments"],
  //   queryFn: () => getIssueComments(issueNumber),
  // });

  const issueComments = useQuery({
    queryKey: ["issueComments", issueQuery.data?.number, "comments"],
    queryFn: () => getIssueComments(issueQuery.data?.number ?? 0),
    enabled: !!issueQuery.data,
  });

  return {
    issueQuery,
    issueComments,
  };
};
