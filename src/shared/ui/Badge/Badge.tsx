import { FC } from "react";
import cn from "classnames";
import styles from "./Badge.module.scss";

interface Props {
  className?: string;
}

export const Badge: FC<Props> = ({ className }) => (
  <span className={cn(styles.badge, styles.iviChoose, className)}>
    выбор Иви
  </span>
);
