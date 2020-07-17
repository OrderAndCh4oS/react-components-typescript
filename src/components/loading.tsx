import React, { FC, HTMLProps, useState } from "react";

export const Loading: FC<HTMLProps<any>> = ({ className = "", ...rest }) => {
  const [dotIndex, setDotIndex] = useState(0);
  const dots = ["", ".", "..", "..."];
  setInterval(() => {
    setDotIndex(() => (dotIndex + 1) % 4);
  }, 350);
  return <span className={className} {...rest}>Loading{dots[dotIndex]}</span>;
};
