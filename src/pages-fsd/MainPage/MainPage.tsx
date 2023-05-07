import { FC } from "react";
import Link from "next/link";
import cn from "classnames";
import { BannerSlider, MovieSelectionByType, TopMovieSlider } from "@/widgets";
import { ExpandedBlock } from "@/shared/ui/ExpandedBlock/ExpandedBlock";
import Image from "next/image";
import { Dropdown } from "@/shared/ui/Dropdown/Dropdown";
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
          <Image
            src="https://solea-parent.dfs.ivi.ru/picture/ffffff,ffffff/lightning.svg"
            alt="icon"
            width={24}
            height={32}
          />
          30 дней подписки за 1 ₽
        </Link>
        <Link
          href="https://www.ivi.ru/login?action=%2Fuser%2Fcertificate&redirect_url=%2F"
          className={cn(styles.link, styles.link_certificate)}
        >
          <Image
            src="https://solea-parent.dfs.ivi.ru/picture/ffffff,ffffff/gift.svg"
            alt="icon"
            width={56}
            height={32}
          />
          Активировать сертификат
        </Link>
      </section>
      <MovieSelectionByType type="Movie selector type" />
      <Dropdown trigger={<button>CLICK ME</button>}>
        <div>SOME CONYENT</div>
      </Dropdown>
      <ExpandedBlock
        content={`
          Каждый день миллионы людей ищут фильмы онлайн, и никто не хочет усложнять себе жизнь – и вы наверняка один из них! А раз так, то Иви – это именно тот ресурс, который вам нужен. От лучших кинолент в HD-качестве вас отделяет буквально один клик. Мы не просто освобождаем от необходимости идти в кинотеатр или изучать программу телепередач – у посетителей нашего ресурса гораздо больше возможностей.

Видеотека Иви – это постоянно пополняющаяся коллекция в рунете, которая насчитывает более 60 тысяч отечественного и зарубежного контента, доступного для просмотра онлайн. Мы первыми в России подписали контракты с крупнейшими голливудскими студиями (Walt Disney, Warner Bros., Sony, 20th Century Fox, Universal, Paramount, MGM и другими) и на постоянной основе сотрудничаем с крупнейшими российскими компаниями и телеканалами.

Онлайн-кинотеатр ivi.ru – это:

уникальная рекомендательная система, учитывающая ваши предпочтения и предлагающая посмотреть именно то, что точно придется вам по душе;
просмотр в одно касание на любом из устройств, подключенном к вашему Иви-аккаунту – от смартфонов до телевизоров с технологией Smart TV;
возможность скачивать в память мобильного устройства лицензионный контент и смотреть его без доступа к Интернету;
уникальные условия и преимущества для обладателей подписки Иви, делающей кинопросмотр комфортным и приятным;
удобная и продвинутая система уведомлений, вы не пропустите выход крутого обсуждаемого блокбастера – мы известим о появлении подходящим для вас способом;
возможность добавлять фильмы в «смотреть позже», чтобы вернуться к ним в свободное время;
контент, для просмотра которого не требуется устанавливать видеоплееры или искать кодеки;
просмотр онлайн контента хорошего разрешения без регистрации и смс.
Откройте для себя возможность смотреть фильмы онлайн бесплатно в отличном качестве с кинотеатром Иви!
          `}
        title="Онлайн-кинотеатр Иви: фильмы в хорошем качестве всегда приносят настоящее удовольствие"
      />
      <TopMovieSlider />
    </div>
  </div>
);
