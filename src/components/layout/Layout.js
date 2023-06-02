import MainNavigation from "./MainNavigation";

import classes from "./Layout.module.css";
import { useState } from "react";
import SideNavigation from "./SideNavigation";

function Layout(props) {
  const lightTheme = {
    "--background-color": "#fbfbfb",
    "--primary": "#FB4B4E",
    "--text-color": "#2A2B2E",
    "--text-color-second": "#3f4043",
    "--btn-hover": "#e2e2e2",
    "--star-orange": "#ffb733",
    "--star-orange-darker": "#ffa500",
  };

  const darkTheme = {
    "--background-color": "#161618",
    "--primary": "#FB4B4E",
    "--text-color": "#fbfbfb",
    "--text-color-second": "#7d7d7d",
    "--btn-hover": "#313131",
    "--star-orange": "#ffb733",
    "--star-orange-darker": "#ffa500",
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
