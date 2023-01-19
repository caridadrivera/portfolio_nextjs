import React from "react";
import Link from "next/link";
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";
import { RainbowHighlight } from "./RainbowHighlight";
import userData from "../constants/data"

export default function Main() {
  const colors = ["#F59E0B", "#84CC16", "#10B981", "#3B82F6"];
  return (
    <div className="flex flex-row justify-center items-start overflow-hidden">
      <div className="w-full md:w-1/2 mx-auto text-center md:text-left lg:p-20">
      <div className="flex flex-col">
            <Link href="/">
             <h1 className="font-semibold text-xl dark:text-gray-100">
                {userData.name}
            </h1>
             <p className="text-base font-light text-gray-500 dark:text-gray-300">
                {userData.designation}
             </p>
            </Link>
        </div>
        <RoughNotationGroup show={true}>
          <RainbowHighlight color={colors[0]}>
            <h1 className="text-4xl md:text-8xl font-bold text-gray-700 dark:text-gray-200 my-2">
              Developer
            </h1>
          </RainbowHighlight>
          <RainbowHighlight color={colors[1]}>
            <h1 className="text-4xl md:text-8xl font-bold text-gray-700 dark:text-gray-200 my-2">
              Critical Thinker
            </h1>
          </RainbowHighlight>
          <RainbowHighlight color={colors[2]}>
            <h1 className="text-4xl md:text-8xl font-bold text-gray-700 dark:text-gray-200 my-2">
              Fast Learner
            </h1>
          </RainbowHighlight>
        </RoughNotationGroup>
      </div>
      <div className="lg:block  w-full md:w-1/2 sm:w-1/4 -mr-30 mt-20 sm:-ml-30 ">
        <div className=" w-3/5 ">
          <img src={userData.avatarUrl} alt="avatar" className=" shadow" />
        </div>
      </div>
    </div>
  );
}
