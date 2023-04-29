import { FC } from "react";
import { Carusel } from "@/shared/ui/Carusel/Carusel";
import { MovieCard } from "@/entities";
import { useResize } from "@/shared";
import styles from "./MovieSelectionByType.module.scss";

interface Props {
  type: string;
}

const getSwiperInfo = (width: number) => {
  if (width < 745) {
    return { slidesPerView: 3, slidesPerGroup: 2 };
  }
  if (width < 920) {
    return { slidesPerView: 4, slidesPerGroup: 3 };
  }
  if (width < 1050) {
    return { slidesPerView: 5, slidesPerGroup: 4 };
  }
  if (width < 1280) {
    return { slidesPerView: 6, slidesPerGroup: 5 };
  }
  return { slidesPerView: 7, slidesPerGroup: 6 };
};

export const MovieSelectionByType: FC<Props> = ({ type }) => {
  const element = <MovieCard />;
  const currentWidth = useResize();
  const { slidesPerView, slidesPerGroup } = getSwiperInfo(currentWidth);

  const elements = new Array(11).fill(element);
  return (
    <div className={styles.wrapper}>
      <h4 className={styles.title}>{type}</h4>
      <Carusel
        wrapperClass={styles.carusel}
        spaceBetween={24}
        slidesPerView={slidesPerView}
        slidesPerGroup={slidesPerGroup}
      >
        {elements}
      </Carusel>
    </div>
  );
};
