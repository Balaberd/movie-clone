import { FC } from "react";
import cn from "classnames";
import { Poster } from "@/shared";
import styles from "./MovieCard.module.scss";

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
}) => {
  const formatedRatingValue = `${rating}`.split(".");
  if (formatedRatingValue.length === 1) {
    formatedRatingValue[1] = "0";
  }
  return (
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
            <div className={styles.rating}>
              <span className={styles.rating__firstNum}>
                {formatedRatingValue[0]}
              </span>
              <span className={styles.rating__secondNum}>
                {`,${formatedRatingValue[1]}`}
              </span>
            </div>
            <span className={styles.info}>
              {`${year}, ${country}, ${ganre}`}
            </span>
            <span className={styles.duration}>{duration}</span>
          </div>
        </div>
      </Poster>
      <div className={styles.titleBlock}>
        <h6 className={styles.title}>{title}</h6>
        <span className={styles.subtitle}>subtitle</span>
      </div>
    </div>
  );
};
