import type { NextPage } from "next";
import Image from "next/image";
import {
  FaEnvelope,
  FaGithubSquare,
  FaGlobeAsia,
  FaLinkedin,
} from "react-icons/fa";

import ThemeSelect from "lib/components/layout/ThemeSelect";

const Home: NextPage = () => {
  return (
    <div className="mx-auto">
      <div className="hero">
        <div className="hero-content flex-col gap-10 lg:flex-row">
          <Image
            src="/assets/profile-picture.jpg"
            alt="profile picture"
            className="rounded-full"
            width={240}
            height={240}
          />
          <div>
            <div className="flex flex-row items-center justify-center gap-6 text-center lg:justify-start lg:gap-12">
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
                target="_blank"
                rel="noreferrer noopener"
                className="font-bold text-info hover:underline"
              >
                CMC Global
              </a>{" "}
              in Viet Nam. Thank you for visiting my personal resume website!
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
