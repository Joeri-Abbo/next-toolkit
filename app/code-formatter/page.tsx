'use client';

import { useState } from 'react';
import prettier from 'prettier/standalone';
import babelParser from 'prettier/parser-babel';
import htmlParser from 'prettier/parser-html';
import cssParser from 'prettier/parser-postcss';
import sqlParser from 'prettier-plugin-sql';


const CodeFormatter = () => {
  const [codeInput, setCodeInput] = useState('');
  const [formattedCode, setFormattedCode] = useState('');
  const [language, setLanguage] = useState('babel');

  const handleFormat = () => {
    try {
      const plugins = {
        babel: babelParser,
        html: htmlParser,
        css: cssParser,
        sql: sqlParser,
      };

      const formatted = prettier.format(codeInput, {
        parser: language,
        plugins: [plugins[language]],
        tabWidth: 2,
      });
      setFormattedCode(formatted);
    } catch (error) {
      setFormattedCode('Invalid code');
    }
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Code Formatter</h1>
      <select
        value={language}
        onChange={(e) => setLanguage(e.target.value)}
        className="border p-2 mb-4 text-black"
      >
        <option value="babel">JavaScript</option>
        <option value="html">HTML</option>
        <option value="css">CSS</option>
        <option value="php">PHP</option>
        <option value="sql">SQL</option>
        <option value="python">Python</option>
      </select>
      <textarea
        rows="10"
        cols="50"
        placeholder="Enter code here"
        value={codeInput}
        onChange={(e) => setCodeInput(e.target.value)}
        className="border p-2 w-full mb-4 text-black"
      />
      <button onClick={handleFormat} className="bg-blue-500 text-white px-4 py-2">Format Code</button>
      <pre className="mt-4 bg-gray-100 p-4">{formattedCode}</pre>
    </div>
  );
};

export default CodeFormatter;
