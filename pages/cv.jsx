import React, { useState } from 'react';
import {prefix} from '../utils/prefix'  

// open CV in new tab
const CV = () => {
    return (
        <div className="flex flex-col items-center justify-center">
        <a href={`${prefix}/CV.pdf`} target="_blank" rel="noopener noreferrer">
            <button className="bg-lime-500 hover:bg-lime-700 text-white font-bold py-2 px-4 rounded">
            Open in new tab
            </button>
        </a>
        <iframe src={`${prefix}/CV.pdf`} width="100%" height="100%" title="CV" />
        </div>
    );
    }

    export default CV;
