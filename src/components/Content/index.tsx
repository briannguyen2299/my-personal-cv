import classNames from "classnames/bind";
import Header from "./components/Header";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import styles from "./Content.module.scss";

const cx = classNames.bind(styles);

const Content = () => {
  return (
    <div className={cx("content-container")}>
      <div className={cx("sub-container")}>
        <Header />
        <Projects />
        <Education />
        <Experience />
        <Skills />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default Content;
