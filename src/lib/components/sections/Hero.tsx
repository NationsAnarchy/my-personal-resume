import Image from "next/image";
import {
  FaEnvelope,
  FaGithubSquare,
  FaGlobeAsia,
  FaLinkedin,
  FaSkype,
} from "react-icons/fa";

import LinkComponent from "lib/components/contents/LinkComponent";
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
            <b>Junior/Mid Front-end Developer</b> for{" "}
            <LinkComponent
              href="https://cmcglobal.com.vn"
              ariaLabel="CMC Global"
            >
              {" "}
              <span className="font-bold">CMC Global</span>
            </LinkComponent>{" "}
            in Viet Nam. Thank you for visiting my resume website!
          </p>
          <div className="flex justify-center gap-5 lg:justify-start">
            <LinkComponent
              href="mailto:phuc.nguyen-the@outlook.com"
              ariaLabel="My email address"
            >
              <FaEnvelope size={32} />
            </LinkComponent>
            <LinkComponent
              href="https://github.com/NationsAnarchy"
              ariaLabel="My Github repository"
            >
              <FaGithubSquare size={32} />
            </LinkComponent>
            <LinkComponent
              href="https://phucnguyen0110.vercel.app"
              ariaLabel="My personal blog"
            >
              <FaGlobeAsia size={32} />
            </LinkComponent>
            <LinkComponent
              href="https://linkedin.com/in/phucnguyen0110"
              ariaLabel="My LinkedIn profile"
            >
              <FaLinkedin size={32} />
            </LinkComponent>
            <LinkComponent
              href="skype:live:phuc.nguyen-the?add"
              ariaLabel="My Skype account"
            >
              <FaSkype size={32} />
            </LinkComponent>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
