import Image from "next/image";
import Link from "next/link";

const Card = ({
  src,
  title,
  link,
}: {
  src: string;
  title: string;
  link: string;
}) => {
  return (
    <div className="relative group flex flex-col hover:cursor-auto">
      <Image
        src={src}
        height={364}
        width={317}
        alt={`${title} picture`}
        className="object-cover group-hover:animate-scale duration-300"
      />

      <h2 className="text-2xl font-bold text-Quinary mt-5">{title}</h2>

      <Link href={link} className="hover:underline text-xl text-Quinary">
        Learn more
      </Link>
    </div>
  );
};

export default Card;
