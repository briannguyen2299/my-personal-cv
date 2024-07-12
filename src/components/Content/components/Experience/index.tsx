import classNames from "classnames/bind";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";

import Section from "../Section";
import styles from "./Experience.module.scss";
import { experience } from "../../../../assets/data";

const cx = classNames.bind(styles);

function Experience() {
  const { t } = useTranslation("content");
  return (
    <Section title="@EXPERIENCE" icon={faBriefcase} id="experience">
      <ul className={cx("exp-list")}>
        {experience.map((item) => (
          <li key={item.id} className={cx("experience-item")}>
            <div className={cx("period")}>{t(item.period, item.period)}</div>
            <div className={cx("info")}>
              <h1 className={cx("company")}>{t(item.company, item.company)}</h1>
              <p className={cx("position")}>
                {t(item.position, item.position)}
              </p>
              <ul className={cx("description-list")}>
                {item.description.map((item, index) => (
                  <li key={index} className={cx("description-item")}>
                    {t(item, item)}
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ul>
    </Section>
  );
}

export default Experience;
