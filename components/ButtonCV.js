export const ButtonCV = ({ buttonCvText }) => {
  return (
    <div className="mt-14">
      <a
        className="cta-resume"
        href="/resumeivanurra.pdf"
        rel="noopener noreferrer"
        target="_blank"
      >
        <button className="rounded-full bg-green-primary hover:bg-font-color-primary text-black w-32 h-9">
          {buttonCvText}
        </button>
      </a>
    </div>
  );
};
