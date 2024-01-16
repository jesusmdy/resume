import { FC, Fragment } from "react";

interface ExperienceInterface {
  label: string;
  year: string;
  title: string;
  description: string;
  tasks?: string[];
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
              <span className="text-xs bg-gray-200 text-gray-700 py-1 px-2 font-bold rounded-lg dark:bg-zinc-800 dark:text-zinc-400">Remote</span>
            )
          }
        </div>
        <p className="text-xs text-gray-600 px-4 py-2 bg-none md:bg-gray-50 font-semibold rounded-xl dark:bg-zinc-800 dark:text-zinc-400">{item.year}</p>
      </div>
      <h5 className="text-sm">{item.title}</h5>
      <ul className="list-disc flex flex-col gap-1">
        {
          item.tasks && item.tasks.map(task => (
            <li key={task} className="ml-3 text-xs font-mono text-gray-600 dark:text-zinc-400">{task}</li>
          ))
        }
      </ul>
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
      year: '03/2020 - 04/2021',
      description: 'I started my career as a freelancer in 2020, where I worked on a variety of projects.',
      tasks: [
        "Worked to deliver high-quality custom web applications with advanced technologies.",
        "Reworked an existing web sales application and improved user experience & customer engaging.",
        "Direct contact with client's requirements and suggestions.",
        "Managed to achieve customer satisfaction in product expectation."
      ]
    },
    {
      label: 'Resultier',
      title: 'Frontend developer',
      year: '02/2022 - 01/2024',
      description: 'I joined Resultier as a front-end developer in 2022. I worked on a variety of projects that lead me to become the lead front-end developer in the same year. Having the opportunity to work with a variety of clients, I learned a lot about the importance of communication and teamwork.',
      isRemote: true,
      tasks: [
        "Worked in SASS that helped to save client's time when doing taxes.",
        "Meticulously translated the client's vision into code, ensuring every feature and functionality was implemented flawlessly.",
        "Integrate new features to existing web applications that were being used by customers.",
        "Leaded the frontend team and managed to deliver a product with great quality.",
        "Optimize larger applications and improve user experience and web performance.",
        "Introduced and implement new design system.",
        "Start a project from scratch and make it scalable for future developers.",
        "Direct contact with client's concerns and suggestions about the workflow.",
        "Lead the demo & product presentation of different projects.",
        "Implement payment system and subscription flow.",
        "Worked with the design team to integrate new features and improve the existing ones.",
        "Developed a custom UI library that increased developer productivity and code reuse.",
        "Integrate pipelines & automate developing workflow to save time when deploying comes."
      ]
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