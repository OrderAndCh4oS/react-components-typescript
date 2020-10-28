import React, { FC } from "react";
import { NavLink } from "react-router-dom";

import { IButton, ILinkButton, IRadioButton, ISwitchButton } from "../interfaces/components";
import { withTheme } from "../context/theme-context";

export const Button: FC<IButton> = withTheme(({ className = "", iconLeft = null, iconRight = null, children, styles, ...rest }) => (
  <button className={`${styles.button} ${className}`} {...rest}>
    {iconLeft ? <span className={styles.button_iconLeft}>{iconLeft}</span> : null}
    {children}
    {iconRight ? <span className={styles.button_iconRight}>{iconRight}</span> : null}
  </button>
));

export const LinkButton: FC<ILinkButton> = withTheme(({ to, className = "", iconLeft = null, iconRight = null, children, styles, ...rest }) => (
  <NavLink to={to} className={`${styles.button} ${className}`} {...rest}>
    {iconLeft ? <span className={styles.button_iconLeft}>{iconLeft}</span> : null}
    {children}
    {iconRight ? <span className={styles.button_iconRight}>{iconRight}</span> : null}
  </NavLink>
));

export const Link: FC<ILinkButton> = withTheme(({ to, className = "", iconLeft = null, iconRight = null, children, styles, ...rest }) => (
  <NavLink to={to} className={`link ${className}`} {...rest}>
    {iconLeft ? <span className={styles.button_iconLeft}>{iconLeft}</span> : null}
    {children}
    {iconRight ? <span className={styles.button_iconRight}>{iconRight}</span> : null}
  </NavLink>
));

export const RadioButton: FC<IRadioButton> = withTheme(({ className = "", children, styles, checked = false, ...rest }) =>
  <button className={`${styles.button_radio} ${checked ? styles.checked : ""} ${className}`} {...rest}>
    {children}
  </button>
);


export const SwitchButton: FC<ISwitchButton> = withTheme((
  {
    active,
    name,
    error,
    className = "",
    styles,
    ...rest
  }) => {
  const title = active ? "On" : "Off";
  return <button
    id={name}
    title={title}
    className={`${styles.button_switch} ${active ? styles.button_switch_on : ""} ${className}`}
    {...rest}
  />;
});
