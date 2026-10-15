import type { ImageMetadata } from "astro";
import silverFront from "../assets/images/IMG_2323.jpeg";
import silverSide from "../assets/images/IMG_2325.jpeg";
import grayScooter from "../assets/images/IMG_2328.jpeg";
import goldRear from "../assets/images/IMG_2335.jpeg";
import whiteDioSide from "../assets/images/IMG_2347.jpeg";
import whiteDioFront from "../assets/images/IMG_2348.jpeg";
import jogZrFront from "../assets/images/IMG_2356.jpeg";
import jogZrSide from "../assets/images/IMG_2357.jpeg";

export type Snap = {
  image: ImageMetadata;
  alt: string;
};

export const snaps: Snap[] = [
  {
    image: silverSide,
    alt: "店先に置かれたシルバーの小型バイクの側面",
  },
  {
    image: silverFront,
    alt: "店先に置かれたシルバーの小型バイクの正面",
  },
  {
    image: grayScooter,
    alt: "店先に置かれたグレーのスクーターの正面",
  },
  {
    image: goldRear,
    alt: "ゴールドモンキーの後部。黒いシートにHONDAの文字がある",
  },
  {
    image: whiteDioSide,
    alt: "店先の白いライブディオ ZXの側面",
  },
  {
    image: whiteDioFront,
    alt: "店先の白いライブディオ ZXの正面",
  },
  {
    image: jogZrSide,
    alt: "店先の黒いジョグ ZRの側面",
  },
  {
    image: jogZrFront,
    alt: "店先の黒いジョグ ZRの正面",
  },
];
