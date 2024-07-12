import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAt, faInfo, faUser } from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";

import Section from "../Section";
import styles from "./Contact.module.scss";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

const cx = classNames.bind(styles);

function Contact() {
  const { t } = useTranslation("content");
  return (
    <Section title="@CONTACT" icon={faInfo} id="contact">
      <form className={cx("form")} action="" method="post">
        <div className={cx("input-container")}>
          <label className={cx("icon")} htmlFor="name-field">
            <FontAwesomeIcon icon={faUser} />
          </label>
          <input
            type="text"
            name="name"
            id="name-field"
            placeholder={t("@NAME")}
          />
        </div>
        <div className={cx("input-container")}>
          <label className={cx("icon")} htmlFor="email-field">
            <FontAwesomeIcon icon={faAt} />
          </label>
          <input
            type="email"
            name="email"
            id="email-field"
            placeholder="Email"
          />
        </div>
        <div className={cx("input-container")}>
          <label className={cx("icon", "message-icon")} htmlFor="message-field">
            <FontAwesomeIcon icon={faEnvelope} />
          </label>
          <textarea
            name="message"
            id="message-field"
            cols={40}
            rows={10}
            placeholder={t("@MESSAGE")}
          ></textarea>
        </div>
        <div className={cx("submit-button")}>
          <button type="submit">{t("@SEND")}</button>
        </div>
      </form>
    </Section>
  );
}

export default Contact;
