import React, { FC, HTMLProps } from "react";

import { IColumn, ITable, ITagged } from "../interfaces/components";
import { withTheme } from "../context/theme-context";

export const Container: FC<ITagged> = withTheme(({ tag = "div", children, className = "", styles, ...rest }) => {
  const Tag: any = `${tag}`;
  return (
    <Tag
      className={`${styles.container} ${className}`}
      {...rest}
    >{children}</Tag>);
});

export const ContainerFullWidth: FC<HTMLProps<any>> = withTheme(({ children, className = "", styles, ...rest }) => {
  return (
    <Container
      className={`${styles.container_fullWidth} ${className}`}
      {...rest}
    >{children}</Container>);
});

export const Row: FC<ITagged> = withTheme(({ tag = "div", children, className = "", styles, ...rest }) => {
  const Tag: any = `${tag}`;
  return (
    <Tag className={`${styles.row} ${className}`} {...rest}>{children}</Tag>);
});

export const Column: FC<IColumn> = withTheme(({ columnClass, pushClass = "", tag = "div", className = "", children, styles, ...rest }) => {
  const Tag: any = `${tag}`;
  if(!columnClass) columnClass = styles.col12
  const classes = [styles.column, columnClass, pushClass, className];
  return (
    <Tag className={classes.join(" ")} {...rest}>
      {children}
    </Tag>
  );
});

export const Panel: FC<ITagged> = withTheme(({ tag = "div", children, className = "", styles, ...rest }) => {
  const Tag: any = `${tag}`;
  return (
    <Tag className={`${styles.panel} ${className}`} {...rest}>
      {children}
    </Tag>
  );
});

function getRows(bodyRows: JSX.Element[][]) {
  return bodyRows.map(
    (row, index) =>
      <tr key={index}>
        {row.map((data, index) =>
          <td key={index}>{data}</td>)}
      </tr>
  );
}

function getHeaders(headerRows: JSX.Element[][]) {
  return <tr>{headerRows.map((header, index) =>
    <th key={index}>{header}</th>)}</tr>;
}

export const Table: FC<ITable> = withTheme(({ headerRows = [], bodyRows = [], className = "", styles, ...rest }) =>
  <table className={`table ${className}`}  {...rest}>
    <thead>
    {getHeaders(headerRows)}
    </thead>
    <tbody>
    {getRows(bodyRows)};
    </tbody>
  </table>
);
