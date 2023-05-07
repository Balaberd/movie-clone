/* eslint-disable prettier/prettier */
/* eslint-disable react/jsx-key */
import { TopMovieCard } from "@/entities/movie/ui/TopMovieCard/TopMovieCard";

const arr = [];

for (let i = 0; i < 10; i += 1) {
  arr.push(
    <TopMovieCard
      id={i + 1}
      imageUrl="https://thumbs.dfs.ivi.ru/storage4/contents/2/d/e1c28af058ab48874c683e1b18dc72.jpg/304x620//?q=85"
      title={"Заголовок"}
      ratingInTop={i + 1}
    />
  );
}

export const MOCK_TOP_MOVIES = arr;
