import { useQuery } from "@tanstack/react-query";

import { getLabels } from "@/issues/actions";
import { GithubLabel } from "../interfaces";

export const useLabels = () => {
  const labelsQuery = useQuery({
    queryKey: ["labels"],
    queryFn: getLabels,
    staleTime: 1000 * 60 * 60,
    placeholderData: [
      {
        id: 710573595,
        node_id: "MDU6TGFiZWw3MTA1NzM1OTU=",
        url: "https://api.github.com/repos/facebook/react/labels/Component:%20Developer%20Tools",
        name: "Component: Developer Tools",
        color: "fbca04",
        default: false,
      } satisfies GithubLabel,
      {
        id: 1109407645,
        node_id: "MDU6TGFiZWwxMTA5NDA3NjQ1",
        url: "https://api.github.com/repos/facebook/react/labels/Component:%20Suspense",
        name: "Component: Suspense",
        color: "8ffcd6",
        default: false,
        description: "",
      } satisfies GithubLabel,
    ],
    // initialData: [
    //   {
    //     id: 710573595,
    //     node_id: "MDU6TGFiZWw3MTA1NzM1OTU=",
    //     url: "https://api.github.com/repos/facebook/react/labels/Component:%20Developer%20Tools",
    //     name: "Component: Developer Tools",
    //     color: "fbca04",
    //     default: false,
    //   } satisfies GithubLabel,
    //   {
    //     id: 1109407645,
    //     node_id: "MDU6TGFiZWwxMTA5NDA3NjQ1",
    //     url: "https://api.github.com/repos/facebook/react/labels/Component:%20Suspense",
    //     name: "Component: Suspense",
    //     color: "8ffcd6",
    //     default: false,
    //     description: "",
    //   } satisfies GithubLabel,
    // ] as GithubLabel[],
  });

  return {
    labelsQuery,
  };
};
