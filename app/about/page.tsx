import Image from "next/image";

const page = () => {
  return (
    <section className="bg-white w-full h-auto flex flex-col md:flex-row-reverse justify-around p-5 gap-8 lg:overflow-auto z-10 text-[#3E3E3E]">
      <div className="mx-auto">
        <h1 className="text-5xl font-extrabold my-5">Lealem Kinfe</h1>

        <h2 className="text-3xl font-bold my-5">
          Computer Engineer | UI/UX Designer | <br /> Graphics Designer
        </h2>

        <h3 className="text-3xl font-bold border-b-2 pb-4 border-[#3E3E3E] mb-3 max-w-64">
          About
        </h3>

        <div className="max-w-xl leading-10">
          <p>
            Lealem Knife is a passionate space enthusiast who has been actively
            involved in the Ethiopian Space Science Society for over 5 years. He
            has served as the Graphics and Social Media manager, founded the
            Rotaract Balageru Club, and contributed his UI/UX design skills to
            various projects. His dedication to design excellence earned him the
            Youth Space Ambassador Award in 2021.
          </p>

          <p>
            Lealem is also a talented computer engineer, winning the best
            project award for his thesis on revolutionizing Ethiopia's public
            transportation system. He currently works as the Marketing Manager
            at ESSS while continuously expanding his knowledge in graphic
            design, user interface, and web development.
          </p>

          <p>
            In addition to his professional achievements, Lealem is also
            committed to education. He and his colleague at ESSS won a satellite
            tracking kit for the Space Generation Advisory Council's SatNOGS
            project, which they used to educate high school students about
            satellite communication.
          </p>
        </div>
      </div>

      <div className="flex items-center justify-around gap-5 md:block flex-wrap">
        <Image
          src="/assets/about/Group257.png"
          width={300}
          height={300}
          alt="Lealem Kinfe's profile picture"
        />

        {/* Contact */}
        <div className="my-10">
          <h3 className="text-3xl font-bold border-b-2 pb-4 border-[#3E3E3E] mb-3">
            My Contact
          </h3>

          <ul className="*:mt-4 text-xl">
            <li>lealem.alula@gmail.com</li>
            <li>lealem.kinfe@aait.edu.et</li>
            <li>Addis Ababa, Ethiopia</li>
            <li>+251 712 367700</li>
            <li>+251 970 367 700</li>
            <li>ethiosss.org/esss-team</li>
          </ul>
        </div>

        {/* Education Background */}
        <div className="my-10">
          <h3 className="text-3xl font-bold border-b-2 pb-4 border-[#3E3E3E] mb-3">
            Education Background
          </h3>

          <ul className="*:mt-4 text-xl">
            <li className="font-semibold">
              Addis Ababa Institute of Technology
            </li>
            <li>Electrical and Computer Engineering </li>
            <li>2018 - 2023</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default page;
