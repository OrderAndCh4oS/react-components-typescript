import React, { FC, HTMLProps } from "react";
import styles from "@orderandchaos/react-styles/dist/styles.module.css";

import { IField, IFormError, IInput, ISelect, ISwitch, ITextArea } from "../interfaces/components";

export const Label: FC<HTMLProps<any>> = ({ children, htmlFor, ...rest }) =>
  <label
    htmlFor={htmlFor}
    className={styles.label_text}
    {...rest}
  >{children}</label>;

export const FormError: FC<IFormError> = ({ error, ...rest }) =>
  error ? <p className={styles.c_error} {...rest}>{error}</p> : null;

export const FormField: FC<HTMLProps<any>> = ({ className = "", children, ...rest }) => (
  <div className={`${styles.formField} ${className}`} {...rest}>
    {children}
  </div>
);

export const Field: FC<IField> = ({ className = "", type, children, error, ...rest }) => (
  <div className={`${styles.formField} ${type} ${className}`} {...rest}>
    {children}
    <FormError error={error}/>
  </div>
);

export const Input: FC<IInput> = (
  {
    label,
    name,
    type = "text",
    error = null,
    valid = null,
    className = "",
    ...rest
  }) => {
  return (
    <Field type={type} error={error}>
      <Label htmlFor={name}>{label}</Label>
      <input
        {...rest}
        id={name}
        name={name}
        type={type}
        className={`input ${error ? styles.input_error : null}, ${valid
          ? styles.input_valid
          : ""}, ${className}`}
      />
    </Field>
  );
};

export const TextArea: FC<ITextArea> = (
  {
    label,
    name,
    error = null,
    valid = null,
    className = "",
    ...rest
  }) => (
  <Field type='formField--textArea' error={error}>
    <Label htmlFor={name}>{label}</Label>
    <textarea
      {...rest}
      id={name}
      name={name}
      className={`input_textArea ${error
        ? styles.input_error
        : ""} ${valid ? styles.input_valid : null} ${className}`}
    />
  </Field>
);

export const Select: FC<ISelect> = (
  {
    label,
    name,
    error = null,
    valid = null,
    className = "",
    options = [],
    initialField = "Select an option",
    ...rest
  }) => {
  return (
    <Field type='formField_select' error={error}>
      <Label htmlFor={name}>{label}</Label>
      <select
        {...rest}
        id={name}
        name={name}
        className={`input_select ${error
          ? styles.input_error
          : ""} ${className}`}
      >
        <option value="">{initialField}</option>
        {options.map((option) =>
          <option
            key={option.value} value={option.value}
          >{option.name}</option>
        )}
      </select>
    </Field>
  );
};

export const Switch: FC<ISwitch> = (
  {
    value = false,
    label,
    name,
    error,
    onChangeHandler,
    onBlurHandler,
    className = "",
    ...rest
  }) => {
  const classes = `${styles.button_switch} ${className} ${value
    ? styles.button_switch_on
    : ""}`;
  const title = value ? "On" : "Off";
  return (
    <Field type='formField_switch' error={error}>
      <Label htmlFor={name}>{label}</Label>
      <button
        id={name}
        title={title}
        onBlur={() => {
          onBlurHandler(true);
        }}
        onClick={() => {
          onChangeHandler(name, !value);
        }}
        className={classes}
        {...rest}
      />
    </Field>
  );
};
