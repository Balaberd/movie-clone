import {
  SCREEN_WIDTH_1,
  SCREEN_WIDTH_2,
  SCREEN_WIDTH_3,
} from "../const/screenWidths";

const getMovieTopSliderSettings = (width: number) => {
  if (width < SCREEN_WIDTH_1) {
    return {
      slidesPerView: 2,
      slidesPerGroup: 2,
    };
  }
  if (width < SCREEN_WIDTH_2) {
    return {
      slidesPerView: 3,
      slidesPerGroup: 1,
    };
  }
  if (width < SCREEN_WIDTH_3) {
    return {
      slidesPerView: 4,
      slidesPerGroup: 2,
    };
  }
  return {
    slidesPerView: 5,
    slidesPerGroup: 3,
  };
};

export default getMovieTopSliderSettings;
