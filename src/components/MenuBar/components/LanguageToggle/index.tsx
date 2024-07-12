import { useContext, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLanguage } from "@fortawesome/free-solid-svg-icons";
import {
  useFloating,
  autoUpdate,
  offset,
  flip,
  shift,
  useClick,
  useDismiss,
  useRole,
  useInteractions,
  FloatingFocusManager,
} from "@floating-ui/react";
import { useTranslation } from "react-i18next";

import { LanguageContext } from "../../../../context/AppContext";
import classNames from "classnames/bind";
import styles from "./LanguageToggle.module.scss";

const cx = classNames.bind(styles);

export default function LanguageToggle() {
  const [isShow, setIsShow] = useState(false);
  const { setLanguage } = useContext(LanguageContext);
  const { t } = useTranslation("menuBar");
  const { refs, floatingStyles, context } = useFloating({
    open: isShow,
    onOpenChange: setIsShow,
    middleware: [offset(10), flip(), shift()],
    whileElementsMounted: autoUpdate,
  });

  const click = useClick(context);
  const dismiss = useDismiss(context);
  const role = useRole(context);

  const { getReferenceProps, getFloatingProps } = useInteractions([
    click,
    dismiss,
    role,
  ]);

  return (
    <div
      className={cx("language-change")}
      ref={refs.setReference}
      {...getReferenceProps()}
    >
      <div className={cx("change-btn")}>
        <span className={cx("language-text")}>{t("@LANGUAGE")}</span>
        <div className={cx("language-icon")}>
          <FontAwesomeIcon icon={faLanguage} />
        </div>
      </div>
      {isShow && (
        <FloatingFocusManager context={context} modal={false}>
          <div
            ref={refs.setFloating}
            style={{
              ...floatingStyles,
              width: "100%",
              outline: 0,
            }}
            {...getFloatingProps()}
          >
            <ul className={cx("select-list")}>
              <li
                className={cx("select-item")}
                onClick={() => {
                  setLanguage("en");
                }}
              >
                {t("@ENGLISH")}
              </li>
              <li
                className={cx("select-item")}
                onClick={() => {
                  setLanguage("vi");
                }}
              >
                {t("@VIETNAMESE")}
              </li>
            </ul>
          </div>
        </FloatingFocusManager>
      )}
    </div>
  );
}
