import React from "react";
import userData from "../constants/data"

export default function Main() {
  const colors = ["#F59E0B", "#84CC16", "#10B981", "#3B82F6"];
  return (
   
  <div className="lg:flex lg:flex-row sm:flex-col justify-center items-center overflow-hidden">   
     <div className="lg:w-1/5 lg:ml-40 sm:m-20  ">
        <img src={userData.avatarUrl} alt="avatar" className=" shadow" />
      </div>
     <div className="w-full md:w-1/2 mx-auto text-center md:text-left lg:p-20">
       <div className="flex flex-col">
           <h1 className="font-semibold text-xl text-gray-500 dark:text-white-400 light:text-black">
              {userData.name}
            </h1>
            <p className="text-base font-light text-gray-500 dark:text-gray-600 light:text-black">
              {userData.designation}
            </p>
        </div>
    
            <h1 className="text-4xl md:text-8xl font-bold text-gray-700 dark:text-gray-500 my-2">
              Developer
            </h1>
       
            <h1 className="text-4xl md:text-8xl font-bold text-gray-700 dark:text-gray-500 my-2">
              Critical Thinker
            </h1>
  
            <h1 className="text-4xl md:text-8xl font-bold text-gray-700 dark:text-gray-500 my-2">
              Fast Learner
            </h1>

      </div>
    </div>
  );
}
