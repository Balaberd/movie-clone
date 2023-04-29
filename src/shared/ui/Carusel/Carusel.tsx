import { FC, ReactElement, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType, Navigation } from "swiper";
import "swiper/css";
import cn from "classnames";
import styles from "./Carusel.module.scss";

interface Props {
  children: ReactElement[];
}

export const Carusel: FC<Props> = ({ children }) => {
  const swiperRef = useRef<SwiperType>();
  const prevButtonRef = useRef(null);
  const nextButtonRef = useRef(null);

  return (
    <div className={styles.carusel}>
      <Swiper
        modules={[Navigation]}
        spaceBetween={24}
        slidesPerView={7}
        slidesPerGroup={6}
        navigation={{
          prevEl: prevButtonRef.current,
          nextEl: nextButtonRef.current,

          hideOnClick: true,
          enabled: true,
          disabledClass: styles.disabled,
        }}
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
        }}
      >
        {children.map((item, ind) => (
          <SwiperSlide key={ind}>{item}</SwiperSlide>
        ))}
      </Swiper>
      <button
        ref={prevButtonRef}
        onClick={() => swiperRef.current?.slidePrev()}
        className={cn(styles.navButton, styles.navButton_prev)}
      ></button>
      <button
        ref={nextButtonRef}
        onClick={() => swiperRef.current?.slideNext()}
        className={cn(styles.navButton, styles.navButton_next)}
      ></button>
    </div>
  );
};
