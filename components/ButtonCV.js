export const ButtonCV = ({ buttonCvText }) => {
  return (
    <div className="mt-14">
      <a
        className="cta-resume"
        href="/resumeivanurra.pdf"
        rel="noopener noreferrer"
        target="_blank"
      >
        <button className="rounded-full bg-green-primary hover:bg-font-color-primary text-black w-32 h-9 flex items-center justify-center space-x-2">
          <span>{buttonCvText}</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-download"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="#2c3e50"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2" />
            <path d="M7 11l5 5l5 -5" />
            <path d="M12 4l0 12" />
          </svg>
        </button>
      </a>
    </div>
  );
};
