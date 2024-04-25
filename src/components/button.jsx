import React from "react";
import { twMerge } from "tailwind-merge";

function Button(props) {
  const { className } = props;
  return (
    <div>
      <button className={twMerge("bg-green-500", className)}>
        Open / Close
      </button>
    </div>
  );
}

export default Button;
