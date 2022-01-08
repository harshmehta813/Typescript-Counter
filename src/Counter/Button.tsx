import React from "react";

interface Props {
  text: string;
  onClick: () => void;
}

const Button = (props: Props) => {
  return (
    <button
      onClick={props.onClick}
      style={{
        border: "1px solid black",
        padding: "0.5rem",
        borderRadius: "0.25rem",
        cursor: "pointer"
      }}
    >
      {props.text}
    </button>
  );
};

export default Button;
