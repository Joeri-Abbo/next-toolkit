"use client"
import { useState } from 'react';
import InputArea from '../../components/InputArea';
import Button from '../../components/Button';

const Base64EncoderDecoder = () => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');

  const handleEncode = () => {
    setOutput(btoa(input));
  };

  const handleDecode = () => {
    try {
      setOutput(atob(input));
    } catch (error) {
      setOutput('Invalid Base64 string');
    }
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Base64 Encoder/Decoder</h1>
      <InputArea placeholder="Enter text here" value={input} onChange={(e) => setInput(e.target.value)} />
      <div className="flex space-x-4 mb-4">
        <Button onClick={handleEncode}>Encode</Button>
        <Button onClick={handleDecode}>Decode</Button>
      </div>
      <pre className="mt-4 bg-gray-100 p-4 text-black">{output}</pre>
    </div>
  );
};

export default Base64EncoderDecoder;
