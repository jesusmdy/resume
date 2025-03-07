import { FC } from "react";
import GlobeIcon from "./icons/Globe";
import { MailIcon } from "./icons/Mail";
import { PhoneIcon } from "./icons/Phone";
import { LinkedInIcon } from "./icons/LinkedIn";
import { XIcon } from "./icons/X";
import { GitHubIcon } from "./icons/GitHub";
import ThemeSwitch from './ThemeSwitch';

const Location: FC = () => {
  return (
    <a
      href="https://www.google.com/maps/place/Maturin"
      target="_blank"
      className="flex gap-1 text-xs items-center mt-2"
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
      url: 'mailto:contact@jesusmdy.dev',
      icon: MailIcon
    },
    {
      label: 'Phone',
      url: 'https://wa.me/+584124844990',
      icon: PhoneIcon
    },
    {
      label: 'LinkedIn',
      url: 'https://www.linkedin.com/in/jesusmdy/',
      icon: LinkedInIcon
    },
    {
      label: 'X',
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
                className="p-2 border rounded-lg block hover:bg-gray-100 dark:border-zinc-700 dark:hover:bg-zinc-800"
                target="_blank"
              >
                <social.icon className="w-4 h-4 text-gray-700 dark:text-zinc-300" />
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
    <section className="mt-16 print:mt-0">
      <article className="flex flex-col-reverse md:flex-row items-center gap-8 print:flex-row">
        <ThemeSwitch />
        <div className="flex-1">
          <h1 className="font-extrabold text-4xl">Jesus Marcano</h1>
          <p className="text-md text-gray-700 dark:text-gray-300">
            Frontend developer building amazing user experiences.
          </p>
          <Location />
          <Socials />
        </div>
        <img
          src="https://avatars.githubusercontent.com/u/26631510?v=4"
          alt="jesusmdy's profile picture"
          className="w-32 h-32 rounded-full md:rounded-xl shadow-md print:hidden"
        />
      </article>
    </section>
  )
};

export default Header;