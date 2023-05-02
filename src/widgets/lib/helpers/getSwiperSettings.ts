import {
  SCREEN_WIDTH_1,
  SCREEN_WIDTH_2,
  SCREEN_WIDTH_3,
  SCREEN_WIDTH_4,
} from "../const/screenWidths";

const getSwiperSettings = (width: number) => {
  if (width < SCREEN_WIDTH_1) {
    return { slidesPerView: 3, slidesPerGroup: 2 };
  }
  if (width < SCREEN_WIDTH_2) {
    return { slidesPerView: 4, slidesPerGroup: 3 };
  }
  if (width < SCREEN_WIDTH_3) {
    return { slidesPerView: 5, slidesPerGroup: 4 };
  }
  if (width < SCREEN_WIDTH_4) {
    return { slidesPerView: 6, slidesPerGroup: 5 };
  }
  return { slidesPerView: 7, slidesPerGroup: 6 };
};

export default getSwiperSettings;
