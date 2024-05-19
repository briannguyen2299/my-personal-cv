import {
  faCss3Alt,
  faHtml5,
  faJs,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
import {
  faGears,
  faScrewdriverWrench,
} from "@fortawesome/free-solid-svg-icons";

const skillsDetail = [
  {
    id: 1,
    name: "HTML",
    description: [
      "HTML Text: heading, paragraph, quotation, citation,... ",
      "HTML Semantic",
      "HTML Links",
      "HTML Table",
      "HTML Forms",
      "HTML Media",
      "HTML Graphics",
    ],
    icon: faHtml5,
  },
  {
    id: 2,
    name: "CSS",
    description: [
      "CSS Selectors",
      "CSS Box model",
      "CSS Styling Text",
      "CSS Styling Image",
      "CSS Transforms & Animation",
      "CSS Layout: Flexbox, Grids, Floats, Positioning, multiple-column",
      "CSS Media Queries & Responsive",
    ],
    icon: faCss3Alt,
  },
  {
    id: 3,
    name: "JavaScript",
    description: [
      "JS Syntax: variables, operators, expressions,..",
      "Data types: string, number, boolean, array, object,..",
      "Loop & Condition",
      "Function",
      "Events",
      "Objects",
      "Classes",
      "Asynchronous",
      "Web APIs",
      "Graphics",
      "HTML DOM",
    ],
    icon: faJs,
  },
  {
    id: 4,
    name: "ReactJS",
    description: [
      "React Components",
      "State Hooks: useState, useReducer",
      "Ref Hooks: useRef, useImperativeHandle",
      "Context Hooks: useContext",
      "Effect Hooks: useEffect, useLayoutEffect, useInsertionEffect",
      "Performance Hooks: useMemo, useCallback, useTransition, useDeferredValue",
      "Custom Hooks",
      "React Router",
      "CSS Module",
    ],
    icon: faReact,
  },
  {
    id: 5,
    name: "Libraries & Frameworks",
    description: [
      "SASS",
      "TypeScript",
      "Tailwind CSS",
      "React Spring",
      "React Slick",
      "Vite",
      "classNames",
      "Tippy.js",
    ],
    icon: faGears,
  },
  {
    id: 6,
    name: "Tools & APIs",
    description: [
      "Git, GitHub",
      "Google Fonts",
      "JSONPlaceholder",
      "NASA APIs",
    ],
    icon: faScrewdriverWrench,
  },
];
export default skillsDetail;
