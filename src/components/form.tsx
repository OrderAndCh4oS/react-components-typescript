import React, { FC, HTMLProps } from "react";
import styles from "@orderandchaos/react-styles/dist/styles.module.css";

import { IField, IFormError, IInput, ISelect, ISwitchField, ITextArea } from "../interfaces/components";
import { SwitchButton } from "./button";

export const Label: FC<HTMLProps<any>> = ({ children, htmlFor, ...rest }) =>
  <label
    htmlFor={htmlFor}
    className={styles.label_text}
    {...rest}
  >{children}</label>;

export const FormError: FC<IFormError & HTMLProps<any>> = ({ error, ...rest }) =>
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
    name,
    type = "text",
    error = null,
    valid = null,
    className = "",
    ...rest
  }) =>
  <input
    {...rest}
    id={name}
    name={name}
    type={type}
    className={`input ${error ? styles.input_error : null}, ${valid
      ? styles.input_valid
      : ""}, ${className}`}
  />;

export const InputField: FC<IInput> = (
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
      <Input {...({ name, type, error, valid, className, ...rest })}/>
    </Field>
  );
};

export const TextArea: FC<ITextArea> = (
  {
    name,
    error = null,
    valid = null,
    className = "",
    ...rest
  }) =>
  <textarea
    {...rest}
    id={name}
    name={name}
    className={`input_textArea ${error
      ? styles.input_error
      : ""} ${valid ? styles.input_valid : null} ${className}`}
  />;

export const TextAreaField: FC<ITextArea> = (
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
    <TextArea {...({ name, error, valid, className, ...rest })} />
  </Field>
);

export const Select: FC<ISelect> = (
  {
    name,
    error = null,
    valid = null,
    className = "",
    options = [],
    initialField = "SelectField an option",
    ...rest
  }) =>
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
  </select>;

export const SelectField: FC<ISelect> = (
  {
    label,
    name,
    error = null,
    valid = null,
    className = "",
    options = [],
    initialField = "SelectField an option",
    ...rest
  }) => {
  return (
    <Field type='formField_select' error={error}>
      <Label htmlFor={name}>{label}</Label>
      <Select {...({ name, error, valid, className, options, initialField, ...rest })}/>
    </Field>
  );
};

export const SwitchField: FC<ISwitchField> = (
  {
    active = false,
    label,
    name,
    error,
    className = "",
    ...rest
  }) => {
  const classes = `${styles.button_switch} ${className} ${active
    ? styles.button_switch_on
    : ""}`;
  return (
    <Field type='formField_switch' error={error}>
      <Label htmlFor={name}>{label}</Label>
      <SwitchButton {...({ active, name, error, className: classes, ...rest })}/>
    </Field>
  );
};
