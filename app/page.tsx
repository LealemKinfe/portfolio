import Image from "next/image";
import Link from "next/link";

const Home = () => {
  return (
    <>
      {/* Desktop design */}
      <section className="hidden h-screen lg:w-full bg-[#2F2F2F] lg:grid place-items-center">
        <div className="h-[680px] xl:w-[900px] w-[800px] px-20 xl:px-32 py-5">
          <div className="h-full rounded-full rotate-[30deg] animate-spin-mid bg-[#707070]/50 grid place-items-center relative">
            {/* Center div */}
            <div className="p-10 z-10">
              <div className="rounded-full p-12 border-[50px] border-[#707070]"></div>
            </div>

            {/* Graphics div */}
            <Link
              href="/graphics"
              className="absolute top-7 rounded-lg right-1/2 translate-x-1/2 px-[37px] py-6 z-20"
            >
              <Image
                src="/assets/home/Group6.svg"
                height={180}
                width={200}
                alt="graphics page logo"
                className="object-cover -rotate-[30deg] hover:animate-scale"
              />
            </Link>
            <div className="absolute top-7 rounded-lg right-1/2 translate-x-1/2 px-[137px] py-[136px] bg-[#C3C3C3]/70"></div>

            {/* Logo div */}
            <Link
              href="/logo"
              className="absolute bottom-7 rounded-lg right-1/2 translate-x-1/2 px-[37px] py-6 z-10"
            >
              <Image
                src="/assets/home/Group8.svg"
                height={180}
                width={200}
                alt="logo page logo"
                className="object-cover -rotate-[30deg] hover:animate-scale"
              />
            </Link>
            <div className="absolute bottom-7 rounded-lg right-1/2 translate-x-1/2 px-[137px] py-[136px] bg-[#C3C3C3]/30"></div>

            {/* Branding div */}
            <Link
              href="/branding"
              className="absolute right-7 rounded-lg bottom-1/2 translate-y-1/2 px-[26px] py-[37px] z-10"
            >
              <Image
                src="/assets/home/Group9.svg"
                height={180}
                width={220}
                alt="branding page logo"
                className="object-cover -rotate-[30deg] hover:animate-scale"
              />
            </Link>
            <div className="absolute right-7 rounded-lg bottom-1/2 translate-y-1/2 px-[137px] py-[136px] bg-[#C3C3C3]/30"></div>

            {/* ui/ux div */}
            <Link
              href="/uiux"
              className="absolute left-7 rounded-lg bottom-1/2 translate-y-1/2 px-[26px] py-[37px] z-10"
            >
              <Image
                src="/assets/home/Group7.svg"
                height={180}
                width={220}
                alt="ui/ux page logo"
                className="object-cover -rotate-[30deg] hover:animate-scale"
              />
            </Link>
            <div className="absolute left-7 rounded-lg bottom-1/2 translate-y-1/2 px-[137px] py-[136px] bg-[#C3C3C3]/70"></div>
          </div>
        </div>
      </section>

      {/* Mobile design */}
      <section className="lg:hidden bg-[#2F2F2F] md:h-screen w-full p-10 grid sm:grid-cols-2 gap-5 place-items-center">
        {/* Graphics link */}
        <Link
          href="/graphics"
          className="lg:hidden rounded-lg px-[37px] py-6 bg-[#C3C3C3]/70"
        >
          <Image
            src="/assets/home/Group6.svg"
            height={180}
            width={200}
            alt="graphics page logo"
            className="object-cover -rotate-[30deg] hover:animate-scale"
          />
        </Link>

        {/* Logo link */}
        <Link
          href="/logo"
          className="lg:hidden rounded-lg px-[37px] py-6 bg-[#C3C3C3]/30"
        >
          <Image
            src="/assets/home/Group8.svg"
            height={180}
            width={200}
            alt="logo page logo"
            className="object-cover rotate-[150deg] hover:animate-scale"
          />
        </Link>

        {/* Branding link */}
        <Link
          href="/branding"
          className="lg:hidden rounded-lg px-[26px] py-[37px] bg-[#C3C3C3]/30"
        >
          <Image
            src="/assets/home/Group9.svg"
            height={180}
            width={220}
            alt="branding page logo"
            className="object-cover -rotate-[120deg] hover:animate-scale"
          />
        </Link>

        {/* ui/ux link */}
        <Link
          href="/uiux"
          className="lg:hidden rounded-lg px-[26px] py-[37px] bg-[#C3C3C3]/70"
        >
          <Image
            src="/assets/home/Group7.svg"
            height={180}
            width={220}
            alt="ui/ux page logo"
            className="object-cover rotate-[60deg] hover:animate-scale"
          />
        </Link>
      </section>
    </>
  );
};

export default Home;
