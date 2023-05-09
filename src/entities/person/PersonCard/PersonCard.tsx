import { FC, ReactElement } from "react";
import cn from "classnames";
import { Poster } from "@/shared";
import styles from "./PersonCard.module.scss";

interface Props {
  className: string;
  title: ReactElement | string;
  imageUrl: string;
}

export const PersonCard: FC<Props> = ({ className, title }) => (
  <div className={cn(styles.personCard, className)}>
    <Poster title={} />
  </div>
);
