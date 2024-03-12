export const Footer = () => {
  return (
    <div>
      <div className="mb-40 md:mb-96 md:p-8">
        <p className="text-font-color-secondary text-sm w-65">
          Designed and coded by yours truly. Built with{" "}
          <a
            className="hover:text-font-color-primary text-green-primary cursor-pointer"
            href="https://nextjs.org/"
            rel="noopener noreferrer"
            target="_blank"
          >
            Next.js
          </a>
          <span> </span>
          and
          <span> </span>
          <a
            className="hover:text-font-color-primary text-green-primary cursor-pointer"
            href="https://tailwindcss.com/"
            rel="noopener noreferrer"
            target="_blank"
          >
            TailwindCSS
          </a>
          , deployed with<span> </span>
          <a
            className="hover:text-font-color-primary text-green-primary cursor-pointer"
            href="https://vercel.com/"
            rel="noopener noreferrer"
            target="_blank"
          >
            Vercel
          </a>
          .
        </p>
        <p className="mt-6 text-font-color-secondary text-sm">
          {" "}
          &copy; {new Date().getFullYear()} Iván Urra
        </p>
      </div>
    </div>
  );
};
