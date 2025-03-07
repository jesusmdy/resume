import { FC } from 'react';

const projectList = [
  {
    id: 'claracard',
    name: 'Clara Card',
    description: 'Working on new features for the users section at Clara Card.',
    link: 'https://www.clara.com/',
    tags: ['React', 'Typescript', 'Auth0']
  },
  {
    id: 'simmplemx',
    name: 'SimmpleMX',
    description: 'Integrate cutting-edge features to the complex web application that was being used by customers.',
    link: 'https://simmple.mx/',
    tags: ['React', 'Typescript', 'Redux']
  },
  {
    id: 'growthsport',
    name: 'Growth-Sport',
    description: 'Integrate new features to existing web applications that were being used by customers.',
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
    description: 'Contribute to the development of the My Path web application.',
    link: null,
    tags: ['NextJS', 'Typescript', 'Redux', 'GraphQL', 'Jest']
  },
  {
    id: 'injuryvalues',
    name: 'Injury Values',
    description: 'Started the client-side application from scratch, using NextJS.',
    link: 'https://injuryvalues.com/',
    tags: ['NextJS', 'Typescript', 'ChakraUI',]
  },
  {
    id: 'stacksproject',
    name: 'Stacks Management',
    description: 'Created a NextJS application to manage my tasks and keep track of my time.',
    link: 'https://stacksproject.netlify.app/',
    tags: ['NextJS', 'Typescript',]
  }
];

const Project: FC<{ project: typeof projectList[0] }> = ({ project }) => {

  const titleClasses = 'font-bold mb-2 text-sm flex-1';
  return (
    <li >
      <div className="border rounded-lg p-2 flex flex-col print:p-0 print:border-none dark:border-zinc-700 dark:bg-zinc-800">
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
        <p className="text-[11px] font-mono dark:text-zinc-400">{project.description}</p>
        <ul className="flex gap-2 mt-2 flex-wrap">
          {
            project.tags.map(tag => 
              <li key={tag} className="rounded-md border font-semibold font-mono border-transparent bg-gray-100 px-1 py-0 text-[10px] print:p-0 dark:bg-zinc-900 dark:text-zinc-400">{tag}</li>
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