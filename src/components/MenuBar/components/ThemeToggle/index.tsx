import { useContext, useEffect } from "react";
import { animated, useSpring } from "@react-spring/web";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";

import styles from "./ThemeToggle.module.scss";
import { ThemeContext } from "../../../../context/AppContext";

const cx = classNames.bind(styles);

function ThemeToggle() {
  const { theme, setTheme } = useContext(ThemeContext);
  const [effectTitle, ctrlTitle] = useSpring(() => ({}));
  const [effectIcon, ctrlIcon] = useSpring(() => ({}));
  const { t } = useTranslation("menuBar");

  const handleThemeChange = () => {
    if (theme !== "dark") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  useEffect(() => {
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [theme]);

  return (
    <div className={cx("mode-toggle")} onClick={handleThemeChange}>
      <animated.span style={effectTitle}>{t(theme, theme)}</animated.span>
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
