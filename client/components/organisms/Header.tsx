import React from "react";
import { IconContext } from "react-icons";
import { MdQuiz } from "react-icons/md";

export const Header: React.FC = () => {
  return (
    <header className="text-text-white body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="flex title-font font-medium items-center mb-4 md:mb-0">
          <IconContext.Provider value={{ size: '2rem' }}>
            <MdQuiz />
          </IconContext.Provider>
        <span className="ml-3 text-xl">プログラミング Quiz</span>
      </a>
      <nav className="md:ml-auto flex flex-wrap items-center text-base justify-end">
        <a className="mr-5 font-bold cursor-pointer hover:underline">ログイン</a>
        <a className="mr-5 font-bold cursor-pointer hover:underline">ランキング</a>
      </nav>
      <button className="inline-flex items-center bg-gray-500 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">ログアウト
        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
          <path d="M5 12h14M12 5l7 7-7 7"></path>
        </svg>
      </button>
      </div>
    </header>
  )
}