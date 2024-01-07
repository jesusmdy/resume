import { FC } from "react";

const About: FC = () => {
  return (
    <section className="flex flex-col gap-2 mt-16 print:mt-4">
      <h5 className="text-2xl font-bold">About me</h5>
      <p className="text-xs font-mono text-gray-600">
        Working with passion for what I love, I have successfully managed to contribute in different projects around the world. Thinking about the user experience and how it should work for the end-user. Currently focused on React.JS with Next.JS and different component libraries and query components such as GraphQL. With more than two years of experience working remotely for clients around the globe.
      </p>
    </section>
  )
};

export default About;