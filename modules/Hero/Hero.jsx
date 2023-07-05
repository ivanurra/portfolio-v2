import { ButtonCV, Navigation, SocialMedia } from "../../components";

export const Hero = () => {
  return (
    <div>
      <p className="text-4xl font-bold text-font-color-primary">Iván Urra</p>
      <p className="text-2xl mt-2 text-font-color-primary">
        DevOps & Full Stack Web Developer
      </p>
      <div className="overflow-y-auto">
        <Navigation />
        <ButtonCV />
        <SocialMedia />
      </div>
    </div>
  );
};
