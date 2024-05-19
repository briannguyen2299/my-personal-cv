import classNames from "classnames/bind";

import Section from "../Section";
import styles from "./Education.module.scss";
import { timeline } from "../../../../assets/data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faGraduationCap,
} from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);

function Education() {
  return (
    <Section title="Học vấn" icon={faGraduationCap} id="education">
      <div className={cx("subcontainer")}>
        <div className={cx("timeline")}>
          <div className={cx("timeline-subcontainer")}>
            <ul className={cx("year-list")}>
              <li className={cx("year")}>2017</li>
              <li className={cx("year")}>2023</li>
              <li className={cx("year")}>2024</li>
              <li className={cx("year")}>2025</li>
            </ul>
          </div>
        </div>
        <ul className={cx("event-list")}>
          {timeline.map((item) => (
            <li key={item.id} className={cx("event", `event-${item.id}`)}>
              <div className={cx("header")}>
                <div className={cx("title")}>
                  <h2>{item.name}</h2>
                </div>
                <div className={cx("period")}>
                  <span>{item.date}</span>
                </div>
              </div>
              <div className={cx("description")}>
                <p>{item.description}</p>
              </div>
              {item.id === 1 ? (
                <></>
              ) : (
                <div className={cx("link")}>
                  <a href={item.link} target="_blank">
                    <span>Xem tại đây</span>
                    <div className={cx("right-icon")}>
                      <FontAwesomeIcon icon={faChevronRight} />
                    </div>
                  </a>
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}

export default Education;
