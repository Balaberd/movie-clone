import { FC } from "react";
import cn from "classnames";
import styles from "./RatingLine.module.scss";

interface Props {
  rating: number;
  className?: string;
}

export const RatingLine: FC<Props> = ({ rating, className }) => {
  const ratingInPercent = `${rating * 10}%`;

  return (
    <div className={cn(styles.lineWrapper, className)}>
      <div
        className={styles.ratingLine}
        style={{ width: ratingInPercent }}
      ></div>
    </div>
  );
};
