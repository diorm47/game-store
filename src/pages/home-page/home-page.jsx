import React from "react";
import "./home-page.css";
import { GameItem } from "../../components/game-item/game-item";

const games = [
  {
    image: "/game-covers/forza_5.jpeg",
    title: "Forza Horizon 5",
    genres: ["Гонка", "Симулятор", "Открытый мир"],
    price: 19.5,
    video: "https://www.youtube.com/embed/FYH9n37B7Yw",
    id: 1,
    description:
      "Вас ждет бесконечный калейдоскоп приключений Horizon! Совершайте захватывающие путешествия по невероятно красивому и самобытному миру Мексики за рулем величайших автомобилей в истории. Начните свое приключение в Horizon уже сегодня, добавив игру в свой список желаний!",
  },
  {
    image: "/game-covers/battlefield_2042.jpg",
    title: "Battlefield 2042",
    genres: ["Действие", "Стрелок", "Война"],
    video: "https://www.youtube.com/embed/ASzOzrB-a9E",
    price: 21.8,
    id: 2,
    description:
      "Battlefield™ 2042 — шутер от первого лица, возвращающий серию к легендарным масштабным сражениям. В хаотичном будущем адаптируйтесь и процветайте на постоянно меняющемся поле боя со своим отрядом и арсеналом новейших технологий.",
  },
  {
    image: "/game-covers/life_is_strange_true_colors.jpeg",
    title: "Life is Strange True Colors",
    genres: ["Глубокий сюжет", "Главный герой"],
    video: "https://www.youtube.com/embed/b6CkzwVAr0M",
    price: 27,
    id: 3,
    description:
      "Алекс Чен скрывает от всех свое «проклятие» — сверхъестественную способность читать сильные эмоции других и влиять на них. Но когда ее брат погибает — якобы в результате несчастного случая — Алекс использует ее, чтобы узнать правду.",
  },
  {
    image: "/game-covers/gta_v.jpeg",
    title: "Grand Theft Auto V",
    genres: ["Открытый мир", "Действие"],
    video: "https://www.youtube.com/embed/QkkoHAzjnUs",
    price: 8.4,
    id: 4,
    description:
      "Grand Theft Auto V для ПК позволяет игрокам исследовать культовый мир Лос-Сантоса и округа Блейн в разрешении до 4k и выше со скоростью 60 кадров в секунду.",
  },
  {
    image: "/game-covers/rainbow_siege.jpeg",
    title: "Tom Clancy's Rainbow Six Siege",
    video: "https://www.youtube.com/embed/6wlvYh0h63k",
    genres: ["Тактика", "Стрелок"],
    price: 5,
    id: 5,
    description:
      "Tom Clancy's Rainbow Six – это продолжение нашумевшего шутера от первого лица, разработанного студией Ubisoft Montreal.",
  },
  {
    image: "/game-covers/assassins_creed_valhalla.png",
    title: "Assassin’s Creed Valhalla",
    genres: ["Паркур", "Война", "Открытый мир"],
    video: "https://www.youtube.com/embed/ssrNcwxALS4",
    price: 17,
    id: 6,
    description:
      "Assassin’s Creed Valhalla — is a multiplatform action/RPG video game developed by Ubisoft Montreal and published by Ubisoft. It is the twelfth installment in the Assassin's Creed series.",
  },
];

export const HomePage = () => {
  return (
    <div className="home-page">
      {games.map((game) => (
        <GameItem game={game} key={game.id} />
      ))}
    </div>
  );
};
