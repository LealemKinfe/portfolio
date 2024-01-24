import { projectData } from "@/app/lib/data";
import { params, project } from "@/types";
import Image from "next/image";

const page = ({ params }: params) => {
  const sec = params.section;
  const proj = params.project;
  const sections = ["uiux", "graphics", "branding", "logo"];
  const projects = [
    "projectesss",
    "projectablaze",
    "projectkts",
    "projecteskc",
    "projectmadeya",
  ];

  if (!sections.includes(sec) || !projects.includes(proj)) {
    return (
      <div className="w-full grid place-items-center bg-white z-10">
        <h1 className="font-bold text-4xl">Page Not Found</h1>
      </div>
    );
  }

  const projectInfo: project = projectData[proj];

  return (
    <section className="w-full h-auto gap-5 p-10 lg:overflow-auto lg:pt-10 z-10 bg-white text-[#3E3E3E]">
      {/* Project name */}
      <div className="my-7">
        <h1 className="font-bold text-2xl inline md:text-4xl leading-10">
          Project Name:
        </h1>
        <p className="text-xl md:text-2xl ml-2 md:ml-5 inline">
          {projectInfo.name}
        </p>
      </div>

      {/* Client */}
      <div className="gap-4 my-7">
        <h1 className="font-bold inline text-2xl md:text-4xl leading-10">
          Client:
        </h1>
        <p className="text-xl inline ml-2 md:ml-5 md:text-2xl">
          {projectInfo.client}
        </p>
      </div>

      {/* About the project */}
      <div className=" my-7">
        <h1 className="font-bold text-2xl md:text-4xl leading-10">
          About the Project:
        </h1>
        <p className="text-xl md:text-2xl max-w-4xl p-4">{projectInfo.about}</p>
      </div>

      {/* Project image */}
      <Image
        src={projectInfo.imgUrl}
        height={800}
        width={1000}
        alt={`${projectInfo.name} image`}
        className="w-full lg:px-20"
      />

      {/* Case study */}
      <div className=" my-7">
        <h1 className="font-bold text-2xl md:text-4xl leading-10">
          Case Study:
        </h1>
        <p className="text-xl md:text-2xl max-w-4xl p-4">
          {projectInfo.caseStudy}
        </p>
      </div>

      {/* Demo */}
      <div className=" my-7">
        <h1 className="font-bold text-2xl md:text-4xl leading-10">Demo:</h1>
        <p className="text-xl md:text-2xl max-w-4xl p-4">{projectInfo.demo}</p>
      </div>
    </section>
  );
};

export default page;
