"use client"

import { useState } from 'react'
import { RadioGroup } from '@headlessui/react'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import QuizList from '@/stores/QuizList'
import { Quiz } from '@/stores/QuizList'


export const QuizSection: React.FC = ({}) => {
  const params = useSearchParams()
  const getLangParams = params.get('lang') as keyof typeof QuizList
  const quizLists = QuizList[getLangParams].map(({question, option, answer}): Quiz => ({
    question,
    option,
    answer,
  }));
  const [active, setActive] = useState(false)
  const [selectedOption, setSelectedOption] = useState(quizLists[0]) // 選択されている選択肢
  const [currentQuizIndex, setCurrentQuizIndex] = useState(0) // クイズのインデックス
  const [currentQuiz, setCurrentQuiz] = useState(quizLists[currentQuizIndex]) // 現在表示しているクイズ
  /** 前の問題に戻る */
  const toPrevQuizButton = (): void => {
    if (currentQuizIndex === 0) setCurrentQuizIndex(0);
    if (0 < currentQuizIndex && currentQuizIndex < quizLists.length) {
      setCurrentQuizIndex(currentQuizIndex - 1) // インデックスを減らす
      setCurrentQuiz(quizLists[currentQuizIndex -1]) // 前のクイズを設定
    }
  }
  /** 次の問題に進む */
  const toNextQuizButton = (): void => {
    if (currentQuizIndex < quizLists.length - 1) {
      setCurrentQuizIndex(currentQuizIndex + 1) // インデックスを増やす
      setCurrentQuiz(quizLists[currentQuizIndex + 1]) // 新しいクイズを設定
    }
  }
  const CheckIcon = (props: any) => {
    return (
      <svg viewBox="0 0 24 24" fill="none" {...props}>
        <circle cx={12} cy={12} r={12} fill="#fff" opacity="0.2" />
        <path
          d="M7 13l3 3 7-7"
          stroke="#fff"
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    )
  }

  return (
    <div className="w-full px-4 py-16 bg-background-main h-screen">
      <div className="mx-auto w-full max-w-md">
        {/* 現在のクイズを表示 */}
        <h1 className='text-yellow-400 mb-3'>{currentQuiz.question}</h1>
        <RadioGroup value={selectedOption} onChange={setSelectedOption}>
          <div className="space-y-2">
            {Object.values(currentQuiz.option).map((option, index) => ( // 現在のクイズのオプションを表示
              <RadioGroup.Option
                key={index}
                value={option}
                className={({ active, checked }) =>
                  `${
                    active
                      ? 'ring-2 ring-white/60 ring-offset-2 ring-offset-sky-300' : ''
                  }
                  ${checked ? 'bg-sky-900/75 text-white' : 'bg-white'}
                    relative flex cursor-pointer rounded-lg px-5 py-4 shadow-md focus:outline-none`
                }
              >
                {({ active, checked }) => (
                  <>
                    <div className="flex w-full items-center justify-between">
                      <div className="flex items-center">
                        <div className="text-sm">
                          <RadioGroup.Description
                            className={`inline ${
                              checked ? 'text-sky-100' : 'text-gray-500'
                            }`}
                          >
                            <span>{option}</span>
                          </RadioGroup.Description>
                        </div>
                      </div>
                      {checked && (
                        <div className="shrink-0 text-white">
                          <CheckIcon className="h-6 w-6" />
                        </div>
                      )}
                    </div>
                  </>
                )}
              </RadioGroup.Option>
            ))}
          </div>
        </RadioGroup>
      </div>
      <div className='flex justify-between'>
        <div>
            <button onClick={toPrevQuizButton} className='text-white font-bold h-9 bg-slate-500 px-4 py-2 rounded-lg hover:text-yellow-400'>前の問題へ</button>
        </div>
        <div>
            <button onClick={toNextQuizButton} className='text-white font-bold h-9 bg-slate-500 px-4 py-2 rounded-lg hover:text-yellow-400'>次の問題へ</button>
        </div>
      </div>
      <Link className='text-white font-bold h-9 mx-auto w-auto bg-slate-500 px-4 py-2 rounded-lg hover:text-yellow-400' href={'/'}>
        <button className='mt-5'>Top Pageへ戻る</button>
      </Link>
    </div>
  )
}
