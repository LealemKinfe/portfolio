import Image from "next/image";
import { CiMail } from "react-icons/ci";
import { ImBehance2 } from "react-icons/im";
import { LuPhone } from "react-icons/lu";
import { SiUpwork, SiFiverr } from "react-icons/si";

const Contact = () => {
  return (
    <section className="py-2 px-10 md:p-20">
      <div className="flex flex-col md:flex-row gap-32 md:justify-end">
        <Image
          src="/assets/about/mycontact.png"
          width={80}
          height={100}
          alt="about image"
          className="md:hidden -rotate-90 -mt-24 ml-[118px]"
        />

        <div className="grid grid-cols-3 place-content-around max-w-xl -mt-56 md:mt-0 min-h-[400px] sm:min-h-[500px]">
          <LuPhone size={50} className="md:justify-self-center" />

          <ul className="text-[#707070] col-span-2 text-2xl sm:text-4xl font-semibold">
            <li>+251 970 367 700</li>
            <li>+251 712 367 700</li>
          </ul>

          <CiMail size={50} className="md:justify-self-center" />

          <ul className="text-[#707070] col-span-2 text-2xl sm:text-4xl font-semibold">
            <li>lealem.alula@gmail.com</li>
            <li>lealem.kinfe@aait.edu.et</li>
            <li>lealem.kinfe@ethiosss.org</li>
          </ul>

          <ImBehance2 size={50} className="md:justify-self-center" />

          <p className="text-[#707070] col-span-2 text-2xl sm:text-4xl font-semibold">
            @munheda
          </p>

          <SiUpwork size={50} className="md:justify-self-center" />

          <p className="text-[#707070] col-span-2 text-2xl sm:text-4xl font-semibold">
            Lealem K.
          </p>

          <Image
            src="/assets/about/icons8-fiverr.svg"
            width={100}
            height={50}
            alt="fiver icon"
            className="md:justify-self-center"
          />

          <p className="text-[#707070] col-span-2 text-2xl sm:text-4xl font-semibold">
            @lealemkinfe
          </p>
        </div>

        <Image
          src="/assets/about/mycontact.png"
          width={140}
          height={210}
          alt="skills image"
          className="hidden md:block"
        />
      </div>
    </section>
  );
};

export default Contact;
