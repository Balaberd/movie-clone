import { FC } from "react";
import Link from "next/link";
import cn from "classnames";
import { BannerSlider, MovieSelectionByType } from "@/widgets";
import { ExpandedBlock } from "@/shared/ui/ExpandedBlock/ExpandedBlock";
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
      <ExpandedBlock
        content={
          "Случалось ли вам отказаться от просмотра интересного фильма из-за того, что его показывали в неудобное время? Приходилось ли искать в сети интернет, где смотреть фильмы онлайн? А спорить с домашними из-за выбора кино для просмотра по ТВ? \n Все эти проблемы остались в прошлом! Откройте для себя фильмы онлайн в HD-качестве с кинотеатром Иви. Мы не просто освобождаем вас от необходимости идти в кинотеатр или изучать программу телепередач – у посетителей нашего ресурса гораздо больше возможностей."
        }
        title="Онлайн-кинотеатр Иви: фильмы в хорошем качестве всегда приносят настоящее удовольствие"
      />
    </div>
  </div>
);
