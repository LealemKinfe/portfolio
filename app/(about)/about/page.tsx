import Image from "next/image";
import { ibm } from "@/app/lib/fonts";
import SideBar from "@/app/ui/SideBar";
import Skills from "@/app/ui/Skills";
import Contact from "@/app/ui/Contact";

const page = () => {
  return (
    <main>
      <section className="lg:flex w-full text-[#EBF9E3] bg-[#2F2F2F] relative overflow-y-hidden xl:min-h-screen max-h-max">
        <Image
          src="/assets/Group1.svg"
          width={2000}
          height={1000}
          alt="background vector"
          className="hidden lg:block absolute object-contain top-0 left-0 right-0 bottom-0"
        />

        <SideBar />

        <div className="grow px-10 py-2 pt-5 relative">
          <div className="md:flex items-center gap-20 w-full mb-10">
            <div className="relative max-w-max">
              <Image
                src="/assets/about/Group257.png"
                height={150}
                width={200}
                alt="A photo of lealem kinfe"
              />

              <Image
                src="/assets/about/Ellipse2.svg"
                height={150}
                width={200}
                alt="A photo of lealem kinfe"
                className="absolute -top-2 -right-3"
              />
            </div>

            <div className="grow">
              <Image
                src="/assets/about/LealemKinfe.png"
                width={400}
                height={100}
                alt="name"
                className="object-cover mb-5"
              />

              <p className="text-4xl font-bold leading-10 my-5">
                Computer Engineer | UI/UX Designer | <br /> Graphics Designer
              </p>
            </div>
          </div>

          <div className="md:flex xl:gap-28 gap-10 items-start md:mt-10">
            <Image
              src="/assets/about/About.png"
              width={140}
              height={210}
              alt="about image"
              className="md:hidden -rotate-90 -mt-20 ml-[90px]"
            />

            <p className="min-[1120px]:max-w-xl max-w-xl lg:max-w-3xl leading-10 -mt-16 md:mt-0">
              <span className={ibm.className}>
                Graduated from Addis Ababa Institute of Technology in
              </span>{" "}
              <span className="text-4xl font-bold">Computer Engineering</span>,{" "}
              <span className={ibm.className}>
                {" "}
                Lealem Knife is a passionate
              </span>{" "}
              <span className="text-4xl font-bold">Space Enthusiast</span>
              <span className={ibm.className}>
                {" "}
                who has been actively involved in the
              </span>
              <span className="text-xl font-bold">
                {" "}
                Ethiopian Space Science Society
              </span>{" "}
              <span className={ibm.className}>
                {" "}
                for over 5 years. He has served as the
              </span>
              <span className="text-4xl font-bold"> Graphics Designer</span>
              <span className={ibm.className}> and</span>{" "}
              <span className="text-4xl font-bold">Social Media manager</span>,{" "}
              <span className={ibm.className}>
                founded the Rotaract Balageru Club, and contributed his
              </span>{" "}
              <span className="text-4xl font-bold">UI/UX design</span>
              <span className={ibm.className}>
                {" "}
                skills to various projects. His dedication to design excellence
                earned him the{" "}
              </span>
              <span className="text-3xl font-bold">
                Youth Space Ambassador Award in 2021
              </span>
              .
            </p>

            <Image
              src="/assets/about/About.png"
              width={140}
              height={210}
              alt="about image"
              className="hidden md:block lg:hidden min-[1120px]:block"
            />
          </div>
        </div>
      </section>

      {/* Skills section */}
      <Skills />

      {/* Contact section */}
      <Contact />
    </main>
  );
};

export default page;
