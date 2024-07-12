import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { useTranslation } from "react-i18next";

import styles from "./Section.module.scss";

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
  children?: React.ReactNode;
}) {
  const { t } = useTranslation("content");
  return (
    <div id={id} className={cx("section-container")}>
      <div className={cx("title")}>
        <div className={cx("icon")}>
          <FontAwesomeIcon icon={icon} />
        </div>
        <h1>{t(title, title)}</h1>
      </div>
      {children}
    </div>
  );
}
