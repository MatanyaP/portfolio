import React, { useState } from 'react';
import {prefix} from '../utils/prefix';
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import dynamic from 'next/dynamic'
import CodeEditor from '../components/codeEditor'

const about = () => {
    return (
        <div className={styles.container}>
        <div className="max-w-screen-xl mx-auto sm:px-6 lg:px-8 selection:bg-lime-300 selection:text-black">
        <div className="relative flex flex-col min-h-screen">
            <main className="flex-1">
                <div className="mt-12 mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
                    <h2 className="flex-1 text-4xl font-extrabold leading-10 tracking-tight text-gray-900 sm:text-5xl sm:leading-none md:text-6xl mb-3">
                        <span className="text-lime-500"><span className="text-blue-300">let </span><span className="text-lime-500">i <span className="text-red-400">=</span> &#123;&#125;;</span></span>
                    </h2>
                    <p className="text-xl text-gray-500">
                        <span>// if there's anything you don't like, you can always <a className="underline decoration-lime-500">change</a> it.</span>
                    </p>
                </div>
                <div className="mt-12 mx-auto max-w-screen-xl px-4 sm:mt-16 sm:px-6 md:mt-20 lg:mt-28 lg:px-8 xl:mt-32">
                    <CodeEditor />
                </div>
            </main>
          </div>
        </div>
    </div>
    );
}

export default about;
