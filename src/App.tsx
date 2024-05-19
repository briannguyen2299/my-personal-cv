import classNames from "classnames/bind";

import InfoBar from "./components/InfoBar";
import MenuBar from "./components/MenuBar";
import Content from "./components/Content";
import TopBar from "./components/TopBar";
import styles from "./App.module.scss";

const cx = classNames.bind(styles);

function App() {
  return (
    <div className={cx("app-container")}>
      <TopBar />
      <InfoBar />
      <MenuBar />
      <Content />
    </div>
  );
}

export default App;
