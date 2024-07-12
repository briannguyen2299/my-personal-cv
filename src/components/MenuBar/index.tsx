import React, { useRef, useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { animated, useTrail, useSpring, a } from "@react-spring/web";
import { useTranslation } from "react-i18next";

import classNames from "classnames/bind";
import styles from "./MenuBar.module.scss";
import ThemeToggle from "./components/ThemeToggle";
import LanguageToggle from "./components/LanguageToggle";
import menuList from "../../assets/data/menu-list";

const cx = classNames.bind(styles);

const Trail: React.FC<{
  open: boolean;
  children?: React.ReactNode;
  animation: string;
}> = ({ open, children, animation }) => {
  const items = React.Children.toArray(children);
  let trail;
  const floatLeftAnimation = useTrail(items.length, {
    config: {},
    opacity: open ? 1 : 0,
    x: open ? 0 : 100,
    from: { opacity: 0, x: 100 },
  });
  const floatDownAnimation = useTrail(items.length, {
    config: {},
    opacity: open ? 1 : 0,
    y: open ? 0 : -50,
    from: { opacity: 0, y: 0 },
  });
  switch (animation) {
    case "float-left":
      trail = floatLeftAnimation;
      break;
    case "float-down":
      trail = floatDownAnimation;
      break;
    default:
      console.log(`Sorry, we are out of ${animation}.`);
  }

  return (
    <>
      {trail?.map((style, index) => (
        <a.li key={index} className={cx("menu-item")} style={style}>
          {items[index]}
        </a.li>
      ))}
    </>
  );
};

function MenuBar() {
  const [show, setShow] = useState(false);
  const refBar = useRef<null | HTMLDivElement>(null);
  const [effectMenuIcon, ctrlMenuIcon] = useSpring(() => ({}));
  const { t } = useTranslation("menuBar");

  const handleShowMenu = () => {
    if (!show) {
      refBar.current?.classList.add(cx("show"));
    } else {
      refBar.current?.classList.remove(cx("show"));
    }
    setShow(!show);
  };

  useEffect(() => {
    ctrlMenuIcon.start({
      from: { opacity: 0, scale: 0, rotate: 0 },
      to: [
        { opacity: 0.7, scale: 1.2, rotate: 360 },
        { opacity: 1, scale: 1, rotate: 360 },
      ],
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [show]);

  return (
    <div className={cx("fixed-container")} ref={refBar}>
      <div className={cx("menu-bar-container")}>
        <div className={cx("menu-bar-frame")}>
          <header className={cx("header")}>
            <div className={cx("icon-container")} onClick={handleShowMenu}>
              <animated.span
                className={cx("icon-subcontainer")}
                style={effectMenuIcon}
              >
                {!show ? (
                  <FontAwesomeIcon icon={faBars} />
                ) : (
                  <FontAwesomeIcon icon={faXmark} />
                )}
              </animated.span>
            </div>
          </header>
          <nav className={cx("content")}>
            <ul className={cx("menu-list")}>
              <Trail open={show} animation="float-left">
                {menuList.map((item) => (
                  <a href={item.link} key={item.id}>
                    {t(item.title, item.title)}
                  </a>
                ))}
              </Trail>
            </ul>
            <ul className={cx("options")}>
              <Trail open={show} animation="float-down">
                <ThemeToggle />
                <LanguageToggle />
              </Trail>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default MenuBar;
