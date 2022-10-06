const Footer = () => {
  return (
    <footer className="footer items-center bg-neutral p-4 text-neutral-content">
      <div className="grid-flow-col items-center">
        <p>
          Forked from{" "}
          <a
            href="https://github.com/sozonome/nextarter-tailwind"
            target="_blank"
            rel="noreferrer noopener"
            className="font-bold hover:underline"
          >
            nextarter-tailwind by @sozonome
          </a>{" "}
          on GitHub
        </p>
      </div>
      <div className="grid-flow-col md:place-self-center md:justify-self-end">
        Powered by Next, TypeScript, Tailwind, Daisy, Vercel
      </div>
    </footer>
  );
};

export default Footer;
