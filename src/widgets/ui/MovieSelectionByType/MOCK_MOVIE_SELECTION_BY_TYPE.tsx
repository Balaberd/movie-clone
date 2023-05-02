import { MovieCard } from "@/entities";

const itemData = {
  id: 12345,
  imageUrl:
    "https://thumbs.dfs.ivi.ru/storage6/contents/4/6/38a8b010f1a859fb3c709976fa8d1e.jpg/234x360//?q=85",
  rating: 8.6,
  year: "2013",
  ganre: "Фэнтези",
  country: "США",
  title: "Хоббит: Пустошь Смауга",
  duration: "154 минуты",
};
const element = <MovieCard {...itemData} />;
const MOCK_MOVIE_SELECTION_BY_TYPE = new Array(11).fill(element);

export default MOCK_MOVIE_SELECTION_BY_TYPE;
