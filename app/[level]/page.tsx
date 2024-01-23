import Image from "next/image";
import clsx from "clsx";
import Card from "../UI/Card";
import { cardData, imageData } from "../lib/data";

export default function Page({ params }: { params: { level: string } }) {
  let index = 0;

  if (params.level === "uiux") {
    index = 0;
  } else if (params.level === "graphics") {
    index = 1;
  } else if (params.level === "branding") {
    index = 2;
  } else if (params.level === "logo") {
    index = 3;
  }

  const cardInfo = cardData[index];
  const imageInfo = imageData[index];

  return (
    <div
      className={clsx(
        "w-full h-auto flex flex-col gap-5 p-5 lg:overflow-auto z-10",
        {
          "bg-Primary": params.level === "uiux",
          "bg-Secondary": params.level === "graphics",
          "bg-Tertiary": params.level === "branding",
          "bg-Quaternary": params.level === "logo",
        }
      )}
    >
      <Image
        src={imageInfo}
        alt={`${params.level} Logo`}
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
    </div>
  );
}
{
}
