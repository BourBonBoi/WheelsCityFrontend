const navItems = [
  {
    title: "Главная",
    to: "/",
  },
  {
    title: "Обновления",
    to: "/updates",
  },
  {
    title: "Новости",
    to: "/allNews",
    /*
    subItems: [
      { title: "Подвкладка 1", to: "/allNews/sub1" },
      { title: "Подвкладка 2", to: "/allNews/sub2" },
      { title: "Подвкладка 3", to: "/allNews/sub3" },
    ],  
    */
  },
  {
    title: "Разное",
    to: "/",
    subItems: [
      { title: "Обучение", to: "/tutorial" },
      { title: "Документация", to: "/documentation" },
    ],
  },
];

export default navItems;
