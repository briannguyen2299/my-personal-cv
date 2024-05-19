import { useState, useLayoutEffect, useEffect } from "react";
import { animated, useSpring } from "@react-spring/web";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";

import styles from "./MenuBar.module.scss";
const cx = classNames.bind(styles);

function ThemeToggle() {
  const [theme, setTheme] = useState("dark");
  const [effectTitle, ctrlTitle] = useSpring(() => ({}));
  const [effectIcon, ctrlIcon] = useSpring(() => ({}));

  const handleThemeChange = () => {
    if (theme !== "dark") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  useEffect(() => {
    if (theme !== "dark") {
      document.body.classList.add("light-theme");
    } else {
      document.body.classList.remove("light-theme");
    }
  }, [theme]);

  useLayoutEffect(() => {
    ctrlTitle.start({
      from: { opacity: 0 },
      to: { opacity: 1 },
      config: {
        duration: 800,
      },
    });
    ctrlIcon.start({
      from: { opacity: 0, scale: 0 },
      to: { opacity: 1, scale: 1 },
    });
  }, [theme]);

  return (
    <div className={cx("mode-toggle")} onClick={handleThemeChange}>
      <animated.span style={effectTitle}>{theme}</animated.span>
      <animated.div className={cx("toggle-icon")} style={effectIcon}>
        {theme !== "dark" ? (
          <FontAwesomeIcon icon={faSun} />
        ) : (
          <FontAwesomeIcon icon={faMoon} />
        )}
      </animated.div>
    </div>
  );
}

export default ThemeToggle;
