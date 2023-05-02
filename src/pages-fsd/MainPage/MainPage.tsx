import { FC } from "react";
import Link from "next/link";
import cn from "classnames";
import { BannerSlider, MovieSelectionByType } from "@/widgets";
import styles from "./MainPage.module.scss";

export const MainPage: FC = () => (
  <div className={styles.mainPage}>
    <div className={styles.container}>
      <BannerSlider />
      <section className={styles.teaserBlock}>
        <Link
          href="https://www.ivi.ru/subscribe?redirect_url=%2F"
          className={cn(styles.link, styles.link_subscription)}
        >
          1
        </Link>
        <Link
          href="https://www.ivi.ru/login?action=%2Fuser%2Fcertificate&redirect_url=%2F"
          className={cn(styles.link, styles.link_certificate)}
        >
          2
        </Link>
      </section>
      <MovieSelectionByType type="Movie selector type" />
    </div>
  </div>
);
