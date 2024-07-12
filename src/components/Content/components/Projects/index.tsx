import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowUpRightFromSquare,
  faFlask,
} from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";

import styles from "./Projects.module.scss";
import { projects } from "../../../../assets/data";
import Section from "../Section";

const cx = classNames.bind(styles);

function Projects() {
  const { t } = useTranslation("content");

  return (
    <Section title="@PROJECTS" icon={faFlask} id="projects">
      <div>
        <ul className={cx("project-list")}>
          {projects.map((project) => {
            if (project.completed) {
              return (
                <li key={project.id} className={cx("project-item")}>
                  <figure>
                    <a href="">
                      <div className={cx("image-container")}>
                        <div className={cx("access-icon")}>
                          <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                        </div>
                        <div className={cx("image-overlay")}></div>
                        <img
                          src={project.image}
                          loading="lazy"
                          alt={project.name}
                        />
                      </div>
                    </a>
                    <div className={cx("content")}>
                      <figcaption className={cx("text")}>
                        <h2>{project.name}</h2>
                        <p>{t(project.description as never)}</p>
                      </figcaption>
                      <ul className={cx("tags-list")}>
                        {project.tags?.map((tag) => (
                          <li key={tag.id} className={cx("tag-item")}>
                            <span>{tag.title}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </figure>
                </li>
              );
            } else {
              return (
                <li key={project.id} className={cx("project-item")}>
                  <figure>
                    <div className={cx("image-container")}>
                      <span className={cx("coming-soon")}>Coming soon</span>
                    </div>
                    <div className={cx("content")}>
                      <figcaption>
                        <h2>{project.name}</h2>
                      </figcaption>
                    </div>
                  </figure>
                </li>
              );
            }
          })}
        </ul>
      </div>
    </Section>
  );
}

export default Projects;
