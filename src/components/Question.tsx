import React from 'react';

type Props = {
  question: string;
};

export const Question: React.FC<Props> = ({ question }) => (
  <p dangerouslySetInnerHTML={{ __html: question }} />
);