export const Credits = () => {
  return (
    <div className="mb-20 md:mb-60 md:p-8">
      <p className="text-font-color-terciary">
        Designed and coded by yours truly. Built with{" "}
        <a
          className="text-font-color-secondary hover:text-green-primary cursor-pointer"
          href="https://nextjs.org/"
          target="_blank"
        >
          Next.js
        </a>
        <span> </span>
        and
        <span> </span>
        <a
          className="text-font-color-secondary hover:text-green-primary cursor-pointer"
          href="https://tailwindcss.com/"
          target="_blank"
        >
          TailwindCSS
        </a>
        , deployed with<span> </span>
        <a
          className="text-font-color-secondary hover:text-green-primary cursor-pointer"
          href="https://vercel.com/"
          target="_blank"
        >
          Vercel
        </a>
        .
      </p>
    </div>
  );
};
