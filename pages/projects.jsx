import React, { useState } from 'react';
import styles from '../styles/Home.module.css'
import Card from '../components/card';
import { prefix } from '../utils/prefix';
import styleChange from '../utils/styleChange';

const Projects = () => {
    const allProjects = [{
        name: 'CLI TODO',
        description: 'A simple cli todo app with unnecessary features',
        link: 'https://github.com/MatanyaP/CLITODO',
        image: `${prefix}/images/cliTodo.png`,
        hashtags: ['Node.js', 'CLI']
    },
    {
        name: 'Portfolio',
        description: 'A link to my portfolio, in my portfolio. How meta is that.',
        link: 'https://github.com/MatanyaP/portfolio',
        image: `${prefix}/images/portfolio.png`,
        hashtags: ['React', 'Next.js'],
    }];
    const [projects, setProjects] = useState(allProjects);

    const getAllHashtags = () => {
        return allProjects.flatMap(project => project.hashtags).filter((hashtag, i, arr) => arr.indexOf(hashtag) === i).map(hashtag => sortButton(hashtag));
    }
    const sortByHashtags = (hashtag) => {
        const res = allProjects.filter(project => project.hashtags.includes(hashtag));
        return res;
    }

    const sortButton = (hashtag) => {
        return (
        <button
            className="text-gray-500 font-bold py-2 px-4 hover:underline decoration-lime-500 focus:underline decoration-lime-500 border-b-2 border-gray-200"
            key={hashtag}
            onClick={() => setProjects(sortByHashtags(hashtag))}
        >
            {hashtag}
        </button>
        )
    }

    return (
        <div className={styles.container}>
            {/* buttons for sort by hashtags */}
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
                        <div className="mt-6 mx-auto max-w-screen-xl px-4 sm:mt-6 sm:px-6 md:mt-6 lg:mt-6 lg:px-8 xl:mt-6 flex justify-center">
                            {/* for each hashtag in allProjects, create a button */}
                            {getAllHashtags()}
                            <button
                                className="text-gray-500 font-bold py-2 px-4 hover:underline decoration-lime-500 focus:underline decoration-lime-500 border-b-2"
                                onClick={() => setProjects(allProjects)}
                            >
                                all
                            </button>
                        </div>
                        <div className="logoInside1" onClick={e => styleChange(e.target)} />
                        <div className="mt-6 mx-auto max-w-screen-xl px-4 sm:mt-12 sm:px-6 md:mt-20 lg:mt-12 lg:px-8 xl:mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {projects.map((project, index) => (
                                    <div className="flex justify-center text-6xl bg-gray-100" key={`project-${index}`}>
                                        <Card key={index} title={project.name} description={project.description} link={project.link} backgroundImage={project.image} hashtags={project.hashtags} />
                                    </div>
                                ))}
                        </div>
                        <div className="logoInside2" onClick={e => styleChange(e.target)} />
                    </main>
                </div>
            </div>
        </div>
    );
}

export default Projects;