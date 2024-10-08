import { LoadingSpinner } from "@/shared";
import { IssueList } from "../components/IssueList";
import { LabelPicker } from "../components/LabelPicker";
import { useIssues } from "../hooks/useIssues";
import { useState } from "react";
import { State } from "../interfaces";

export const ListView = () => {
  const [state, setState] = useState<State>(State.All);
  const [selectedLabels, setSelectedLabels] = useState<string[]>([]);

  const { issuesQuery, nextPage, page, prevPage } = useIssues({
    state,
    selectedLabels,
  });

  const issues = issuesQuery.data ?? [];
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
          <>
            <IssueList
              issues={issues}
              onStateChange={setState}
              valueSelected={state}
            />

            <div className="flex justify-between items-center">
              <button
                className="py-2 px-4 bg-blue-500 rounded-md hover:bg-blue-700 transition-all"
                onClick={prevPage}
              >
                Previous
              </button>
              <span>{page}</span>
              <button
                className="py-2 px-4 bg-blue-500 rounded-md hover:bg-blue-700 transition-all"
                onClick={nextPage}
              >
                Next
              </button>
            </div>
          </>
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
