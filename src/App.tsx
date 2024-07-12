import classNames from "classnames/bind";

import { AppProvider } from "./context/AppContext";
import InfoBar from "./components/InfoBar";
import MenuBar from "./components/MenuBar";
import Content from "./components/Content";
import TopBar from "./components/TopBar";
import styles from "./App.module.scss";

const cx = classNames.bind(styles);

function App() {
  return (
    <div className={cx("app-container")}>
      <AppProvider>
        <TopBar />
        <InfoBar />
        <MenuBar />
        <Content />
      </AppProvider>
    </div>
  );
}

export default App;
