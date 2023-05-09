import { FC, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType, Navigation, Autoplay } from "swiper";
import cn from "classnames";
import "swiper/css";
import { SliderButtons } from "@/shared/ui/SliderButtons/SliderButtons";
import { BannerCard } from "@/entities";
import { useAppSelector } from "@/app-fsd/hooks/redux";
import styles from "./BannerSlider.module.scss";

export const BannerSlider: FC = () => {
  const swiperRef = useRef<SwiperType>();
  const prevButtonRef = useRef(null);
  const nextButtonRef = useRef(null);

  const movies = useAppSelector((state) => state.movies.banner);

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
        {movies.map((movie) => (
          <SwiperSlide key={movie.id}>
            <BannerCard
              key={movie.id}
              id={movie.id}
              title={movie.title}
              description={movie.description}
              imageUrl={movie.imageUrl}
            />
          </SwiperSlide>
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
