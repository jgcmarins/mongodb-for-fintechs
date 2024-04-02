import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/esm/styles/prism';

type CodeBlockProps = {
  range: [number, number];
  code: string;
  language?: string;
};

const CodeBlock = ({ range, code, language = 'typescript' }: CodeBlockProps) => {
  const [start, end] = range;

  const codeLines = code
    .split('\n')
    .slice(start - 1, end)
    .join('\n');

  return (
    <SyntaxHighlighter language={language} style={darcula}>
      {codeLines}
    </SyntaxHighlighter>
  );
};

export default CodeBlock;
