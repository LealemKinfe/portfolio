export type param = {
  params: { section: string };
};

export type params = {
  params: { section: string; project: string };
};

export type card = {
  imgSrc: string;
  title: string;
  link: string;
};

export type project = {
  name: string;
  client: string;
  about: string;
  imgUrl: string;
  caseStudy: string;
  demo: string;
  youtubeLink: string;
  demoLink: string;
};