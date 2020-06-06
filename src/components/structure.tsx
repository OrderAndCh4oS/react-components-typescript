import React, { FC, HTMLProps } from 'react'
import * as styles from '@orderandchaos/react-styles/dist/styles.css'
import { IColumn, ITable, ITagged } from '../interfaces/components'

export const Container: FC<ITagged> = ({ tag = 'div', children, className = '', ...rest }) => {
  const Tag: any = `${tag}`
  return (
    <Tag
      className={`${styles.container} ${className}`}
      {...rest}
    >{children}</Tag>)
}

export const ContainerFullWidth: FC<HTMLProps<any>> = ({ children, className = '', ...rest }) => {
  return (
    <Container
      className={`${styles.container_fullWidth} ${className}`}
      {...rest}
    >{children}</Container>)
}

export const Row: FC<ITagged> = ({ tag = 'div', children, className = '', ...rest }) => {
  const Tag: any = `${tag}`
  return (
    <Tag className={`${styles.row} ${className}`} {...rest}>{children}</Tag>)
}

export const Column: FC<IColumn> = ({ columnClass = styles.col12, pushClass = '', tag = 'div', className = '', children, ...rest }) => {
  const Tag: any = `${tag}`
  const classes = `${styles.column} ${columnClass} ${pushClass} ${className}`
  return (
    <Tag className={classes} {...rest}>
      {children}
    </Tag>
  )
}

export const Panel: FC<ITagged> = ({ tag = 'div', children, className = '', ...rest }) => {
  const Tag: any = `${tag}`
  return (
    <Tag className={`${styles.panel} ${className}`} {...rest}>
      {children}
    </Tag>
  )
}

function getRows(rows: JSX.Element[][]) {
  return rows.map(
    (row, index) =>
      <tr key={index}>
        {row.map((data, index) =>
          <td key={index}>{data}</td>)}
      </tr>
  )
}

function getHeaders(headerRows: JSX.Element[][]) {
  return <tr>{headerRows.map((header, index) =>
    <th key={index}>{header}</th>)}</tr>
}

export const Table: FC<ITable> = ({ headerRows = [], rows = [], className = '', ...rest }) =>
  <table className={`table ${className}`}  {...rest}>
    <thead>
    {getHeaders(headerRows)}
    </thead>
    <tbody>
    {getRows(rows)};
    </tbody>
  </table>
