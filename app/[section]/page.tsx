import Image from "next/image";
import clsx from "clsx";
import Card from "../ui/Card";
import { cardData, imageData } from "../lib/data";
import { card, param } from "@/types";

const Page = ({ params }: param) => {
  const sec = params.section;
  const sections = ["uiux", "graphics", "branding", "logo"];

  if (!sections.includes(sec)) {
    return (
      <div className="w-full grid place-items-center bg-white z-10">
        <h1 className="font-bold text-4xl">Page Not Found</h1>
      </div>
    );
  }

  const cardInfo: card[] = cardData[sec];
  const imageInfo: string = imageData[sec];

  return (
    <section
      className={clsx(
        "w-full h-auto flex flex-col gap-5 p-5 lg:overflow-auto z-10",
        {
          "bg-Primary": sec === "uiux",
          "bg-Secondary": sec === "graphics",
          "bg-Tertiary": sec === "branding",
          "bg-Quaternary": sec === "logo",
        }
      )}
    >
      <Image
        src={imageInfo}
        alt={`${sec} Logo`}
        width={200}
        height={300}
        className="self-end"
      />

      <div className="flex flex-wrap justify-around items-center gap-10">
        {cardInfo.map((info) => (
          <Card
            src={info.imgSrc}
            title={info.title}
            link={`${sec}/${info.link}`}
            key={info.title}
          />
        ))}
      </div>
    </section>
  );
};
{
}

export default Page;
