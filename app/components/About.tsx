import { FC } from "react";

const About: FC = () => {
  return (
    <section className="flex flex-col gap-2 mt-16 print:mt-4">
      <h5 className="text-2xl font-bold">About me</h5>
      <p className="text-xs font-mono text-gray-600 dark:text-zinc-400">
      I started learning web development in 2016. I specialized as a frontend in 2019 and I&apos;ve been working since 2020. I have experience in web application development with NextJs. I am also comfortable leading a team and working with other developers. I am a fast learner and always eager to learn new technologies.
      </p>
    </section>
  )
};

export default About;