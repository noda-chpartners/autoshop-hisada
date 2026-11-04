import type { ImageMetadata } from "astro";
import c65Front from "../assets/images/IMG_2338.jpeg";
import c65Side from "../assets/images/IMG_2340.jpeg";
import ns1Side from "../assets/images/IMG_3484.JPG";
import ns1Front from "../assets/images/IMG_3485.JPG";
import monkeyFront from "../assets/images/IMG_2343.jpeg";
import monkeySide from "../assets/images/IMG_2342.jpeg";
import goldFront from "../assets/images/IMG_2332.jpeg";
import goldSide from "../assets/images/IMG_2336.jpeg";
import dioFront from "../assets/images/IMG_2351.jpeg";
import dioSide from "../assets/images/IMG_2350.jpeg";
import nsrFront from "../assets/images/IMG_2359.jpeg";
import nsrSide from "../assets/images/IMG_2360.jpeg";
import todayFront from "../assets/images/IMG_2362.jpeg";
import todaySide from "../assets/images/IMG_2361.jpeg";
import jogFront from "../assets/images/IMG_2365.jpeg";
import jogSide from "../assets/images/IMG_2364.jpeg";

export type Bike = {
  id: string;
  maker: "HONDA" | "YAMAHA";
  name: string;
  color: string;
  swatch: string;
  price: number;
  mileage: number;
  spec?: string;
  images: ImageMetadata[];
  alts: string[];
};

export const bikes: Bike[] = [
  {
    id: "c65",
    maker: "HONDA",
    name: "スーパーカブ C65",
    color: "グレー",
    swatch: "#8d8d89",
    price: 330000,
    mileage: 6860,
    images: [c65Side, c65Front],
    alts: [
      "グレーのスーパーカブ C65の側面。レッグシールドとロングシートがある",
      "スーパーカブ C65の正面。ヘッドライトの下に65の表示がある",
    ],
  },
  {
    id: "ns1",
    maker: "HONDA",
    name: "NS-1",
    color: "レッド",
    swatch: "#c4452d",
    price: 550000,
    mileage: 13675,
    images: [ns1Side, ns1Front],
    alts: [
      "赤いホンダ NS-1の側面。タンクにホンダの翼マークがある",
      "赤いホンダ NS-1の正面。丸型の2灯ヘッドライトとスクリーンがある",
    ],
  },
  {
    id: "nsr50",
    maker: "HONDA",
    name: "NSR50",
    color: "レッド",
    swatch: "#c4452d",
    price: 498000,
    mileage: 11138,
    images: [nsrSide, nsrFront],
    alts: [
      "赤いNSR50の側面。タンクにホンダの翼マーク、テールにPRO-ARMの文字がある",
      "赤いNSR50の正面。丸型ヘッドライトと赤いフロントフェンダー",
    ],
  },
  {
    id: "monkey-z50j",
    maker: "HONDA",
    name: "モンキー Z50J",
    color: "ホワイト",
    swatch: "#f4f1ea",
    price: 380000,
    mileage: 7536,
    spec: "ボアアップ 88cc",
    images: [monkeySide, monkeyFront],
    alts: [
      "白いタンクにオレンジのラインが入ったモンキー Z50Jの側面。メッキのマフラーが付いている",
      "モンキー Z50Jの正面。白いフェンダーとブロックタイヤ",
    ],
  },
  {
    id: "gold-monkey",
    maker: "HONDA",
    name: "ゴールドモンキー",
    color: "ゴールド",
    swatch: "#c6a15a",
    price: 280000,
    mileage: 6764,
    images: [goldSide, goldFront],
    alts: [
      "ゴールドにメッキされたモンキーの側面。黒いシートとキャリアがある",
      "ゴールドモンキーの正面。丸型ヘッドライトとブロックタイヤ",
    ],
  },
  {
    id: "jog",
    maker: "YAMAHA",
    name: "リモコンジョグ",
    color: "ブラック",
    swatch: "#1c1c1c",
    price: 288000,
    mileage: 18000,
    images: [jogSide, jogFront],
    alts: [
      "黒いヤマハ ジョグの側面。リアにキャリアが付いている",
      "黒いヤマハ ジョグの正面。フロントカウルにJOGの文字がある",
    ],
  },
  {
    id: "dio-zx",
    maker: "HONDA",
    name: "ライブディオ ZX",
    color: "シルバー",
    swatch: "#c5c8ce",
    price: 168000,
    mileage: 8162,
    images: [dioSide, dioFront],
    alts: [
      "シルバーのライブディオ ZXの側面。サイドにZXの文字とメッキマフラーがある",
      "シルバーのライブディオ ZXの正面。フロントカウルにZXの文字がある",
    ],
  },
  {
    id: "today",
    maker: "HONDA",
    name: "Today",
    color: "ブルー",
    swatch: "#1f4f9a",
    price: 88000,
    mileage: 25668,
    images: [todaySide, todayFront],
    alts: [
      "青いホンダ Todayの側面。ボディにTODAYの文字とリアキャリアがある",
      "青いホンダ Todayの正面。丸型ヘッドライトと左右のミラー",
    ],
  },
];
