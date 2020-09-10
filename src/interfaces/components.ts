import { ButtonHTMLAttributes, HTMLProps } from 'react'

export interface ITagged extends HTMLProps<any> {
  tag?: string;
}

export interface IColumn extends ITagged {
  columnClass?: string;
  pushClass?: string;
}

export interface ITable extends HTMLProps<any> {
  headerRows?: JSX.Element[][];
  bodyRows?:JSX.Element[][];
}

export interface IPicture extends HTMLProps<any> {
  sources: ISource[];
}

export interface ISource {
  srcSet: string;
  media: string;
}

export interface IButton extends ButtonHTMLAttributes<any>  {
  iconLeft?: SVGElement | JSX.Element
  iconRight?: SVGElement | JSX.Element
}

export interface IRadioButton extends ButtonHTMLAttributes<any>  {
  checked: boolean
}

export interface ILinkButton extends IButton  {
  to: string
}

export interface IField extends HTMLProps<any>, IFormError  {}

export interface IInput extends HTMLProps<any>, IFormError, IFormValid  {}

export interface ITextArea extends HTMLProps<any>, IFormError, IFormValid  {}

export interface ISelect extends HTMLProps<any>, IFormError, IFormValid  {
  options: IOption[];
  initialField: string;
}

export interface IFormError {
  error?: string | null;
}

export interface IFormValid {
  valid?: string | null;
}

export interface ISwitchField extends ButtonHTMLAttributes<any>, IFormError {
  label: string;
  onBlurHandler: (value: boolean) => void;
  onChangeHandler: (name: string | undefined, value: boolean) => void;
}

export interface ISwitch extends ButtonHTMLAttributes<any>, IFormError {
  value: string | number | boolean | string[];
  onBlurHandler: (value: boolean) => void;
  onChangeHandler: (name: string | undefined, value: boolean) => void;
}

export interface IOption {
  name: string;
  value: any;
}
