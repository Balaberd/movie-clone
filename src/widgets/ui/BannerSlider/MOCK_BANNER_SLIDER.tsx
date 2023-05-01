import { BannerCard } from "@/entities";

const itemData = {
  id: 11111,
  imageUrl:
    "https://thumbs.dfs.ivi.ru/storage26/contents/4/5/0a9a5152f4ef1c2358c8b22bbdbebf.jpg/1216x524/?q=85",
  title: "Хоббит: Пустошь Смауга",
  description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo sed fugit
          distinctio cupiditate dolorum illum, eaque neque! Consequatur dolorum,
          placeat quasi dolore error magni perspiciatis itaque, iure, rem at
          quam. Porro blanditiis, quos voluptatibus quibusdam soluta inventore
          at ipsam rerum sequi placeat unde, nihil laudantium! Dicta omnis quas
          sint?`,
};
const element = <BannerCard {...itemData} />;
const MOCK_BANNER_SLIDER = new Array(5).fill(element);

export default MOCK_BANNER_SLIDER;
