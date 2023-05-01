import { FC } from "react";
import cn from "classnames";
import { Poster } from "@/shared";
import styles from "./BannerCard.module.scss";

interface Props {
  imageUrl?: string;
  className?: string;
}

export const BannerCard: FC<Props> = ({
  className,
  imageUrl = "https://thumbs.dfs.ivi.ru/storage26/contents/4/5/0a9a5152f4ef1c2358c8b22bbdbebf.jpg/1216x524/?q=85",
}) => (
  <Poster classNames={cn(styles.poster, className)} imageUrl={imageUrl}>
    <div>SOME CONTENT</div>
  </Poster>
);
