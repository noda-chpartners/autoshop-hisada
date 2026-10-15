import { site } from "./site";

export const faqs = [
  {
    question: "営業時間と定休日は？",
    answer: `${site.hoursNote} ${site.hours}です。定休日は${site.closed}です。`,
  },
  {
    question: "店舗はどこにありますか？",
    answer: `〒${site.postal} ${site.address}です。${site.station}から${site.walk}です。`,
  },
  {
    question: "どんなバイクを扱っていますか？",
    answer:
      "原付、スーパーカブ、モンキー、スクーターを中心に、店頭の中古バイクを販売しています。",
  },
  {
    question: "掲載価格には何が含まれますか？",
    answer:
      "表示は車両価格です。登録や整備の費用は含みません。売約済みの場合があるため、ご来店の前にお電話ください。",
  },
  {
    question: "電話番号は？",
    answer: `${site.phoneDisplay}です。`,
  },
] as const;
