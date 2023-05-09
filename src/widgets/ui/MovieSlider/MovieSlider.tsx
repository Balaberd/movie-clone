import { FC } from "react";
import { Slider } from "@/shared/ui/Slider/Slider";
import { MovieCard } from "@/entities";
import { useAppSelector } from "@/app-fsd/hooks/redux";

const breakpoints = {
  1280: { slidesPerView: 7, slidesPerGroup: 6 },
  1096: { slidesPerView: 6, slidesPerGroup: 5 },
  930: { slidesPerView: 5, slidesPerGroup: 4 },
  745: { slidesPerView: 4, slidesPerGroup: 3 },
  0: { slidesPerView: 3, slidesPerGroup: 2 },
};

export const MovieSlider: FC = () => {
  const movies = useAppSelector((state) => state.movies.selections.top);
  return (
    <Slider breakpoints={breakpoints} spaceBetween={24}>
      {movies.map((el, ind) => (
        <MovieCard key={ind} {...el} />
      ))}
    </Slider>
  );
};
