import classNames from "classnames/bind";
import styles from "./Footer.module.scss";

const cx = classNames.bind(styles);

function Footer() {
  return (
    <div className={cx("footer-container")}>
      <div className={cx("subcontainer")}>
        <span className={cx("left-section")}>
          {"© 2024 All Rights Reserved"}
        </span>
        <span className={cx("right-section")}>
          {"nguyenhuutrong.91.dd@gmail.com"}
        </span>
      </div>
    </div>
  );
}

export default Footer;
