import { useInfiniteQuery } from "@tanstack/react-query";
import { getIssues } from "../actions/get-issues.action";
import { State } from "../interfaces";
import { useEffect, useState } from "react";

interface UseIssuesOptions {
  state: State;
  selectedLabels: string[];
}

export const useIssuesInfinite = ({
  state,
  selectedLabels,
}: UseIssuesOptions) => {
  const issuesQuery = useInfiniteQuery({
    queryKey: ["issues", "infinite", { state, selectedLabels }],
    queryFn: ({ pageParam, queryKey, meta, signal }) => {
      console.log({
        pageParam,
        queryKey,
        meta,
        signal,
      });

      const [, , args] = queryKey;
      const { state, selectedLabels } = args as UseIssuesOptions;

      return getIssues(state, selectedLabels, pageParam);
    },
    staleTime: 1000 * 60 * 60,
    initialPageParam: 0,
    getNextPageParam: (lastPage, pages, lastPageParam, allPageParams) => {
      if (lastPage.length > 0) {
        return pages.length + 1;
      }

      return undefined;
    },
  });

  return {
    issuesQuery,
  };
};
