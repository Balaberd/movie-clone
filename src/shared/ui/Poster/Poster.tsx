import { FC, ReactElement } from "react";
import cn from "classnames";

import Image from "next/image";
import styles from "./Poster.module.scss";

interface Props {
  imageUrl: string;
  classNames?: string;
  children?: ReactElement;
  title: string;
}

export const Poster: FC<Props> = ({
  classNames,
  imageUrl,
  children,
  title,
}) => (
  <div className={cn(styles.poster, classNames)} data-testid="custom-element">
    <Image
      className={styles.image}
      src={imageUrl}
      alt={`постер к фильму ${title}`}
      fill
    />
    {children}
  </div>
);
