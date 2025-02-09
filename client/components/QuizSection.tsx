"use client"

import { useEffect } from 'react'
import { RadioGroup } from '@headlessui/react'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import QuizList from '../utils/QuizList'
import { useDispatch, useSelector } from 'react-redux'
import { answerState, clearStore, setAnswerInfo, setQuizList, toNextButton, toPrevButton } from '../stores/answer'
import { Quiz } from './Quiz'

export const QuizSection: React.FC = ({}) => {
  const params = useSearchParams()
  const getLangParams:string | null = params.get('lang') ?? '';
  const quizLists = QuizList[getLangParams];
  // `useSelector`を使用してReduxストアから`currentQuizId`と`selectedOptions`を型安全に取得
  const { currentQuizId, selectedOptions } = useSelector((state: { answer: answerState }) => state.answer)
  const showQuiz = quizLists.find(({ id }) => id === currentQuizId)
  
  useEffect(() => {
    dispatch(setQuizList(quizLists))
  }, [quizLists])

  /** TODO: アイコンコンポーネント作成 */
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

  const dispatch = useDispatch()

  return (
    <div className="w-full px-4 py-16 h-screen">
      <div className="mx-auto w-full max-w-md">
        <RadioGroup>
          <RadioGroup.Label className='text-xl text-yellow-400 mb-3'>{showQuiz?.question}</RadioGroup.Label>
          <div className="space-y-2 mt-4">
            {Object.values(showQuiz?.option ?? {}).map((option, index) => (
              // TODO 選択済みの選択肢をアクティブにする
              <RadioGroup.Option
                as='button'
                key={index}
                value={option}
                onClick={() => dispatch(setAnswerInfo(currentQuizId, option))}
                className={({ checked }) =>
                  `${checked ? 'bg-sky-900/75 text-white ring-2 ring-white/60 ring-offset-2 ring-offset-sky-300' : 'bg-white'}
                    relative flex cursor-pointer rounded-lg px-5 py-4 shadow-md focus:outline-none w-full`
                }
              >
                {({ checked }) => (
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
            <button onClick={() => dispatch(toPrevButton())} className='text-white font-bold h-9 bg-button-secondary px-4 py-2 rounded-lg hover:text-yellow-400'>前の問題へ</button>
        </div>
        <div>
            <button onClick={() => dispatch(toNextButton())} className='text-white font-bold h-9 bg-button-secondary px-4 py-2 rounded-lg hover:text-yellow-400'>次の問題へ</button>
        </div>
      </div>
      <Link className='text-white font-bold h-9 mx-auto w-auto bg-slate-500 px-4 py-2 rounded-lg hover:text-yellow-400' href={'/'}>
        <button onClick={() => dispatch(clearStore())} className='mt-5'>Top Pageへ戻る</button>
      </Link>
    </div>
  )
}
