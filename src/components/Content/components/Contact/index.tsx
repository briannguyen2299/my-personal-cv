import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAt, faInfo, faUser } from "@fortawesome/free-solid-svg-icons";

import Section from "../Section";
import styles from "./Contact.module.scss";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

const cx = classNames.bind(styles);

function Contact() {
  return (
    <Section title="Thông tin liên hệ" icon={faInfo} id="contact">
      <form className={cx("form")} action="" method="post">
        <div className={cx("input-container")}>
          <label className={cx("icon")} htmlFor="name-field">
            <FontAwesomeIcon icon={faUser} />
          </label>
          <input type="text" name="name" id="name-field" placeholder="Họ tên" />
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
            placeholder="Tin nhắn"
          ></textarea>
        </div>
        <div className={cx("submit-button")}>
          <button type="submit">Gửi</button>
        </div>
      </form>
    </Section>
  );
}

export default Contact;
