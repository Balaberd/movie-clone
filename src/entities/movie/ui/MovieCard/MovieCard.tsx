import { FC } from "react";
import cn from "classnames";
import { Poster } from "@/shared";
import Link from "next/link";
import styles from "./MovieCard.module.scss";
import { Rating } from "./Rating/Rating";

interface Props {
  id: number;
  imageUrl: string;
  rating: number;
  year: string;
  ganre: string;
  country: string;
  title: string;
  duration: string;
}

export const MovieCard: FC<Props> = ({
  id,
  imageUrl,
  rating,
  year,
  ganre,
  country,
  title,
  duration,
}) => (
  <Link className={styles.movieCard} href={`/movies/${id}`}>
    <Poster classNames={cn(styles.poster)} imageUrl={imageUrl} title={title}>
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
  </Link>
);
