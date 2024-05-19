import classNames from "classnames/bind";
import styles from "./Section.module.scss";

const cx = classNames.bind(styles);

function Section({
  children,
  title,
  className,
}: {
  children: any;
  title: string;
  className: string;
}) {
  return (
    <div className={cx("container", className)}>
      <h1 className={cx("title")}>{title}</h1>
      {children}
    </div>
  );
}

export default Section;
