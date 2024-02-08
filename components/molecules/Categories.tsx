import React from "react";
import { Category } from "../atoms/Category";

export const Categories = () => {
  const categoryList: string[] = ['JavaScript', 'React', 'Vue3', 'TypeScript', 'Java', 'PHP', 'Next.js', 'NuxtJS', 'Laravel', 'Node.js', 'Python', 'Ruby'];
  return (
    <section>
      <div className="mx-auto">
        <div className="text-center mt-20 mb-20">
          <h1 className="sm:text-3xl text-2xl font-medium text-center title-font text-text-white mb-4">好きなジャンルをお選びください</h1>
        </div>
        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
          {categoryList.map((category) => {
            return (
              <Category key={category} categoryName={category} />
            )
          })}
        </div>
      </div>
    </section>
  )
}