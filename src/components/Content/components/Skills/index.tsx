import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareCheck } from "@fortawesome/free-regular-svg-icons";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import Slider from "react-slick";
import "slick-carousel/slick/slick.scss";
import "slick-carousel/slick/slick-theme.scss";

import Section from "../Section";
import styles from "./Skills.module.scss";
import "./carousel-remake.scss";
import { skillsDetail } from "../../../../assets/data";

const cx = classNames.bind(styles);

function Skills() {
  const settings = {
    className: "center",
    dots: true,
    centerMode: true,
    focusOnSelect: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerPadding: "0",
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          centerMode: false,
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          centerMode: false,
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <Section title="@SKILLS" icon={faCode} id="skills">
      <div className={cx("slider-container")}>
        <Slider {...settings}>
          {skillsDetail.map((skill) => (
            <div key={skill.id} className={cx("skill-item")}>
              <div className={cx("item-container")}>
                <div className={cx("header")}>
                  <div className={cx("icon-container")}>
                    <FontAwesomeIcon icon={skill.icon} />
                  </div>
                  <div className={cx("title")}>
                    <h1>{skill.name}</h1>
                  </div>
                </div>
                <ul className={cx("description")}>
                  {skill.description.map((item, index) => (
                    <li key={index} className={cx("description-item")}>
                      <div className={cx("stick-icon")}>
                        <FontAwesomeIcon icon={faSquareCheck} />
                      </div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </Section>
  );
}

export default Skills;
