import React, { useRef, useState, useLayoutEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

import classNames from "classnames/bind";
import styles from "./MenuBar.module.scss";
import { animated, useTrail, useSpring, a } from "@react-spring/web";
import ThemeToggle from "./ThemeToggle";

const cx = classNames.bind(styles);
const menuList = [
  {
    id: 1,
    title: "Trang chủ",
    link: "/",
  },
  {
    id: 2,
    title: "Dự án",
    link: "#projects",
  },
  {
    id: 3,
    title: "Học vấn",
    link: "#education",
  },
  {
    id: 4,
    title: "Kinh nghiệm",
    link: "#experience",
  },
  {
    id: 5,
    title: "Kỹ năng",
    link: "#skills",
  },
  {
    id: 6,
    title: "Liên hệ",
    link: "#contact",
  },
];

const Trail: React.FC<{ open: boolean; children: any }> = ({
  open,
  children,
}) => {
  const items = React.Children.toArray(children);
  const trail = useTrail(items.length, {
    config: {},
    opacity: open ? 1 : 0,
    x: open ? 0 : 100,
    from: { opacity: 0, x: 100 },
  });
  return (
    <>
      {trail.map((style, index) => (
        <a.li key={index} className={cx("menu-item")} style={style}>
          {items[index]}
        </a.li>
      ))}
    </>
  );
};

function MenuBar() {
  const [show, setShow] = useState(false);
  const refBar = useRef<HTMLDivElement>(null);
  const [effectMenuIcon, ctrlMenuIcon] = useSpring(() => ({}));

  const handleShowMenu = () => {
    if (!show) {
      refBar.current?.classList.add(cx("show"));
    } else {
      refBar.current?.classList.remove(cx("show"));
    }
    setShow(!show);
  };

  useLayoutEffect(() => {
    ctrlMenuIcon.start({
      from: { opacity: 0, scale: 0, rotate: 0 },
      to: [
        { opacity: 0.7, scale: 1.2, rotate: 360 },
        { opacity: 1, scale: 1, rotate: 360 },
      ],
    });
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
              <Trail open={show}>
                {menuList.map((item) => (
                  <a href={item.link} key={item.id}>
                    {item.title}
                  </a>
                ))}
                <ThemeToggle />
              </Trail>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default MenuBar;
