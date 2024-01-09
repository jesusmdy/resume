import { FC } from 'react';

const projectList = [
  {
    id: 'simmplemx',
    name: 'SimmpleMX',
    description: 'The application is used by mexicans to keep a control of their taxes.',
    link: 'https://simmple.mx/',
    tags: ['React', 'Typescript', 'Redux']
  },
  {
    id: 'growthsport',
    name: 'Growth-Sport',
    description: 'The application is used by companies to keep control of their growing during the year.',
    link: 'https://growth-sport.com/',
    tags: ['NextJS', 'Typescript', 'Redux']
  },
  {
    id: 'zuki',
    name: 'Zuki',
    description: 'Acted as the front-end leader helping my team to build the Zuki web application.',
    link: null,
    tags: ['NextJS', 'Typescript', 'Redux',]
  },
  {
    id: 'mypath',
    name: 'My Path',
    description: 'The application is used by students to learn different topics in a fun way.',
    link: null,
    tags: ['NextJS', 'Typescript', 'Redux', 'GraphQL', 'Jest']
  },
  {
    id: 'injuryvalues',
    name: 'Injury Values',
    description: 'The application is used to get an estimate of the value of an injury during a car accident.',
    link: 'https://injuryvalues.com/',
    tags: ['NextJS', 'Typescript', 'ChakraUI',]
  },
  {
    id: 'myplanetweight',
    name: 'My Planet Weight',
    description: 'The application is used to get an estimate of your weight in other planets.',
    link: 'https://planetcalculator.netlify.app/',
    tags: ['NextJS', 'Typescript',]
  },
  {
    id: 'Niton',
    name: 'Niton',
    description: 'Excel-like web application built with React and Typescript.',
    link: null,
    tags: ['NextJS', 'Typescript', 'Redux',]
  }
];

const Project: FC<{ project: typeof projectList[0] }> = ({ project }) => {

  const titleClasses = 'font-bold mb-2 text-sm flex-1';
  return (
    <li >
      <div className="border rounded-lg p-2 flex flex-col print:p-0 print:border-none">
        <div className="flex items-start">
          {
            project.link
              ? <a href={project.link} target="_blank" rel="noreferrer" className={titleClasses}>{project.name}</a>
              : <span className={titleClasses}>{project.name}</span> 
          }
          {
            project.link && (
              <span className="w-1 h-1 bg-green-500 block rounded-xl print:hidden" />
            )
          }
        </div>
        <p className="text-[11px] font-mono">{project.description}</p>
        <ul className="flex gap-2 mt-2 flex-wrap">
          {
            project.tags.map(tag => 
              <li key={tag} className="rounded-md border font-semibold font-mono border-transparent bg-gray-100 px-1 py-0 text-[10px] print:p-0">{tag}</li>
            )
          }
        </ul>
      </div>
    </li>
  )
};

const Projects: FC = () => {

  return (
    <div className="mt-16 print:mt-4 mb-16 print:mb-0">
      <h4 className="text-2xl font-bold mb-4 flex-1">Projects</h4>
      <ul className="grid grid-cols-1 md:grid-cols-3 gap-4 print:flex print:flex-col">
        {
          projectList.map(project => (
            <Project key={project.id} project={project} />
          ))
        }
      </ul>
      <p className="mt-4 text-[10px] font-mono text-gray-500 print:hidden">* Some of the projects are not available to the public</p>
    </div>
  )
};

export default Projects;