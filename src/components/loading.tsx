import React, { FC, HTMLProps, useState } from "react";
import useInterval from "../hooks/use-interval";
import { withTheme } from "../context/theme-context";

export const Loading: FC<HTMLProps<any>> = withTheme(({ className = "", styles, ...rest }) => {
  const [dotIndex, setDotIndex] = useState(0);
  const dots = ["", ".", "..", "..."];
  useInterval(() => {
    setDotIndex(() => (dotIndex + 1) % 4);
  }, 350);
  return <span className={className} {...rest}>Loading{dots[dotIndex]}</span>;
});
