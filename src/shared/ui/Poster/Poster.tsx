import { FC, ReactElement } from "react";
import cn from "classnames";

import styles from "./Poster.module.scss";

interface Props {
  classNames: string;
  imageUrl: string;
  children?: ReactElement;
}

export const Poster: FC<Props> = ({ classNames, imageUrl, children }) => (
  <div
    className={cn(styles.poster, classNames)}
    style={{ backgroundImage: `url(${imageUrl})` }}
  >
    {children}
  </div>
);
