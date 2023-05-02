import { FC } from "react";
import { Carusel } from "@/shared/ui/Carusel/Carusel";
import { useResize } from "@/shared";
import getSwiperSettings from "@/widgets/lib/helpers/getSwiperSettings";
import styles from "./MovieSelectionByType.module.scss";
import MOCK_MOVIE_SELECTION_BY_TYPE from "./MOCK_MOVIE_SELECTION_BY_TYPE";

interface Props {
  type: string;
}

export const MovieSelectionByType: FC<Props> = ({ type }) => {
  const currentWidth = useResize();
  const { slidesPerView, slidesPerGroup } = getSwiperSettings(currentWidth);

  return (
    <div className={styles.wrapper}>
      <h4 className={styles.title}>{type}</h4>
      <Carusel
        wrapperClass={styles.carusel}
        spaceBetween={24}
        slidesPerView={slidesPerView}
        slidesPerGroup={slidesPerGroup}
        bottonsClass={styles.button}
      >
        {MOCK_MOVIE_SELECTION_BY_TYPE}
      </Carusel>
    </div>
  );
};
