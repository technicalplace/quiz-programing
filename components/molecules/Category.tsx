import React from "react";
import Link from 'next/link'

interface CategoryProps {
  categoryName: string;
}
export const Category = ({ categoryName }: CategoryProps) => {
  return (
    <div className="p-2 sm:w-1/4 w-full hover:scale-105 duration-300">
      <Link href={`/QuizSection?lang=${categoryName}`}>
        <button className="block w-full">
          <div className="bg-transparent rounded flex p-4 items-center hover:bg-background-main outline-zinc-500 outline-2 outline">
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" className="text-zinc-100 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
              <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
              <path d="M22 4L12 14.01l-3-3"></path>
            </svg>
            <span className="text-white font-bold text-xl">{categoryName}</span>
          </div>
        </button>
      </Link>
    </div>
  )
}