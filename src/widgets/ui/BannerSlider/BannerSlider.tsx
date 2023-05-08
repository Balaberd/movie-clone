import { FC, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType, Navigation, Autoplay } from "swiper";
import cn from "classnames";
import "swiper/css";
import { SliderButtons } from "@/shared/ui/SliderButtons/SliderButtons";
import styles from "./BannerSlider.module.scss";
import MOCK_BANNER_SLIDER from "./MOCK_BANNER_SLIDER";

export const BannerSlider: FC = () => {
  const swiperRef = useRef<SwiperType>();
  const prevButtonRef = useRef(null);
  const nextButtonRef = useRef(null);

  return (
    <div className={styles.bannerSlider}>
      <Swiper
        modules={[Navigation, Autoplay]}
        speed={1000}
        autoplay={{ delay: 5000 }}
        centeredSlides={true}
        loop={true}
        spaceBetween={16}
        slidesPerView={3}
        slidesPerGroup={1}
        navigation={{
          prevEl: prevButtonRef.current,
          nextEl: nextButtonRef.current,
        }}
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
        }}
      >
        {MOCK_BANNER_SLIDER.map((Item, index) => (
          <SwiperSlide key={index}>{Item}</SwiperSlide>
        ))}
      </Swiper>
      <SliderButtons
        swiperRef={swiperRef}
        prev={prevButtonRef}
        next={nextButtonRef}
        prevButtonClassName={cn(styles.button, styles.button_prev)}
        nextButtonClassName={cn(styles.button, styles.button_next)}
      />
    </div>
  );
};
