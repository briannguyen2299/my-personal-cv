import { useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendar,
  faPerson,
  faPhone,
  faEnvelope,
  faLocationDot,
  faGlobe,
  faCheck,
  faDownload,
  faEllipsisVertical,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faLinkedin,
  faGithub,
  faSkype,
  faViber,
} from "@fortawesome/free-brands-svg-icons";
import classNames from "classnames/bind";
import { v4 as uuidv4 } from "uuid";

import Section from "./components/Section";
import { personalInfo, skills, tools } from "../../assets/data/index";
import { avatar, TargetIcon } from "../../assets/images/index.ts";
import SkillsList from "./components/SkillsList";
import styles from "./InfoBar.module.scss";

const cx = classNames.bind(styles);

function InfoBar() {
  const [show, setShow] = useState(false);
  const refBar = useRef<HTMLDivElement>(null);

  const personalInfoItems = [
    {
      title: personalInfo.birthday,
      icon: <FontAwesomeIcon icon={faCalendar} />,
    },
    {
      title: personalInfo.gender,
      icon: <FontAwesomeIcon icon={faPerson} />,
    },
    {
      title: personalInfo.phone,
      icon: <FontAwesomeIcon icon={faPhone} />,
    },
    {
      title: personalInfo.email,
      icon: <FontAwesomeIcon icon={faEnvelope} />,
    },
    {
      title: personalInfo.address,
      icon: <FontAwesomeIcon icon={faLocationDot} />,
    },
    {
      title: personalInfo.website,
      icon: <FontAwesomeIcon icon={faGlobe} />,
    },
  ];

  const handleShowMenu = () => {
    if (!show) {
      refBar.current?.classList.add(cx("show"));
    } else {
      refBar.current?.classList.remove(cx("show"));
    }
    setShow(!show);
  };

  return (
    <div className={cx("info-bar-container")} ref={refBar}>
      <div className={cx("subcontainer")}>
        <header className={cx("header")}>
          <div className={cx("info-bar-btn")} onClick={handleShowMenu}>
            <FontAwesomeIcon icon={faEllipsisVertical} />
          </div>
          <div className={cx("avatar-container")}>
            <img src={avatar} />
          </div>
          <h5 className={cx("name")}>{personalInfo.name}</h5>
          <div className={cx("description")}>
            <p>{personalInfo.job}</p>
          </div>
        </header>

        <div className={cx("scroll-bar")}>
          <Section title="THÔNG TIN CÁ NHÂN" className={cx("personal-info")}>
            <ul>
              {personalInfoItems.map((item) => (
                <li key={uuidv4()}>
                  <div className={cx("info-item-icon")}>{item.icon}</div>
                  <span>{item.title}</span>
                </li>
              ))}
            </ul>
          </Section>

          <Section
            title="MỤC TIÊU NGHỀ NGHIỆP"
            className={cx("objective-career")}
          >
            {personalInfo.objective.map((objective) => (
              <div key={uuidv4()} className={cx("objective-group")}>
                <h2>{objective.type}</h2>
                <ul>
                  {objective.content.map((item) => (
                    <li key={uuidv4()}>
                      <div className={cx("target-icon")}>
                        <TargetIcon />
                      </div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </Section>

          <Section title="KỸ NĂNG" className={cx("skills-container")}>
            <SkillsList data={skills} />
          </Section>

          <Section title="CÔNG CỤ" className={cx("tools-container")}>
            <ul>
              {tools.map((tool) => (
                <li key={uuidv4()}>
                  <FontAwesomeIcon
                    icon={faCheck}
                    className={cx("check-icon")}
                  />
                  {tool}
                </li>
              ))}
            </ul>
          </Section>

          <div className={cx("download-cv")}>
            <a href="https://drive.google.com/" target="_blank">
              DOWNLOAD CV
              <FontAwesomeIcon
                icon={faDownload}
                className={cx("download-icon")}
              />
            </a>
          </div>
        </div>

        <footer className={cx("footer")}>
          <a href="https://www.facebook.com/trongnguyenhuu99/" target="_blank">
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a
            href="https://www.linkedin.com/in/trong-nguyen-huu-brian/"
            target="_blank"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a href="https://github.com/briannguyen2299" target="_blank">
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a href="https://join.skype.com/invite/rBIDgVPArkBO" target="_blank">
            <FontAwesomeIcon icon={faSkype} />
          </a>
          <a href="" target="_blank">
            <FontAwesomeIcon icon={faViber} />
          </a>
        </footer>
      </div>
    </div>
  );
}

export default InfoBar;
