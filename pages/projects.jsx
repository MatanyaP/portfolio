import React, { useState } from 'react';
import styles from '../styles/Home.module.css'
import Card from '../components/card';
import { prefix } from '../utils/prefix';

const Projects = () => {
    const [projects, setProjects] = useState([
        {
            name: 'CLI TODO',
            description: 'A simple cli todo app with unnecessary features',
            link: 'https://github.com/MatanyaP/CLITODO',
            image: `${prefix}/images/cliTodo.png`,
            hashtags: ['Node.js', 'CLI']
        },
        {
            name: 'Cambium Applicable Innovation',
            description: 'A web application for the Cambium Applicable Innovation program. The program is a program for students to apply for a job in the field of applied mathematics and computer science. The program is run by the Cambium Applied Mathematics and Computer Science department.',
            link: 'https://cambiumapplicableinnovation.com/',
        },
    ]);
    return (
        <div className={styles.container}>
            <div className="max-w-screen-xl mx-auto sm:px-6 lg:px-8 selection:bg-lime-300 selection:text-black">
                <div className="relative flex flex-col min-h-screen">
                    <main className="flex-1">
                        <div className="mt-12 mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
                            <h2 className="flex-1 text-4xl font-extrabold leading-10 tracking-tight text-gray-900 sm:text-5xl sm:leading-none md:text-6xl mb-3">
                                <span className="text-lime-500"><span className="text-blue-300">some of </span><span className="text-lime-500">my <br/><span className="text-red-400">side projects</span>;</span></span>
                            </h2>
                            <p className="text-xl text-gray-500">
                                <span>&#47;&#47; It&apos;s not a bug &#8211; it&apos;s an <a className="underline decoration-lime-500">undocumented feature</a>.</span>
                            </p>
                        </div>
                        <div className="mt-12 mx-auto max-w-screen-xl px-4 sm:mt-16 sm:px-6 md:mt-20 lg:mt-28 lg:px-8 xl:mt-32 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {projects.map((project, index) => (
                                    <div className="flex justify-center text-6xl bg-gray-100" key={`project-${index}`}>
                                        <Card key={index} title={project.name} description={project.description} link={project.link} backgroundImage={project.image} hashtags={project.hashtags} />
                                    </div>
                                ))}
                        </div>
                    </main>
                </div>
            </div>
        </div>
    );
}

export default Projects;