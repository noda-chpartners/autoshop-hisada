import { getImage } from "astro:assets";
import { bikes } from "../data/bikes";
import { faqs } from "../data/faqs";
import { site } from "../data/site";

const pageUrl = `${site.url}/`;
const shopId = `${pageUrl}#shop`;

type PageMeta = {
  title: string;
  description: string;
};

export async function buildJsonLd({ title, description }: PageMeta) {
  const stock = await Promise.all(
    bikes.map(async (bike, index) => {
      const name = bike.spec ? `${bike.name}（${bike.spec}）` : bike.name;
      const image = bike.images[0]
        ? new URL(
            (
              await getImage({
                src: bike.images[0],
                width: 1200,
                format: "jpeg",
              })
            ).src,
            pageUrl,
          ).href
        : undefined;

      return {
        "@type": "ListItem",
        position: index + 1,
        item: {
          "@type": "Vehicle",
          name,
          brand: { "@type": "Brand", name: bike.maker },
          color: bike.color,
          ...(image ? { image } : {}),
          url: `${pageUrl}#${bike.id}`,
          mileageFromOdometer: {
            "@type": "QuantitativeValue",
            value: bike.mileage,
            unitCode: "KMT",
          },
          description: "表示は車両価格です。登録や整備の費用は含みません。",
          offers: {
            "@type": "Offer",
            price: String(bike.price),
            priceCurrency: "JPY",
            availability: "https://schema.org/LimitedAvailability",
            url: `${pageUrl}#${bike.id}`,
            seller: { "@id": shopId },
          },
        },
      };
    }),
  );

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MotorcycleDealer",
        "@id": shopId,
        name: site.name,
        legalName: site.legalName,
        url: pageUrl,
        image: `${pageUrl}ogp.jpg`,
        telephone: "+81-52-801-0519",
        currenciesAccepted: "JPY",
        description,
        address: {
          "@type": "PostalAddress",
          postalCode: site.postal,
          addressRegion: site.region,
          addressLocality: site.city,
          streetAddress: site.street,
          addressCountry: "JP",
        },
        hasMap: site.mapUrl,
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: [
              "https://schema.org/Monday",
              "https://schema.org/Tuesday",
              "https://schema.org/Wednesday",
              "https://schema.org/Friday",
              "https://schema.org/Saturday",
              "https://schema.org/Sunday",
            ],
            opens: "10:00",
            closes: "18:30",
          },
        ],
        areaServed: {
          "@type": "City",
          name: "日進市",
          containedInPlace: {
            "@type": "AdministrativeArea",
            name: "愛知県",
          },
        },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "店頭の車両",
          itemListElement: stock,
        },
      },
      {
        "@type": "WebSite",
        "@id": `${pageUrl}#website`,
        url: pageUrl,
        name: site.name,
        inLanguage: "ja",
        publisher: { "@id": shopId },
      },
      {
        "@type": "WebPage",
        "@id": `${pageUrl}#webpage`,
        url: pageUrl,
        name: title,
        description,
        inLanguage: "ja",
        isPartOf: { "@id": `${pageUrl}#website` },
        about: { "@id": shopId },
        primaryImageOfPage: {
          "@type": "ImageObject",
          url: `${pageUrl}ogp.jpg`,
          width: 1200,
          height: 630,
        },
      },
      {
        "@type": "FAQPage",
        "@id": `${pageUrl}#faq`,
        url: `${pageUrl}#faq`,
        isPartOf: { "@id": `${pageUrl}#webpage` },
        mainEntity: faqs.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.answer,
          },
        })),
      },
    ],
  };
}
