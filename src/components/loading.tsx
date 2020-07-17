import React, { FC, HTMLProps } from "react";

export const Loading: FC<HTMLProps<any>> = ({ className = "", ...rest }) => {
  let dotIndex = 0;
  const dots = ["", ".", "..", "..."];
  setInterval(() => {
    dotIndex += 1 % 4;
  }, 320);
  return <span className={className} {...rest}>Loading{dots[dotIndex]}</span>;
};
