import React from 'react';

type Props = {
  answer: string;
  callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
  userAnswer: string | undefined;
};

const Answer: React.FC<Props> = ({ answer, callback, userAnswer }) => (
  <div>
    <button disabled={!!userAnswer} value={answer} onClick={callback}>
      <span dangerouslySetInnerHTML={{ __html: answer }} />
    </button>
  </div>
);

export default Answer;