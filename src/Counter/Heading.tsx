import React from "react";

interface Props {
  text: string | number;
}

const Heading = ({ text }: Props) => {
  return <h2>{text}</h2>;
};

export default Heading;
