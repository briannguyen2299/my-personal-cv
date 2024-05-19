import classNames from "classnames/bind";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Section from "../Section";
import styles from "./Experience.module.scss";
import { experience } from "../../../../assets/data";

const cx = classNames.bind(styles);

function Experience() {
  return (
    <Section title="Kinh nghiệm làm việc" icon={faBriefcase} id="experience">
      <ul className={cx("exp-list")}>
        {experience.map((item) => (
          <li key={item.id} className={cx("experience-item")}>
            <div className={cx("period")}>{item.period}</div>
            <div className={cx("info")}>
              <h1 className={cx("company")}>{item.company}</h1>
              <p className={cx("position")}>{item.position}</p>
              <ul className={cx("description-list")}>
                {item.description.map((item, index) => (
                  <li key={index} className={cx("description-item")}>
                    {item}
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
