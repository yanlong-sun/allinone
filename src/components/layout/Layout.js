import MainNavigation from "./MainNavigation";
import classes from "./Layout.module.css";
import { useRef, useState } from "react";
import SideNavigation from "./SideNavigation";
import TotopButton from "../other/ToTopButton";

function Layout(props) {
  const lightTheme = {
    "--background-color": "#fbfbfb",
    "--primary": "#FB4B4E",
    "--second": "#fc6f71",
    "--text-color": "#2A2B2E",
    "--text-color-second": "#3f4043",
    "--btn-hover": "#e2e2e2",
    "--star-orange": "#ffb733",
    "--star-orange-darker": "#ffa500",
  };

  const darkTheme = {
    "--background-color": "#161618",
    "--primary": "#FB4B4E",
    "--second": "#fc6f71",
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
          <TotopButton />
        </div>
      </div>
    </div>
  );
}

export default Layout;
