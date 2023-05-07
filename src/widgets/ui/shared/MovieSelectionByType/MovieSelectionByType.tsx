import { FC } from "react";
import { Carusel } from "@/shared/ui/Carusel/Carusel";
import styles from "./MovieSelectionByType.module.scss";
import MOCK_MOVIE_SELECTION_BY_TYPE from "./MOCK_MOVIE_SELECTION_BY_TYPE";

interface Props {
  type: string;
}

export const MovieSelectionByType: FC<Props> = ({ type }) => {
  const breakpoints = {
    1280: { slidesPerView: 7, slidesPerGroup: 6 },
    1096: { slidesPerView: 6, slidesPerGroup: 5 },
    930: { slidesPerView: 5, slidesPerGroup: 4 },
    745: { slidesPerView: 4, slidesPerGroup: 3 },
    0: { slidesPerView: 3, slidesPerGroup: 2 },
  };
  return (
    <div className={styles.wrapper}>
      <h4 className={styles.title}>{type}</h4>
      <Carusel
        wrapperClass={styles.carusel}
        spaceBetween={24}
        breakpoints={breakpoints}
        bottonsClass={styles.button}
      >
        {MOCK_MOVIE_SELECTION_BY_TYPE}
      </Carusel>
    </div>
  );
};
