// pages/slugify.tsx
'use client';
import { useState } from 'react';
import InputArea from '../../components/InputArea';
import Button from '../../components/Button';

const Slugify = () => {
  const [input, setInput] = useState('');
  const [slug, setSlug] = useState('');

  const handleSlugify = () => {
    const slugified = input
      .toLowerCase()
      .replace(/[^\w\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-');
    setSlug(slugified);
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Slugify String</h1>
      <InputArea placeholder="Enter string" value={input} onChange={(e) => setInput(e.target.value)} />
      <Button onClick={handleSlugify}>Slugify</Button>
      <p className="mt-4">Slug: {slug}</p>
    </div>
  );
};

export default Slugify;
