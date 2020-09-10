import React, { FC } from "react";
import { NavLink } from "react-router-dom";
import styles from "@orderandchaos/react-styles/dist/styles.module.css";

import { IButton, ILinkButton, IRadioButton, ISwitchButton } from "../interfaces/components";

export const Button: FC<IButton> = ({ className = "", iconLeft = null, iconRight = null, children, ...rest }) => (
  <button className={`${styles.button} ${className}`} {...rest}>
    {iconLeft ? <span className={styles.button_iconLeft}>{iconLeft}</span> : null}
    {children}
    {iconRight ? <span className={styles.button_iconRight}>{iconRight}</span> : null}
  </button>
);

export const LinkButton: FC<ILinkButton> = ({ to, className = "", iconLeft = null, iconRight = null, children, ...rest }) => (
  <NavLink to={to} className={`${styles.button} ${className}`} {...rest}>
    {iconLeft ? <span className={styles.button_iconLeft}>{iconLeft}</span> : null}
    {children}
    {iconRight ? <span className={styles.button_iconRight}>{iconRight}</span> : null}
  </NavLink>
);

export const Link: FC<ILinkButton> = ({ to, className = "", iconLeft = null, iconRight = null, children, ...rest }) => (
  <NavLink to={to} className={`link ${className}`} {...rest}>
    {iconLeft ? <span className={styles.button_iconLeft}>{iconLeft}</span> : null}
    {children}
    {iconRight ? <span className={styles.button_iconRight}>{iconRight}</span> : null}
  </NavLink>
);

export const RadioButton: FC<IRadioButton> = ({ className = "", children, checked = false, ...rest }) =>
  <button className={`${styles.button_radio} ${checked ? styles.checked : ""} ${className}`} {...rest}>
    {children}
  </button>;


export const SwitchButton: FC<ISwitchButton> = (
  {
    active,
    name,
    error,
    className = "",
    ...rest
  }) => {
  const title = active ? "On" : "Off";
  return <button
    id={name}
    title={title}
    className={`${styles.button_switch} ${active ? styles.button_switch_on : ""} ${className}`}
    {...rest}
  />;
};
