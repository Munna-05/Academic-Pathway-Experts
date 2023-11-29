import React from 'react';

const LongParagraphComponent = ({ text }) => {
  // Split the text into an array of words
  const words = text.split(' ');

  // Calculate the index to split the words into two paragraphs
  const splitIndex = Math.ceil(words.length / 2);

  // Join the words into two separate paragraphs
  const firstParagraph = words.slice(0, splitIndex).join(' ');
  const secondParagraph = words.slice(splitIndex).join(' ');

  return (
    <div>
      <p className="first-letter:font-bold first-letter:text-2xl first-letter:uppercase leading-6">{firstParagraph}</p>
      <p className="first-letter:font-bold first-letter:text-2xl first-letter:uppercase leading-6">{secondParagraph}</p>
    </div>
  );
};

export default LongParagraphComponent;
