import { LoadingSpinner } from "@/shared";
import { IssueList } from "../components/IssueList";
import { LabelPicker } from "../components/LabelPicker";
import { useState } from "react";
import { State } from "../interfaces";
import { useIssuesInfinite } from "../hooks/useIssuesInfinite";

export const ListViewInfinite = () => {
  const [state, setState] = useState<State>(State.All);
  const [selectedLabels, setSelectedLabels] = useState<string[]>([]);

  const { issuesQuery } = useIssuesInfinite({
    state,
    selectedLabels,
  });

  const issues = issuesQuery.data?.pages.flat() ?? [];
  const onLabelSelected = (label: string) => {
    if (selectedLabels.includes(label)) {
      setSelectedLabels(selectedLabels.filter((l) => l !== label));
    } else {
      setSelectedLabels([...selectedLabels, label]);
    }
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 mt-5">
      <div className="col-span-1 sm:col-span-2">
        {issuesQuery.isLoading ? (
          <LoadingSpinner />
        ) : (
          <div className="flex flex-col justify-center">
            <IssueList
              issues={issues}
              onStateChange={setState}
              valueSelected={state}
            />

            <button
              className="py-2 px-4 bg-blue-500 rounded-md hover:bg-blue-700 transition-all disabled:bg-slate-700 disabled:cursor-not-allowed"
              onClick={() => issuesQuery.fetchNextPage()}
              disabled={issuesQuery.isFetchingNextPage}
            >
              {issuesQuery.isFetchingNextPage ? "Loading..." : "Load more"}
            </button>
          </div>
        )}
      </div>

      <div className="col-span-1 px-2">
        <LabelPicker
          onLabelSelected={onLabelSelected}
          selectedLabels={selectedLabels}
        />
      </div>
    </div>
  );
};
