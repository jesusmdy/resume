'use client';
import classNames from 'classnames';
import { FC, useState } from "react";

type SkillLevel = 'beginner' | 'intermediate' | 'advanced' | 'expert';

const skillLevelsColors: Record<string, string> = {
  beginner: 'bg-red-50 text-red-700 border border-transparent dark:border-red-800 dark:bg-transparent',
  intermediate: 'bg-yellow-100 text-yellow-700 border border-transparent dark:border-yellow-800 dark:bg-transparent',
  advanced: 'bg-green-100 text-green-700 border border-transparent dark:border-green-800 dark:bg-transparent',
  expert: 'bg-blue-700 text-blue-100 border border-transparent dark:border-blue-800 dark:bg-transparent dark:text-blue-500',
};

const levels = ['beginner', 'intermediate', 'advanced', 'expert'];

interface SkillItemInterface {
  id: string;
  label: string;
  level: SkillLevel;
}


const skillsPyramid: SkillItemInterface[] = [
  {
    id: 'html',
    label: 'HTML',
    level: 'expert',
  },
  {
    id: 'css',
    label: 'CSS',
    level: 'expert',
  },
  {
    id: 'javascript',
    label: 'JavaScript',
    level: 'expert',
  },
  {
    id: 'typescript',
    label: 'TypeScript',
    level: 'advanced',
  },
  {
    id: 'react',
    label: 'React.Js',
    level: 'expert',
  },
  {
    id: 'nextjs',
    label: 'Next.Js',
    level: 'expert',
  },
  {
    id: 'reactnative',
    label: 'React Native',
    level: 'intermediate',
  },
  {
    id: 'astro',
    label: 'Astro',
    level: 'intermediate',
  },
  {
    id: 'nodejs',
    label: 'NodeJS',
    level: 'advanced',
  },
  {
    id: 'express',
    label: 'Express',
    level: 'advanced',
  },
  {
    id: 'sass',
    label: 'Sass',
    level: 'intermediate',
  },
  {
    id: 'tailwindcss',
    label: 'TailwindCSS',
    level: 'advanced',
  },
  {
    id: 'git',
    label: 'Git',
    level: 'advanced',
  },
  {
    id: 'github',
    label: 'GitHub',
    level: 'advanced',
  },
  {
    id: 'redux',
    label: 'Redux',
    level: 'intermediate',
  },
  {
    id: 'chakraui',
    label: 'Chakra UI',
    level: 'advanced',
  },
  {
    id: 'materialui',
    label: 'Material UI',
    level: 'advanced',
  },
  {
    id: 'auth0',
    label: 'Auth0',
    level: 'intermediate',
  },
  {
    id: 'php',
    label: 'PHP',
    level: 'intermediate',
  },
  {
    id: 'githubactions',
    label: 'GitHub Actions',
    level: 'intermediate',
  },
  {
    id: 'netlify',
    label: 'Netlify',
    level: 'intermediate',
  },
  {
    id: 'jest',
    label: 'Jest',
    level: 'advanced',
  },
  {
    id: 'cypress',
    label: 'Cypress',
    level: 'intermediate',
  },
  {
    id: 'eslint',
    label: 'ESLint',
    level: 'advanced',
  }
];

const SkillItem: FC<{ skill: SkillItemInterface }> = ({ skill }) => {
  const color = skillLevelsColors[skill.level];

  const hint = (() => {
    switch (skill.level) {
      case 'beginner':
        return 'I have a basic understanding of this technology, but I have not used it in a project yet.';
      case 'intermediate':
        return 'I have used this technology in a project, but I still need to look up documentation to use it.';
      case 'advanced':
        return 'I have used this technology in multiple projects and I am comfortable using it without looking up documentation.';
      case 'expert':
        return 'I have used this technology in multiple projects and I am very comfortable using it without looking up documentation.';
    }
  })()
  return (
    <div
      className={
        classNames(
          'px-2 py-1 rounded-xl text-xs font-bold relative font-mono',
          color,
          'pint:text-[10px] print:bg-transparent print:font-normal print:px-0 print:py-0 print:rounded-none print:shadow-none print:border-none print:text-black'
        )
      }
      title={hint}
    >
      {skill.label}
    </div>
  )
};

const Skills: FC = () => {
  return (
    <section className="mt-16 print:mt-2 mb-16">
      <div className="flex items-center">
        <h4 className="text-2xl font-bold mb-4 flex-1">Skills</h4>
      </div>
      <div className="flex flex-wrap gap-2">
        {
          skillsPyramid.map(
            (skill, index) => (
              <SkillItem skill={skill} key={`skill-${skill.id}-${index}`} />
            )
          )
        }
      </div>
    </section>
  );
};

export default Skills;