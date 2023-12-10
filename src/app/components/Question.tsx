import React from 'react';

type Props = {
  question: string;
};

const Question: React.FC<Props> = ({ question }) => (
  <p dangerouslySetInnerHTML={{ __html: question }} />
);

export default Question;