import { FC } from "react";
import { Carusel } from "@/shared/ui/Carusel/Carusel";
import Image from "next/image";
import styles from "./TopMovieSlider.module.scss";
import { MOCK_TOP_MOVIES } from "./MOCK_TOP_MOVIES";

export const TopMovieSlider: FC = () => {
  const breakpoints = {
    1160: { slidesPerView: 5, slidesPerGroup: 4 },
    880: { slidesPerView: 4, slidesPerGroup: 3 },
    600: { slidesPerView: 3, slidesPerGroup: 2 },
    0: { slidesPerView: 2, slidesPerGroup: 1 },
  };

  return (
    <div className={styles.wrapper}>
      <h4 className={styles.title}>
        <Image
          src="https://solea-parent.dfs.ivi.ru/picture/bypass/top10.svg"
          alt="top-10 logo"
          width={116}
          height={28}
        />{" "}
        за неделю
      </h4>
      <Carusel
        wrapperClass={styles.carusel}
        spaceBetween={24}
        breakpoints={breakpoints}
      >
        {MOCK_TOP_MOVIES}
      </Carusel>
    </div>
  );
};
