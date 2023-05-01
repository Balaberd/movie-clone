import { FC } from "react";
import cn from "classnames";
import { Poster } from "@/shared";
import styles from "./MovieCard.module.scss";
import { Rating } from "./Rating/Rating";

interface Props {
  imageUrl?: string;
  rating?: number;
  year?: string;
  ganre?: string;
  country?: string;
  title?: string;
  duration?: string;
}

export const MovieCard: FC<Props> = ({
  imageUrl = "https://thumbs.dfs.ivi.ru/storage6/contents/4/6/38a8b010f1a859fb3c709976fa8d1e.jpg/234x360//?q=85",
  rating = 8.6,
  year = 2013,
  ganre = "Фэнтези",
  country = "США",
  title = "Хоббит: Пустошь Смауга",
  duration = "154 минуты",
}) => (
  <div className={styles.movieCard}>
    <Poster classNames={cn(styles.poster)} imageUrl={imageUrl}>
      <div className={styles.movieProperties}>
        <div className={styles.actionBlock}>
          <div>1</div>
          <div>2</div>
          <div>3</div>
          <div>4</div>
        </div>
        <div className={styles.movieInfo}>
          <Rating rating={rating} />
          <div className={styles.description}>
            <span
              className={styles.info}
            >{`${year}, ${country}, ${ganre}`}</span>
            <span className={styles.duration}>{duration}</span>
          </div>
        </div>
      </div>
    </Poster>
    <div className={styles.titleBlock}>
      <h6 className={styles.title}>{title}</h6>
      <span className={styles.subtitle}>Бесплатно</span>
    </div>
  </div>
);
