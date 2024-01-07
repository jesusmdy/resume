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
        <p className="text-xs text-gray-600 px-4 py-2 bg-gray-50 font-semibold rounded-xl">{item.year}</p>
      </div>
      <h5 className="text-sm">{item.title}</h5>
      <p className="text-gray-600 max-w-[80%] text-xs font-mono">{item.description}</p>
    </article>
  );
};

const Experience: FC = () => {
  const experiences: ExperienceInterface[] = [
    {
      label: 'Mid-Technician in Informatics Sciences Graduate',
      title: 'Intern Full Stack developer',
      year: '2019',
      description: 'Mastered my skills with algorithms and data structures, databases and programming logic. I also learned the basics of web development, including HTML, CSS, and JavaScript. I completed a 3-month internship at a local company, where I developed a web application for managing the company’s internal processes.',
    },
    {
      label: 'Freelancer',
      title: 'Full Stack developer',
      year: '2020 - 2021',
      description: 'I started my career as a freelancer in 2020, where I worked on a variety of projects.',
    },
    {
      label: 'Resultier / Atomic32',
      title: 'Front-end developer -> Lead front-end developer',
      year: '2022 - 2024',
      description: 'I joined Resultier (formerly Atomic32) as a front-end developer in 2022. I worked on a variety of projects that lead me to become the lead front-end developer in the same year. Having the opportunity to work with a variety of clients, I learned a lot about the importance of communication and teamwork.',
      isRemote: true
    }
  ];
  return (
    <Fragment>
      <section className="mt-16 mb-4 print:my-4">
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