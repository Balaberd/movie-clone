import { FC, ReactElement, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType, Navigation } from "swiper";
import "swiper/css";
import cn from "classnames";
import styles from "./Carusel.module.scss";

interface Props {
  children: ReactElement[];
  wrapperClass?: string;
  spaceBetween?: number;
  slidesPerView: number;
  slidesPerGroup: number;
}

export const Carusel: FC<Props> = ({ children, ...props }) => {
  const swiperRef = useRef<SwiperType>();
  const prevButtonRef = useRef(null);
  const nextButtonRef = useRef(null);

  return (
    <div className={styles.carusel}>
      <Swiper
        {...props}
        modules={[Navigation]}
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
        {children.map((item, index) => (
          <SwiperSlide key={index} className={styles.slide}>
            {item}
          </SwiperSlide>
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
