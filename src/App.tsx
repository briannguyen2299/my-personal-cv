import { createContext } from "react";
import classNames from "classnames/bind";

import InfoBar from "./components/InfoBar";
import MenuBar from "./components/MenuBar";
import Content from "./components/Content";
import TopBar from "./components/TopBar";
import styles from "./App.module.scss";

const cx = classNames.bind(styles);

const ThemeContext = createContext(null);

function App() {
  return (
    <div className={cx("app-container")}>
      <ThemeContext.Provider value="dark">
        <TopBar />
        <InfoBar />
        <MenuBar />
        <Content />
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
