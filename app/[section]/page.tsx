import Image from "next/image";
import clsx from "clsx";
import Card from "../ui/Card";
import { cardData, imageData } from "../lib/data";
import { card, param } from "@/types";

export default function Page({ params }: param) {
  const lvl = params.section;

  const cardInfo: card[] = cardData[lvl];
  const imageInfo: string = imageData[lvl];

  return (
    <section
      className={clsx(
        "w-full h-auto flex flex-col gap-5 p-5 lg:overflow-auto z-10",
        {
          "bg-Primary": lvl === "uiux",
          "bg-Secondary": lvl === "graphics",
          "bg-Tertiary": lvl === "branding",
          "bg-Quaternary": lvl === "logo",
        }
      )}
    >
      <Image
        src={imageInfo}
        alt={`${lvl} Logo`}
        width={200}
        height={300}
        className="self-end"
      />

      <div className="flex flex-wrap justify-around items-center gap-10">
        {cardInfo.map((info) => (
          <Card
            src={info.imgSrc}
            title={info.title}
            link={info.link}
            key={info.title}
          />
        ))}
      </div>
    </section>
  );
}
{
}
