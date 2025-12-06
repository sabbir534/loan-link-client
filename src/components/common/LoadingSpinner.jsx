import React from "react";

const LoadingSpinner = ({ smallHeight = false }) => {
  return (
    <div
      className={`flex justify-center items-center ${
        smallHeight ? "min-h-[200px]" : "min-h-[calc(100vh-200px)]"
      }`}
    >
      <div className="flex flex-col items-center gap-4">
        {/* DaisyUI Spinner */}
        <span className="loading loading-spinner loading-lg text-primary scale-125"></span>

        {/* Optional Text */}
        <p className="text-sm text-base-content/70 animate-pulse font-medium">
          Loading...
        </p>
      </div>
    </div>
  );
};

export default LoadingSpinner;
