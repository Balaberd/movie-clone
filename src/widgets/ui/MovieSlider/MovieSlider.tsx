import { FC } from "react";
import { Slider } from "@/shared/ui/Slider/Slider";
import { MovieCard } from "@/entities";

const MOCK = {
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

const MOCKS = new Array(11).fill(MOCK);

const breakpoints = {
  1280: { slidesPerView: 7, slidesPerGroup: 6 },
  1096: { slidesPerView: 6, slidesPerGroup: 5 },
  930: { slidesPerView: 5, slidesPerGroup: 4 },
  745: { slidesPerView: 4, slidesPerGroup: 3 },
  0: { slidesPerView: 3, slidesPerGroup: 2 },
};

export const MovieSlider: FC = () => (
  <Slider breakpoints={breakpoints} spaceBetween={24}>
    {MOCKS.map((el, ind) => (
      <MovieCard key={ind} {...el} />
    ))}
  </Slider>
);
