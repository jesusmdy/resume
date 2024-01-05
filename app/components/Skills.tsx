import { FC } from "react";

const skillsPyramid = [
  {
    id: 'html',
    label: 'HTML',
    children: [
      {
        id: 'jsx',
        label: 'JSX',
      },
    ]
  },
  {
    id: 'css',
    label: 'CSS',
    children: [
      {
        id: 'frameworks',
        label: 'Frameworks',
        children: [
          {
            id: 'bootstrap',
            label: 'Bootstrap',
          },
          {
            id: 'material-ui',
            label: 'Material UI',
          },
          {
            id: 'tailwind',
            label: 'Tailwind',
          },
        ]
      },
      {
        id: 'preprocessors',
        label: 'Preprocessors',
        children: [
          {
            id: 'sass',
            label: 'Sass',
          },
          {
            id: 'stylus',
            label: 'Stylus',
          }
        ]
      }
    ]
  },
  {
    id: 'js',
    label: 'JavaScript',
    children: [
      {
        id: 'nextjs',
        label: 'NextJS',
        children: [
          {
            id: 'styling',
            label: 'Styling',
            children: [
              {
                id: 'css-modules',
                label: 'CSS Modules',
              },
              {
                id: 'ChakraUI',
                label: 'Chakra UI',
              },
              {
                id: 'MaterialUI',
                label: 'Material UI',
              },
              {
                id: 'styled-components',
                label: 'Styled Components',
              },
              {
                id: 'tailwind',
                label: 'Tailwind',
              },
            ]
          },
          {
            id: 'state-management',
            label: 'State Management',
            children: [
              {
                id: 'redux',
                label: 'Redux',
              },
              {
                id: 'react-query',
                label: 'React Query',
              },
              {
                id: 'react-hooks',
                label: 'React Hooks',
              },
              {
                id: 'react-context',
                label: 'React Context',
              }
            ]
          },
          {
            id: 'testing',
            label: 'Testing',
            children: [
              {
                id: 'jest',
                label: 'Jest',
              },
              {
                id: 'react-testing-library',
                label: 'React Testing Library',
              },
              {
                id: 'cypress',
                label: 'Cypress',
              }
            ]
          },
          {
            id: 'routing',
            label: 'Routing',
            children: [
              {
                id: 'react-router',
                label: 'React Router',
              },
              {
                id: 'reach-router',
                label: 'Reach Router',
              }
            ]
          },
          {
            id: 'data-fetching',
            label: 'Data Fetching',
            children: [
              {
                id: 'axios',
                label: 'Axios',
              },
              {
                id: 'react-query',
                label: 'React Query',
              },
              {
                id: 'graphql',
                label: 'GraphQL',
              }
            ]
          }
        ]
      },
      {
        id: 'typescript',
        label: 'TypeScript',
      },
      {
        id: 'React',
        label: 'ReactJS',
      },
      {
        id: 'NodeJS',
        label: 'NodeJS',
        children: [
          {
            id: 'server',
            label: 'Server',
            children: [
              {
                id: 'express',
                label: 'Express',
              },
              {
                id: 'apollo-server',
                label: 'Apollo Server',
              }
            ]
          },
          {
            id: 'data-fetching',
            label: 'Data Fetching',
            children: [
              {
                id: 'axios',
                label: 'Axios',
              },
              {
                id: 'apollo-client',
                label: 'Apollo Client',
              },
              {
                id: 'graphql',
                label: 'GraphQL',
              }
            ]
          },
          {
            id: 'testing',
            label: 'Testing',
            children: [
              {
                id: 'jest',
                label: 'Jest',
              },
            ]
          },
          {
            id: 'database',
            label: 'Database',
            children: [
              {
                id: 'mongodb',
                label: 'MongoDB',
              },
              {
                id: 'mongoose',
                label: 'Mongoose',
              }
            ]
          },
          {
            id: 'authentication',
            label: 'Authentication',
            children: [
              {
                id: 'jwt',
                label: 'JWT',
              },
              {
                id: 'passport',
                label: 'Passport',
              }
            ]
          }
        ]
      }
    ]
  }
];

interface BaseSkillItemInterface {
  id: string;
  label: string;
}

interface SkillItemInterface extends BaseSkillItemInterface {
  children?: BaseSkillItemInterface[]
}

const SkillItem: FC<{ skill: SkillItemInterface, isChild?: boolean }> = ({ skill, isChild }) => {
  return (
    <div
      className={
        `
          flex p-2 flex-wrap flex-1 bg-[#4444440d] rounded-xl gap-2 text-xs font-bold items-center
          ${
            skill.children ? '' : 'flex-col'
          }
        `
      }
    >
      <p>{skill.label}</p>
      {
        skill.children && skill.children.map(
          (_skill, index) => (
            <SkillItem skill={_skill} key={`skill-${_skill.id}-${index}`} isChild={!isChild} />
          )
        )
      }
    </div>
  )
};

const Skills: FC = () => {
  return (
    <section className="mt-16">
      <h4 className="text-2xl font-bold">Skills</h4>
      <div className="flex gap-2">
        {
          skillsPyramid.map(
            (skill, index) => (
              <SkillItem skill={skill} key={`skill-${skill.id}-${index}`} isChild={false} />
            )
          )
        }
      </div>
    </section>
  );
};

export default Skills;