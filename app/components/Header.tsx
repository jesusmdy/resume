import { FC } from "react";
import GlobeIcon from "./icons/Globe";
import { MailIcon } from "./icons/Mail";
import { PhoneIcon } from "./icons/Phone";
import { LinkedInIcon } from "./icons/LinkedIn";
import { XIcon } from "./icons/X";
import { GitHubIcon } from "./icons/GitHub";

const Location: FC = () => {
  return (
    <a
      href="https://www.google.com/maps/place/Maturin"
      target="_self"
      className="flex gap-1 text-xs items-center"
    >
      <GlobeIcon className="w-4 h-4" />
      <span>Maturin, Venezuela - GMT-4</span>
    </a>
  )
};

const Socials: FC = () => {
  const socials = [
    {
      label: 'Email',
      url: 'mailto:jesusmarcanody@gmail.com',
      icon: MailIcon
    },
    {
      label: 'Phone',
      url: 'tel:+584147619963',
      icon: PhoneIcon
    },
    {
      label: 'LinkedIn',
      url: 'https://www.linkedin.com/in/jesusmdy/',
      icon: LinkedInIcon
    },
    {
      label: 'X (formerly Twitter',
      url: 'https://x.com/jesusmdy',
      icon: XIcon
    },
    {
      label: 'GitHub',
      url: 'https://github.com/jesusmdy',
      icon: GitHubIcon
    }
  ];
  return (
    <ul className="flex mt-4 gap-2">
      {
        socials.map(
          (social, index) => (
            <li key={index}>
              <a
                href={social.url}
                className="p-2 border rounded-lg block hover:bg-gray-100"
                target="_blank"
              >
                <social.icon className="w-4 h-4 text-gray-700" />
              </a>
            </li>
          )
        )
      }
    </ul>
  );
};

const Header: FC = () => {
  return (
    <section className="mt-16">
      <article className="flex items-center gap-8">
        <div className="flex-1">
          <h1 className="font-extrabold text-4xl">Jesus Marcano</h1>
          <p className="text-md text-gray-700">
            Front-end developer building amazing user experiences.
          </p>
          <Location />
          <Socials />
        </div>
        <img
          src="https://avatars.githubusercontent.com/u/26631510?v=4"
          alt="jesusmdy's profile picture"
          className="w-32 h-32 rounded-xl shadow-md"
        />
      </article>
    </section>
  )
};

export default Header;