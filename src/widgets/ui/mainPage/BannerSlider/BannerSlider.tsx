import { Carusel } from "@/shared";
import { FC } from "react";
import styles from "./BannerSlider.module.scss";
import MOCK_BANNER_SLIDER from "./MOCK_BANNER_SLIDER";

export const BannerSlider: FC = () => (
  <Carusel
    className={styles.carusel}
    centeredSlides={true}
    loop={true}
    spaceBetween={16}
    slidesPerView={3}
    slidesPerGroup={1}
    bottonsClass={styles.button}
    buttonNextClass={styles.button_next}
    buttonPrevClass={styles.button_prev}
    autoplay={{ delay: 6000 }}
  >
    {MOCK_BANNER_SLIDER}
  </Carusel>
);
