import MainNavigation from "./MainNavigation";

import classes from "./Layout.module.css";
import { useState } from "react";
import SideNavigation from "./SideNavigation";

function Layout(props) {
  const lightTheme = {
    "--background-color": "#fbfbfb",
    "--primary": "#e65600",
    "--text-color": "#161618",
    "--text-color-second": "#7d7d7d",
    "--btn-hover": "#e6e6e6",
  };

  const darkTheme = {
    "--background-color": "#161618",
    "--primary": "#e65600",
    "--text-color": "#ffffff",
    "--text-color-second": "#7d7d7d",
    "--btn-hover": "#313131",
  };
  const [isDarkMode, setIsDarkMode] = useState(false);
  const handler = {
    isDark: isDarkMode,
    setDark: setIsDarkMode,
  };
  const theme = isDarkMode ? darkTheme : lightTheme;
  return (
    <div style={theme} className={classes.body}>
      <div className={classes.layoutContainer}>
        <SideNavigation className={classes.sideNav} />
        <div>
          <MainNavigation handler={handler} className={classes.mainNav} />
          <main className={classes.main}>{props.children}</main>
        </div>
      </div>
    </div>
  );
}

export default Layout;
