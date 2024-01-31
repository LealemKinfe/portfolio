"use client";

import Lottie from "lottie-react";
import photoshop from "@/public/assets/about/icons8-adobe-photoshop.json";
import illustrator from "@/public/assets/about/icons8-adobe-illustrator.json";
import indesign from "@/public/assets/about/icons8-adobe-indesign.json";
import xd from "@/public/assets/about/icons8-adobe-xd.json";
import figma from "@/public/assets/about/icons8-figma.json";

const PhotoshopAnimation = () => {
  return <Lottie animationData={photoshop} loop={true} />;
};

const IllustratorAnimation = () => {
  return <Lottie animationData={illustrator} loop={true} />;
};

const IndesignAnimation = () => {
  return <Lottie animationData={indesign} loop={true} />;
};

const XdAnimation = () => {
  return <Lottie animationData={xd} loop={true} />;
};

const FigmaAnimation = () => {
  return <Lottie animationData={figma} loop={true} />;
};

export {
  PhotoshopAnimation,
  IllustratorAnimation,
  IndesignAnimation,
  XdAnimation,
  FigmaAnimation,
};
