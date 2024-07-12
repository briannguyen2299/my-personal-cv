import classNames from "classnames/bind";
import { useTranslation } from "react-i18next";

import styles from "./Header.module.scss";

const cx = classNames.bind(styles);

function Header() {
  const { t } = useTranslation("content");
  return (
    <div className={cx("header-container")}>
      <div className={cx("background-image")}></div>
      <div className={cx("content")}>
        <h1>{t("@INTRODUCTION")}</h1>
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
          <a href="#projects">{t("@START_NOW")}</a>
        </div>
      </div>
    </div>
  );
}

export default Header;
