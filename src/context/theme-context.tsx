import React, { FC, useContext, useState } from "react";
import styles from "@orderandchaos/react-styles/dist/styles.module.css";

interface IThemeContext {
  theme: any,
}

const ThemeContext = React.createContext<IThemeContext>({ theme: styles });

interface IThemeProvider {
  theme?: any,
}

const ThemeProvider: FC<IThemeProvider> = (
  {
    theme: themeOverrides,
    children
  }) => {
  const [theme] = useState<any>({ ...styles, ...themeOverrides });
  return (
    <ThemeContext.Provider value={{ theme }}>
      {children}
    </ThemeContext.Provider>
  );
};

const withTheme = (Component: FC<any>) => (props: any) =>
  <ThemeContext.Consumer>
    {({ theme }): JSX.Element => <Component {...props} styles={theme}/>}
  </ThemeContext.Consumer>;


const useTheme = (): IThemeContext => useContext(ThemeContext);

export default useTheme;

export { ThemeProvider, ThemeContext, withTheme };
