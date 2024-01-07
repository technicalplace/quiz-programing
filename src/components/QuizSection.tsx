"use client"

import { useState } from 'react'
import { RadioGroup } from '@headlessui/react'
import Link from 'next/link'
import { useParams, usePathname, useSearchParams } from 'next/navigation'

const plans = [
  {
    name: '問題1',
    ram: '12GB',
    cpus: '6 CPUs',
    disk: '160 GB SSD disk',
  },
  {
    name: '問題2',
    ram: '16GB',
    cpus: '8 CPUs',
    disk: '512 GB SSD disk',
  },
]

export const QuizSection: React.FC = ({}) => {
  const [selected, setSelected] = useState(plans[0])
  const [active, setActive] = useState(false)
  const params = useSearchParams()
  console.log(params.get('lang'))
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
        <RadioGroup value={selected} onChange={setSelected}>
          <RadioGroup.Label className="sr-only">Server size</RadioGroup.Label>
          <div className="space-y-2">
            {plans.map((plan) => (
              // "active"は、ユーザーがマウスをオプションの上に置いているかどうかを示します。
              // "checked"は、ユーザーがそのオプションを選択したかどうかを示します。
              // これらの値は、RadioGroup.Optionコンポーネントによって自動的に制御されます。
              <RadioGroup.Option
                key={plan.name}
                value={plan}
                className={({ active, checked }) =>
                  `${
                    active
                      ? 'ring-2 ring-white/60 ring-offset-2 ring-offset-sky-300'
                      : ''
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
                          <RadioGroup.Label
                            as="p"
                            className={`font-medium  ${
                              checked ? 'text-white' : 'text-gray-900'
                            }`}
                          >
                            {plan.name}
                          </RadioGroup.Label>
                          <RadioGroup.Description
                            as="span"
                            className={`inline ${
                              checked ? 'text-sky-100' : 'text-gray-500'
                            }`}
                          >
                            <span>
                              {plan.ram}/{plan.cpus}
                            </span>{' '}
                            <span aria-hidden="true">&middot;</span>{' '}
                            <span>{plan.disk}</span>
                          </RadioGroup.Description>
                        </div>
                      </div>
                      {checked && (
                        <div className="shrink-0 text-white">
                          {/* <CheckIcon className="h-6 w-6" /> */}
                        </div>
                      )}
                    </div>
                  </>
                )}
              </RadioGroup.Option>
            ))}
          </div>
        </RadioGroup>
        <h1 className=' text-gray-50'>{ params.get('lang') }</h1>
      </div>
      <Link href={'/'}>
        <button>Top Pageへ戻る</button>
      </Link>
    </div>
  )
}
