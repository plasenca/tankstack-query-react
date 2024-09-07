import { useLabels } from "@/issues/hooks/useLabels";
import { LoadingSpinner } from "@/shared";

interface Props {
  onLabelSelected: (label: string) => void;
  selectedLabels: string[];
}

export const LabelPicker: React.FC<Props> = ({
  onLabelSelected,
  selectedLabels,
}) => {
  const { labelsQuery } = useLabels();

  if (labelsQuery.isLoading) {
    return (
      <div className="flex justify-center items-center h-52">
        <LoadingSpinner />
      </div>
    );
  }

  return (
    <div className="flex flex-wrap gap-2 ">
      {labelsQuery.data?.map((label) => {
        const isSelected = selectedLabels.includes(label.name);

        return (
          <span
            key={label.id}
            className={`animate-fadeIn px-2 py-1 rounded-full text-xs font-semibold hover:bg-slate-800 cursor-pointer ${
              isSelected ? "selected-label" : ""
            }`}
            style={{
              border: `1px solid #${label.color}`,
              color: `#${label.color}`,
            }}
            onClick={() => onLabelSelected(label.name)}
          >
            {label.name}
          </span>
        );
      })}
    </div>
  );
};
