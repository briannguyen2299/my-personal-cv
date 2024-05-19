import classNames from "classnames/bind";
import styles from "./TopBar.module.scss";

const cx = classNames.bind(styles);

function TopBar() {
  return <div className={cx("top-bar")}></div>;
}

export default TopBar;
