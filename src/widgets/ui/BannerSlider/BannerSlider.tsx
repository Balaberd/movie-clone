import { Carusel } from "@/shared";
import { FC } from "react";
import { BannerCard } from "@/entities";
import styles from "./BannerSlider.module.scss";

export const BannerSlider: FC = () => {
  const element = <BannerCard />;
  const elements = new Array(5).fill(element);

  return (
    <Carusel
      wrapperClass={styles.wrapper}
      className={styles.carusel}
      centeredSlides={true}
      loop={true}
      spaceBetween={16}
      slidesPerView={3}
      slidesPerGroup={1}
      slideClass={styles.slide}
      slideActiveClass={styles.slide_active}
    >
      {elements}
    </Carusel>
  );
};
