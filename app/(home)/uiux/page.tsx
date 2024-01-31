import Image from "next/image";
import Card from "@/app/ui/Card";
import { cardData } from "@/app/lib/data";
import { card } from "@/types";

const Page = () => {
  const cardInfo: card[] = cardData["uiux"];
  // const imageInfo: string = imageData["uiux"];

  return (
    <section className="w-full h-auto flex flex-col gap-5 p-5 lg:overflow-auto relative bg-Primary">
      <Image
        src="/assets/icons/uiux.svg"
        alt="uiux Logo"
        width={200}
        height={300}
        className="self-end"
      />

      <div className="flex flex-wrap justify-around items-center gap-10">
        {cardInfo.map((info) => (
          <Card
            src={info.imgSrc}
            title={info.title}
            link={`uiux/${info.link}`}
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
