import Image from "next/image";
import {
  FaEnvelope,
  FaGithubSquare,
  FaGlobeAsia,
  FaLinkedin,
  FaSkype,
} from "react-icons/fa";

import ThemeSelect from "lib/components/layout/ThemeSelect";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-content flex-col gap-10 lg:flex-row">
        <Image
          src="/assets/profile-picture.jpg"
          alt="profile picture"
          className="rounded-full"
          width={225}
          height={225}
        />
        <div>
          <div className="flex flex-col items-center justify-center gap-4 text-center lg:flex-row lg:justify-start lg:gap-12">
            <h1 className="text-3xl font-bold lg:text-4xl">
              Phúc &apos;Scott&apos; Nguyễn
            </h1>
            <ThemeSelect />
          </div>
          <p className="max-w-xl py-6 text-center lg:text-left">
            <b>Junior Front-end Developer</b> for{" "}
            <a
              href="https://cmcglobal.com.vn"
              aria-label="CMC Global"
              rel="noreferrer noopener"
              className="font-bold text-primary hover:underline"
            >
              CMC Global
            </a>{" "}
            in Viet Nam. Thank you for visiting my resume website!
          </p>
          <div className="flex justify-center gap-5 lg:justify-start">
            <a
              href="mailto:phuc.nguyen-the@outlook.com"
              className="justify-center hover:text-primary"
              aria-label="My email address"
              target="_blank"
              rel="noreferrer"
            >
              <FaEnvelope size={32} />
            </a>
            <a
              href="https://github.com/NationsAnarchy"
              className="justify-center hover:text-primary"
              aria-label="My Github repository"
              target="_blank"
              rel="noreferrer noopener"
            >
              <FaGithubSquare size={32} />
            </a>
            <a
              href="https://phucnguyen0110.vercel.app"
              className="justify-center hover:text-primary"
              aria-label="My personal blog"
              target="_blank"
              rel="noreferrer noopener"
            >
              <FaGlobeAsia size={32} />
            </a>
            <a
              href="https://linkedin.com/in/phucnguyen0110"
              className="justify-center hover:text-primary"
              aria-label="My LinkedIn profile"
              target="_blank"
              rel="noreferrer noopener"
            >
              <FaLinkedin size={32} />
            </a>
            <a
              href="skype:live:phuc.nguyen-the?add"
              className="justify-center hover:text-primary"
              aria-label="My Skype account"
              target="_blank"
              rel="noreferrer noopener"
            >
              <FaSkype size={32} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
