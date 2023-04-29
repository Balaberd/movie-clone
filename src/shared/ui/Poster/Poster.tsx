import { FC, ReactElement } from "react";
import cn from "classnames";

import styles from "./Poster.module.scss";

interface Props {
  imageUrl: string;
  classNames?: string;
  children?: ReactElement;
}

export const Poster: FC<Props> = ({ classNames, imageUrl, children }) => (
  <div className={cn(styles.poster, classNames)}>
    <img className={styles.image} src={imageUrl} alt="постер к фильму" />
    {children}
  </div>
);
