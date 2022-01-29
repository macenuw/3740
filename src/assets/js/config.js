const config = {
  season: {
    options: ["Лето", "Зима", "Весна-Осень"],
    label: "Сезон",
  },
  size: {
    options: ["Норма", "Полу-Батал", "Батал", "Супер-Батал"],
    label: "Размер",
    isArray: true,
  },
  gamma: {
    options: ["Однотонные", "Цветные"],
    label: "Палитра",
  },
  model: {
    options: ["8-3", "148-3"],
    label: "Популярные Модели",
  },
};
export default config;
