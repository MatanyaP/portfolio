import React, { useState } from 'react';
import styles from '../styles/Home.module.css'
import CodeEditor from '../components/codeEditor'
import changeStyle from '../utils/changeStyle'
import Bar from '../components/topBar'

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
                        <span>&#47;&#47; if there&apos;s anything you don&apos;t like, you can always <a className="underline decoration-lime-500">edit</a> it.</span>
                    </p>
                </div>
                <div className="mt-12 max-w-screen-md px-4 sm:mt-16 sm:px-6 md:mt-20 lg:mt-28 lg:px-8 xl:mt-32">
                    <div className="logoInside1" onClick={e => changeStyle(e.target)} />
                    <CodeEditor />
                    <div className="logoInside2" onClick={e => changeStyle(e.target)} />
                </div>
            </main>
          </div>
        </div>
    </div>
    );
}

export default about;
