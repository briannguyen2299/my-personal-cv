import classNames from "classnames/bind";
import styles from "./Header.module.scss";

const cx = classNames.bind(styles);

function Header() {
  return (
    <div className={cx("header-container")}>
      <div className={cx("background-image")}></div>
      <div className={cx("content")}>
        <h1>Khám phá không gian sáng tạo của tôi!</h1>
        <div className={cx("text-dynamic")}>
          {"<"}
          <code>{"code"}</code>
          {"> I build "}
          <span>{"website interfaces."}</span>
          {" </"}
          <code>{"code"}</code>
          {">"}
        </div>
        <div className={cx("explore-btn")}>
          <a href="#projects">Bắt đầu ngay</a>
        </div>
      </div>
    </div>
  );
}

export default Header;
