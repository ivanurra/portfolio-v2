import { ButtonCV } from "@components/ButtonCV";
import { Navigation } from "@components/Navigation";
import { SocialMedia } from "@components/SocialMedia";

export const Hero = () => {
  return (
    <>
      <p className="text-4xl font-bold text-font-color-primary">Iván Urra</p>
      <p className="text-xl mt-2 text-font-color-primary">
        Full Stack Web & DevOps Developer
      </p>
      <div className="overflow-y-auto">
        <Navigation />
        <ButtonCV buttonCvText="Resume" />
        <SocialMedia />
      </div>
    </>
  );
};
