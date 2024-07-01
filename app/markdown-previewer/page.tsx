// app/markdown-previewer/page.tsx
'use client';
import { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import InputArea from '../../components/InputArea';
import './styles.css';  // Import the CSS file here

const MarkdownPreviewer = () => {
  const [markdownInput, setMarkdownInput] = useState('');

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Markdown Previewer</h1>
      <InputArea placeholder="Enter Markdown here" value={markdownInput} onChange={(e) => setMarkdownInput(e.target.value)} rows={10} />
      <div className="mt-4 bg-gray-100 p-4 text-black markdown-body">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>
          {markdownInput}
        </ReactMarkdown>
      </div>
    </div>
  );
};

export default MarkdownPreviewer;
