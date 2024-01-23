import React from "react";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";

export default function Page({ params }: { params: { level: string } }) {
  let index = 0;

  if (params.level === "uiux") {
    index = 0;
  }
  if (params.level === "graphics") {
    index = 1;
  }
  if (params.level === "branding") {
    index = 2;
  }
  if (params.level === "logo") {
    index = 3;
  }

  const imageData = [
    "/assets/images/uiux.svg",
    "/assets/images/graphics.svg",
    "/assets/images/branding.svg",
    "/assets/images/logo.svg",
  ];

  return (
    <>
      <div
        className={clsx("w-full relative", {
          "bg-Primary": params.level === "uiux",
          "bg-Secondary": params.level === "graphics",
          "bg-Tertiary": params.level === "branding",
          "bg-Quaternary": params.level === "logo",
        })}
      >
        <div className="absolute top-0 right-0 p-8">
          <Image
            src={imageData[index]}
            alt={`${params.level} Logo`}
            width={200}
            height={300}
          />
        </div>

        {params.level === "uiux" && (
          <div className="absolute top-10 left-10 rounded-2xl bg-Quinary/10 p-8 min-w-[317px] min-h-[364px] mt-28"></div>
        )}
        <h1 className="absolute -translate-y-20 top-2/3 left-10 text-2xl font-bold text-Quinary ">
          Project ESSS
        </h1>
        <Link
          href={"/"}
          className="absolute -translate-y-14 z-10 top-2/3 left-10 text-xl cursor-pointer text-Quinary "
        >
          {" "}
          Learn More
        </Link>
        {params.level === "uiux" && (
          <div className="absolute top-8 left-8 rounded-2xl bg-Quinary/20 p-8 min-w-[317px] min-h-[364px] mt-28"></div>
        )}
      </div>
    </>
  );
}
{
}
