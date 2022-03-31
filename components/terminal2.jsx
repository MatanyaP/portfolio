import React, { Component } from 'react';
import Terminal from 'terminal-in-react';
import { prefix } from '../utils/prefix';

const Terminal2 = () => {
    const showMsg = (msg) => "welecome to my terminal";
    const cv = `${prefix}/CV.pdf`;

    return (
        <Terminal
        watchConsoleLogging = {true}
            actionHandlers={{
                handleMaximise: () => {
                    console.log('maximise');
                },
                handleMinimise: () => {
                    console.log('minimise');
                },
            }}
            color='green'
            backgroundColor='black'
            barColor='#1d1f21'
            closedTitle={`You had to try it, didn\'t you?`}
            promptSymbol='$'
            msg='welecome to my terminal'
            style={{
                fontSize: '1em',
                fontFamily: '"Fira code", "Fira Mono", monospace',
                backgroundColor: '#1d1f21',
                height: '30vh',
                width: '60vw',
            }}
            commands={{
                    i: {
                        method: (args, print, runCommand) => {
                        if (args._.length === 0) {
                            print(`i.am: 'a Full Stack Web Developer, currently working at Cambium Applicable Innovation.'\n`
                            + `i.love: ['my family', 'code', 'puzzles', 'NBA', 'documentaries', 'learning new things']\n`
                            + `i.workWith: ['JavaScript && TypeScript', 'React', 'Node.js', 'Nest.js', 'MySQL && MSSQL']\n`
                            + `i.aspire: 'to be the person my dog thinks i am'`)
                        } else if (args._.length === 1 && args._[0] === 'linkedin') {
                            window.open('https://il.linkedin.com/in/matanperetz', '_blank');
                        } else if (args._.length === 1 && args._[0] === 'github') {
                            window.open('https://github.com/MatanyaP', '_blank');
                        } else if (args._.length === 1 && args._[0] === 'email') {
                            print(`i.email: 'matanperetz314 at gmail dot com'`)
                        } else {
                            print(`option ${args._[0]} is not recognized`)
                        }
                    },
                    options: [
                        {
                            name: 'linkedin',
                            description: 'open my linkedin profile',
                        },
                        {
                            name: 'github',
                            description: 'open my github profile',
                        },
                        {
                            name: 'email',
                            description: 'print my email',
                        },
                    ]
                },
                'cv': {
                    method: (args, print, runCommand) => {
                        // open cv in new tab
                        window.open(cv, '_blank');
                    }
                },
                'projects': {
                    method: (args, print, runCommand) => {
                        print(`
                            .projects()
                        `)
                    }
                },
            }}
            descriptions={{
                'i': 'about me | optional argument: 0 - print all information, 1 - linkedin, 2 - github, 3 - email',
                'open': 'open: open a website',
                'cv': 'cv: my cv',
                'projects': 'projects: my projects',

            }}
        />
    );
};

export default Terminal2;

