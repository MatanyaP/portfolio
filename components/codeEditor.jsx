import { useState } from 'react';
import Editor from 'react-simple-code-editor';
import { highlight, languages } from 'prismjs/components/prism-core';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';
import "prismjs/themes/prism-funky.css";

const CodeEditor = () => {
    const [code, setCode] = useState(`i.am = 'a full stack developer, currently working at Cambium Applicable Innovation.';

i.love = ['my family', 'code', 'puzzles', 'NBA', 'documentaries', 'learning new things'];

i.workWith = ['JavaScript && TypeScript', 'React', 'Node.js', 'Nest.js', 'MySQL && MSSQL'];

i.aspire = 'to be the person my dog thinks i am';

i.linkedin = 'linkedin.com/in/matanperetz';

i.github = 'github.com/MatanyaP';

i.email = 'matanperetz314 at gmail dot com';`);
    const onChange = (newCode) => {
        setCode(newCode);
    };

    return (
        <div className="relative text-white flex flex-col min-h-screen ">
            <Editor
                value={code}
                onValueChange={code => onChange(code)}
                highlight={code => highlight(code, languages.js)}
                padding={10}
                style={{
                fontFamily: '"Fira code", "Fira Mono", monospace',
                // on mobile, font-size is set to 1em
                fontSize: '1em',
                backgroundColor: '#1d1f21',
            }}
            />
        </div>
    );
}

export default CodeEditor;

