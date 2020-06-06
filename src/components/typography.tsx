import React, { FC, HTMLProps } from 'react'
import * as styles from '@orderandchaos/react-styles/dist/styles.css'
import { ITagged } from '../interfaces/components'


export const Title: FC<ITagged> = ({ tag = 'h1', className = '', children, ...rest }): JSX.Element => {
  const Tag: any = `${tag}`
  return <Tag className={`title ${className}`} {...rest}>{children}</Tag>
}

export const Pretitle: FC<HTMLProps<any>> = ({ className = '', children, ...rest }) =>
  <p className={`${styles.pretitle} ${className}`} {...rest}>{children}</p>

export const IntroText: FC<HTMLProps<any>> = ({ className = '', children, ...rest }) =>
  <p className={`${styles.text_intro} ${className}`} {...rest}>{children}</p>

export const Text: FC<HTMLProps<any>> = ({ className = '', children, ...rest }) =>
  <p className={`${styles.text} ${className}`} {...rest}>{children}</p>

export const BlockQuote: FC<ITagged> = ({ tag = 'blockquote', className = '', children, ...rest }) => {
  const Tag: any = `${tag}`
  return (
    <Tag className={`${styles.blockquote} ${className}`} {...rest}>
      {children}
    </Tag>
  )
}

export const Citation: FC<HTMLProps<any>> = ({ className = '', children, ...rest }) =>
  <span className={`${styles.citation} ${className}`} {...rest}>
    {children}
  </span>

