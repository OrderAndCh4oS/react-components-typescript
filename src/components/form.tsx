import React, { FC, HTMLProps } from "react";

import { IField, IFormError, IInput, IOption, ISelect, ISwitchField, ITextArea } from "../interfaces/components";
import { SwitchButton } from "./button";
import { withTheme } from "../context/theme-context";

export const Label: FC<HTMLProps<any>> = withTheme(({ children, htmlFor, styles, ...rest }) =>
  <label
    htmlFor={htmlFor}
    className={styles.label_text}
    {...rest}
  >{children}</label>
);

export const FormError: FC<IFormError & HTMLProps<any>> = withTheme(({ error, styles, ...rest }) =>
  error ? <p className={styles.c_error} {...rest}>{error}</p> : null);

export const FormField: FC<HTMLProps<any>> = withTheme(({ className = "", children, styles, ...rest }) => (
  <div className={`${styles.formField} ${className}`} {...rest}>
    {children}
  </div>
));

export const Field: FC<IField> = withTheme(({ className = "", type, children, error, styles, ...rest }) => (
  <div className={`${styles.formField} ${type} ${className}`} {...rest}>
    {children}
    <FormError error={error}/>
  </div>
));

export const Input: FC<IInput> = withTheme((
  {
    name,
    type = "text",
    error = null,
    valid = null,
    className = "",
    styles,
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
  />
  );

export const InputField: FC<IInput> = withTheme((
  {
    label,
    name,
    type = "text",
    error = null,
    valid = null,
    className = "",
    styles,
    ...rest
  }) => {
  return (
    <Field type={type} error={error}>
      <Label htmlFor={name}>{label}</Label>
      <Input {...({ name, type, error, valid, className, ...rest })}/>
    </Field>
  );
});

export const TextArea: FC<ITextArea> = withTheme((
  {
    name,
    error = null,
    valid = null,
    className = "",
    styles,
    ...rest
  }) =>
  <textarea
    {...rest}
    id={name}
    name={name}
    className={`input_textArea ${error
      ? styles.input_error
      : ""} ${valid ? styles.input_valid : null} ${className}`}
  />
  );

export const TextAreaField: FC<ITextArea> = withTheme((
  {
    label,
    name,
    error = null,
    valid = null,
    className = "",
    styles,
    ...rest
  }) => (
  <Field type='formField--textArea' error={error}>
    <Label htmlFor={name}>{label}</Label>
    <TextArea {...({ name, error, valid, className, ...rest })} />
  </Field>
));

export const Select: FC<ISelect> = withTheme((
  {
    name,
    error = null,
    valid = null,
    className = "",
    options = [],
    initialField = "SelectField an option",
    styles,
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
    {options.map((option: IOption) =>
      <option
        key={option.value} value={option.value}
      >{option.name}</option>
    )}
  </select>
);

export const SelectField: FC<ISelect> = withTheme((
  {
    label,
    name,
    error = null,
    valid = null,
    className = "",
    options = [],
    initialField = "SelectField an option",
    styles,
    ...rest
  }) => {
  return (
    <Field type='formField_select' error={error}>
      <Label htmlFor={name}>{label}</Label>
      <Select {...({ name, error, valid, className, options, initialField, ...rest })}/>
    </Field>
  );
});

export const SwitchField: FC<ISwitchField> = withTheme((
  {
    active = false,
    label,
    name,
    error,
    className = "",
    styles,
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
});
