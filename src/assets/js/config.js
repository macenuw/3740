const config = {
  season: {
    options: ["Лето", "Зима", "Весна-Осень"],
    label: "Сезон",
  },
  size: {
    options: ["s-m", "m-l", "l-xl", "xl-xxl"],
    label: "Размер",
    isArray: true,
  },
  gamma: {
    options: ["mono", "color"],
    label: "Палитра",
  },
  model: {
    options: ["8-3", "148-3"],
    label: "Популярные Модели",
  },
};
export default config;
