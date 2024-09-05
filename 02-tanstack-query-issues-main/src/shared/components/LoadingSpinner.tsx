import { FiRefreshCcw } from "react-icons/fi";

export default function LoadingSpinner() {
  return (
    <div className="loading">
      <div className="flex w-full h-52 justify-center">
        <FiRefreshCcw className="animate-spin" size={40} />
      </div>
    </div>
  );
}
