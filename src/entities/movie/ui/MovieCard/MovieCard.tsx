import { FC } from "react";
import cn from "classnames";
import { Poster } from "@/shared";
import styles from "./MovieCard.module.scss";

interface Props {
  imageUrl: string;
}

export const MovieCard: FC<Props> = ({ imageUrl }) => (
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
          <div className={styles.rating}>8.3</div>
          1996, СССР, Комедия
          <br />
          90 минут
        </div>
      </div>
    </Poster>
    <div className={styles.titleBlock}>
      <h6 className={styles.title}>По законам военного времени</h6>
      <span className={styles.subtitle}>subtitle</span>
    </div>
  </div>
);
