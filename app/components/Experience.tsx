import { FC, Fragment } from "react";

interface ExperienceInterface {
  label: string;
  year: string;
  title: string;
  description: string;
  isRemote?: boolean
}

const ExperienceItem: FC<{
  item: ExperienceInterface
}> = ({ item }) => {
  return (
    <article className="flex flex-col gap-2">
      <div className="flex">
        <div className="flex items-center flex-1 gap-2">
          <h4 className="text-lg font-bold">{item.label}</h4>
          {
            item.isRemote && (
              <span className="text-xs bg-gray-200 text-gray-700 py-1 px-2 font-bold rounded-lg">Remote</span>
            )
          }
        </div>
        <p className="text-sm text-gray-600">{item.year}</p>
      </div>
      <h5 className="text-sm">{item.title}</h5>
      <p className="text-gray-600 max-w-[80%] text-sm">{item.description}</p>
    </article>
  );
};

const Experience: FC = () => {
  const experiences: ExperienceInterface[] = [
    {
      label: 'Mid-Technician in Informatics Sciences Graduate',
      title: 'Intern Full Stack developer',
      year: '2019',
      description: 'Mastered algorithms, database management, and web development. Assisted peers, fostering a collaborative learning environment. Excited to apply skills and contribute to the tech field',
    },
    {
      label: 'Freelancer',
      title: 'Full Stack developer',
      year: '2020 - 2021',
      description: 'I successfully completed diverse projects for clients across Latin America, encompassing online stores, blogs, and custom applications. My expertise in various technologies helped me deliver tailored solutions, including engaging e-commerce platforms, interactive blogs, and customized applications to streamline client workflows. This experience fostered strong client relationships and solidified my commitment to exceeding expectations.',
    },
    {
      label: 'Resultier / Atomic32',
      title: 'Front-end developer -> Lead front-end developer',
      year: '2022 - 2024',
      description: 'I joined Resultier/Atomic32 in 2022 as a front-end developer and have since contributed to a diverse range of projects. My work has spanned educational platforms, gamified systems, and productivity tools, including an online school system that facilitates engaging learning, an NFT-based game with token rewards, a company growth tracker with detailed metrics, and an accountability platform designed for ease and enjoyment.',
      isRemote: true
    }
  ];
  return (
    <Fragment>
      <section className="mt-16 mb-4">
        <h3 className="text-2xl font-bold">Experience</h3>
      </section>
      <section className="flex flex-col gap-4">
        {
          experiences.reverse().map(
            experience => (
              <ExperienceItem item={experience} key={experience.year} />
            )
          )
        }
      </section>
    </Fragment>
  );
};

export default Experience;