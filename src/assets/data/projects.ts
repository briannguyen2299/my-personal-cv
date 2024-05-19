import { todoApp, eCommerce, restaurant } from "../images/project-image";

const projects = [
  {
    id: 1,
    name: "To-do App",
    description:
      "Làm quen với React thông qua việc sử dụng các Hooks như useState, useRef,...",
    image: todoApp,
    tags: [
      { id: 1, title: "React" },
      { id: 2, title: "Vites" },
      { id: 3, title: "Sass" },
      { id: 4, title: "classNames" },
    ],
    completed: true,
  },

  {
    id: 2,
    name: "E-commerce Shopping",
    description: "Xây dựng giao diện website bán hàng cho doanh nghiệp.",
    image: eCommerce,
    tags: [
      { id: 1, title: "React" },
      { id: 2, title: "Vites" },
      { id: 3, title: "Sass" },
      { id: 4, title: "classNames" },
    ],
    completed: true,
  },

  {
    id: 3,
    name: "Restaurant Menu",
    description: "Website với giao diện làm nổi bật thực đơn của nhà hàng.",
    image: restaurant,
    tags: [
      { id: 1, title: "React" },
      { id: 2, title: "Vites" },
      { id: 3, title: "Sass" },
      { id: 4, title: "classNames" },
    ],
    completed: true,
  },

  {
    id: 4,
    name: "Landing Page",
    completed: false,
  },

  {
    id: 5,
    name: "Tiktok Clone",
    completed: false,
  },

  {
    id: 6,
    name: "Pokemon Card",
    completed: false,
  },
];

export default projects;
