import * as React from 'react'
import ReactTerminal from 'react-terminal-component';
import {
    EmulatorState, OutputFactory, CommandMapping,
    EnvironmentVariables, FileSystem, History,
    Outputs, defaultCommandMapping
  } from 'javascript-terminal';

import isMobile from '../utils/isMobile';

export default function Terminal() {
    const customState = EmulatorState.create({
        'commandMapping': CommandMapping.create({
          ...defaultCommandMapping,
            'clear': {
                'function': (state, opts) => ({ output: OutputFactory.makeClearOutput() }),
                    'optDef': {}
            },
            'help': {
                'function': (state, opts) => ({ output: OutputFactory.makeTextOutput(
                `Commands:

                    clear:              clear the terminal

                    help:               print this help message

                    i <option>:         print information about me, 
                                        if an option is given, print more information 
                                        (options: linkedin, github, email)

                    cv:                 go to my cv

                    projects <option>:  list my projects,
                                        if an option is given, go to a specific project
                                        (options: )
                    `) // TODO: finish this
                }),'optDef': {}
            },
            'i': {
                'function': (state, opts) => ({
                    output: opts.length === 0 ? OutputFactory.makeTextOutput(`i.am: 'a Full Stack Web Developer, currently working at Cambium Applicable Innovation.'\n`
                    + `i.love: ['my family', 'code', 'puzzles', 'NBA', 'documentaries', 'learning new things']\n`
                    + `i.workWith: ['JavaScript && TypeScript', 'React', 'Node.js', 'Nest.js', 'MySQL && MSSQL']\n`
                    + `i.aspire: 'to be the person my dog thinks i am'`
                    ) : (opts.length === 1 && opts[0] === 'linkedin') ? OutputFactory.makeTextOutput(`i.linkedin: 'https://il.linkedin.com/in/matanperetz'`) :
                    (opts.length === 1 && opts[0] === 'github') ? OutputFactory.makeTextOutput(`i.github: 'https://github.com/MatanyaP'`) :
                    (opts.length === 1 && opts[0] === 'email') ? OutputFactory.makeTextOutput(`i.email: 'matanperetz314 at gmail dot com'`) :
                    OutputFactory.makeTextOutput(`option ${opts[0]} is not recognized`)
                }), 'optDef': {}
            },
            'cv': {
                'function': (state, opts) => ({
                    output: OutputFactory.makeTextOutput(`
                        .cv()
                    `)
                }), 'optDef': {}
            },
            'projects': {
                'function': (state, opts) => ({
                    output: OutputFactory.makeTextOutput(`
                        .projects()
                    `)
                }), 'optDef': {}
            },
        })
      });
      return (
          <ReactTerminal
            emulatorState={customState}
            clickToFocus={true}
            promptSymbol={'>'}
            inputStr="help"
            theme={{
                background: '#141313',
                promptSymbolColor: '#6effe6',
                commandColor: '#fcfcfc',
                outputColor: '#FCE883',
                errorOutputColor: '#ff89bd',
                fontSize: isMobile() ? '1rem' : '1.8rem',
                spacing: '1%',
                fontFamily: 'monospace',
                width: '100%',
                height: '40vh'
              }}
          />
      );
}