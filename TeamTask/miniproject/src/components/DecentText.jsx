import React, { useEffect, useState } from 'react';

// A React Bits inspired text animation component that animates words one by one.
export const DecentText = ({ text, className = "" }) => {
  const [words, setWords] = useState([]);

  useEffect(() => {
    setWords(text.split(' '));
  }, [text]);

  return (
    <h1 className={`flex flex-wrap gap-x-2 gap-y-1 font-extrabold tracking-tight ${className}`}>
      {words.map((word, index) => (
        <span
          key={index}
          className="inline-block animate-fade-in-up"
          style={{
            animationDelay: `${index * 0.1}s`,
            animationFillMode: 'both',
          }}
        >
          {word}
        </span>
      ))}
    </h1>
  );
};
export default DecentText;
