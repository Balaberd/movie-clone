import { FC } from "react";
import { Carusel } from "@/shared/ui/Carusel/Carusel";
import Image from "next/image";
import { useResize } from "@/shared";
import getMovieTopSliderSettings from "@/widgets/lib/helpers/getMovieTopSliderSettings";
import styles from "./TopMovieSlider.module.scss";
import { MOCK_TOP_MOVIES } from "./MOCK_TOP_MOVIES";

export const TopMovieSlider: FC = () => {
  const currentWidth = useResize();
  const { slidesPerView, slidesPerGroup } =
    getMovieTopSliderSettings(currentWidth);
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
        slidesPerView={slidesPerView}
        slidesPerGroup={slidesPerGroup}
      >
        {MOCK_TOP_MOVIES}
      </Carusel>
    </div>
  );
};
