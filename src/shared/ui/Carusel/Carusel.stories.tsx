import type { Meta, StoryObj } from "@storybook/react";
import { Carusel } from "./Carusel";

const meta: Meta<typeof Carusel> = {
  title: "shared/Carusel",
  component: Carusel,
  tags: ["autodocs"],
  parameters: {
    backgrounds: { default: "dark" },
  },
  argTypes: {
    children: {
      type: "function",
      description: "массив react элементов - слайдов",
    },
    className: {
      type: "string",
      description: "пропс для передачи css миксинов в компонент",
    },
    wrapperClass: {
      type: "string",
      description: "пропс для передачи css миксинов в обертку для слайдера",
    },
    spaceBetween: {
      type: "number",
      description: "расстояние между слайдами",
    },
    slidesPerView: {
      type: "number",
      description: "количество отображаемых слайдов",
    },
    slidesPerGroup: {
      type: "number",
      description: "количество перелистываемых слайдов",
    },
    slideClass: {
      type: "number",
      description: "css миксины для обертки слайдов",
    },
    loop: {
      type: "boolean",
      description: "булевое значение, при true - слайдер зациклен",
    },
    slideActiveClass: {
      type: "string",
      description: "css миксины для обертки АКТИВНЫХ слайдов",
    },
    centeredSlides: {
      type: "boolean",
      description: "если true - слайды отцентрованы",
    },
    bottonsClass: {
      type: "string",
      description: "css миксины для кнопок",
    },
    buttonPrevClass: {
      type: "string",
      description: "css миксины для кнопки - prev",
    },
    buttonNextClass: {
      type: "string",
      description: "css миксины для кнопки - next",
    },
  },
};
export default meta;
type Story = StoryObj<typeof Carusel>;

const element = (
  <div
    style={{
      width: "100%",
      height: "300px",
      backgroundColor: "gray",
      color: "white",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center",
      fontSize: "26px",
    }}
  >
    item element styles
    <br />
    width: 100%
    <br />
    height: 300px
  </div>
);

const children = new Array(5).fill(element);

export const Default: Story = {
  args: {
    children,
    spaceBetween: 80,
    slidesPerView: 3,
    slidesPerGroup: 1,
  },
};
