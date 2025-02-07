import React, { useEffect } from 'react';

type Props = {
  answer: string;
  callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
  userAnswer: string | undefined;
};

export const Answer: React.FC<Props> = ({ answer, callback, userAnswer }) => {
  useEffect(() => { }, []);
  return (
    <div>
      <button disabled={!!userAnswer} value={answer} onClick={callback}>
        <span dangerouslySetInnerHTML={{ __html: answer }} />
      </button>
    </div>
  )
};