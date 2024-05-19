import classNames from "classnames/bind";
import { v4 as uuidv4 } from "uuid";
import styles from "./SkillsList.module.scss";

type input = {
  title: string;
  level: number;
};

const cx = classNames.bind(styles);

function SkillsList(props: any) {
  return (
    <ul className={cx("skill-list")}>
      {props.data.map(({ title, level }: input) => {
        return (
          <li key={uuidv4()}>
            <div className={cx("heading")}>
              <span>{title}</span>
              <span>{`${level.toString()} %`}</span>
            </div>
            <div className={cx("skill-bar")}>
              <div className={cx("skillbar-container")}>
                <div
                  className={cx("skillbar-progress")}
                  style={{
                    width: `${level}%`,
                  }}
                ></div>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
}

export default SkillsList;
