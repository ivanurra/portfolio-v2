export const ButtonCV = ({ buttonCvText }) => {
  return (
    <div className="mt-14">
      <a className="cta-resume" target="_blank" href="/resumeivanurra.pdf">
        <button className="rounded-full bg-green-primary hover:bg-font-color-primary text-black w-32 h-9">
          {buttonCvText}
        </button>
      </a>
    </div>
  );
};
