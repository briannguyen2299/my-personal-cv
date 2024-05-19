import classNames from "classnames/bind";
import styles from "./Section.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

const cx = classNames.bind(styles);

export default function Section({
  title,
  icon,
  id,
  children,
}: {
  title: string;
  icon: IconDefinition;
  id: string;
  children: any;
}) {
  return (
    <div id={id} className={cx("section-container")}>
      <div className={cx("title")}>
        <div className={cx("icon")}>
          <FontAwesomeIcon icon={icon} />
        </div>
        <h1>{title}</h1>
      </div>
      {children}
    </div>
  );
}
