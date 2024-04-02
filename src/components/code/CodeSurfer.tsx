'use client';

import React from 'react';
import useSWR from 'swr';

import CodeBlock from './CodeBlock';

type CodeSurferProps = {
  range: [number, number];
  fileName: string;
  language?: string;
};

const fetcher = (url, fileName) =>
  fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ fileName }),
  }).then((res) => res.text());

const CodeSurfer = ({ range, fileName, language }: CodeSurferProps) => {
  const { data: code, error } = useSWR(['/api/code', fileName], ([url, fileName]) =>
    fetcher(url, fileName),
  );

  if (error) return <div>Failed to load</div>;
  if (!code) return <div>Loading...</div>;

  return <CodeBlock range={range} code={code} language={language} />;
};

export default CodeSurfer;
