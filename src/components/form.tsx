import React, { FC, HTMLProps } from 'react'
import styles from '@orderandchaos/react-styles/dist/styles.module.css'

import { IField, IFormError, IInput, ISelect, ISwitch, ITextArea } from '../interfaces/components'

const Label: FC<HTMLProps<any>> = ({ label, htmlFor }) =>
  <label
    htmlFor={htmlFor} className={styles.label_text}
  >{label}</label>

export const FormError: FC<IFormError> = ({ error }) => error ?
  <p className={styles.c_error}>{error}</p> : null

export const Field: FC<IField> = ({ className, type, children, error }) => (
  <div className={`${styles.formField}, ${type}, ${className}`}>
    {children}
    <FormError error={error}/>
  </div>
)

export const Input: FC<IInput> = (
  {
    label,
    name,
    type = 'text',
    error = null,
    valid = null,
    className = '',
    ...props
  }) => {
  return (
    <Field type={type} error={error}>
      <Label label={label} htmlFor={name}/>
      <input
        {...props}
        id={name}
        name={name}
        type={type}
        className={`input ${error ? styles.input_error : null}, ${valid
          ? styles.input_valid
          : ''}, ${className}`}
      />
    </Field>
  )
}

export const TextArea: FC<ITextArea> = (
  {
    label,
    name,
    error = null,
    valid = null,
    className = '',
    ...props
  }) => (
  <Field type='formField--textArea' error={error}>
    <Label label={label} htmlFor={name}/>
    <textarea
      {...props}
      id={name}
      name={name}
      className={`input_textArea ${error
        ? styles.input_error
        : ''} ${valid ? styles.input_valid : null} ${className}`}
    />
  </Field>
)

export const Select: FC<ISelect> = (
  {
    label,
    name,
    error = null,
    valid = null,
    className = '',
    options = [],
    initialField = 'Select an option',
    ...props
  }) => {
  return (
    <Field type='formField_select' error={error}>
      <Label label={label} htmlFor={name}/>
      <select
        {...props}
        id={name}
        name={name}
        className={`input_select ${error
          ? styles.input_error
          : ''} ${className}`}
      >
        <option value="">{initialField}</option>
        {options.map((option) =>
          <option
            key={option.value} value={option.value}
          >{option.name}</option>
        )}
      </select>
    </Field>
  )
}

export const Switch: FC<ISwitch> = (
  {
    value = false,
    label,
    name,
    error,
    onChangeHandler,
    onBlurHandler,
    className = '',
    ...rest
  }) => {
  const classes = `${styles.button_switch} ${className} ${value
    ? styles.button_switch_on
    : ''}`
  const title = value ? 'On' : 'Off'
  return (
    <Field type='formField_switch' error={error}>
      <Label label={label} htmlFor={name}/>
      <button
        id={name}
        title={title}
        onBlur={() => {
          onBlurHandler(true)
        }}
        onClick={() => {
          onChangeHandler(name, !value)
        }}
        className={classes}
        {...rest}
      />
    </Field>
  )
}
