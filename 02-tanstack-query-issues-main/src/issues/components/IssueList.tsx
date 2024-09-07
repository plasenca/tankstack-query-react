import { GithubIssue, State } from "../interfaces";
import { IssueItem } from "./IssueItem";

interface Props {
  issues: GithubIssue[];
  valueSelected: State;
  onStateChange: (state: State) => void;
}

export const IssueList: React.FC<Props> = ({
  issues,
  onStateChange,
  valueSelected,
}) => {
  return (
    <>
      {/* Botones de All, Open, Closed */}
      <div className="flex gap-4">
        <button
          onClick={() => onStateChange(State.All)}
          className={`btn ${valueSelected === State.All ? "active" : ""}`}
        >
          All
        </button>
        <button
          onClick={() => onStateChange(State.Open)}
          className={`btn ${valueSelected === State.Open ? "active" : ""}`}
        >
          Open
        </button>
        <button
          onClick={() => onStateChange(State.Closed)}
          className={`btn ${valueSelected === State.Closed ? "active" : ""}`}
        >
          Closed
        </button>
      </div>

      {/* Lista de issues */}
      <div className="mt-4">
        {issues.map((issue) => (
          <IssueItem key={issue.id} issue={issue} />
        ))}
      </div>
    </>
  );
};
