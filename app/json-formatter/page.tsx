// pages/json-formatter.tsx
'use client';
import { useState } from 'react';
import InputArea from '../../components/InputArea';
import Button from '../../components/Button';

const JSONFormatter = () => {
  const [jsonInput, setJsonInput] = useState('');
  const [formattedJson, setFormattedJson] = useState('');

  const handleFormat = () => {
    try {
      const parsedJson = JSON.parse(jsonInput);
      setFormattedJson(JSON.stringify(parsedJson, null, 2));
    } catch (error) {
      setFormattedJson('Invalid JSON');
    }
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">JSON Formatter</h1>
      <InputArea placeholder="Enter JSON here" value={jsonInput} onChange={(e) => setJsonInput(e.target.value)} rows={10} />
      <Button onClick={handleFormat}>Format JSON</Button>
      <pre className="mt-4 bg-gray-100 p-4 text-black">{formattedJson}</pre>
    </div>
  );
};

export default JSONFormatter;
