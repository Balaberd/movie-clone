import { FC, ReactElement, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType, Navigation } from "swiper";
import "swiper/css";
import cn from "classnames";
import styles from "./Carusel.module.scss";

interface Props {
  children: ReactElement[];
  className?: string;
  wrapperClass?: string;
  spaceBetween?: number;
  slidesPerView: number;
  slidesPerGroup: number;
  slideClass?: string;
  loop?: boolean;
  initialSlide?: number;
  slideActiveClass?: string;
  centeredSlides?: boolean;
  bottonsClass?: string;
  buttonPrevClass?: string;
  buttonNextClass?: string;
}

export const Carusel: FC<Props> = ({
  children,
  slideClass,
  slideActiveClass,
  bottonsClass,
  buttonPrevClass,
  buttonNextClass,
  ...props
}) => {
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
        {children.map((Item, index) => (
          <SwiperSlide key={index} className={cn(styles.slide)}>
            {({ isActive }) => {
              const classes = isActive ? slideActiveClass : "";
              return <div className={cn(slideClass, classes)}>{Item}</div>;
            }}
          </SwiperSlide>
        ))}
      </Swiper>
      <button
        ref={prevButtonRef}
        onClick={() => swiperRef.current?.slidePrev()}
        className={cn(
          styles.navButton,
          styles.navButton_prev,
          bottonsClass,
          buttonPrevClass
        )}
      ></button>
      <button
        ref={nextButtonRef}
        onClick={() => swiperRef.current?.slideNext()}
        className={cn(
          styles.navButton,
          styles.navButton_next,
          bottonsClass,
          buttonNextClass
        )}
      ></button>
    </div>
  );
};
