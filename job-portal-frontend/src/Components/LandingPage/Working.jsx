import React from 'react'
import { work } from "../../Data/Data";
import { Avatar } from '@mantine/core';

const Working = () => {
  return (
    <div className="mt-20 mb-10 pb-5">
      <div className="text-4xl font-semibold text-center text-mine-shaft-100 mb-3">
        How it <span className="text-orient-400">Works</span>
      </div>
      <div className="text-center w-1/2 mx-auto text-mine-shaft-300 text-lg mb-4">
        Effortlessly navigate your dream job search with our simple 3-step
        process.
      </div>

      <div className="flex justify-between items-center ">
        <div className="flex-shrink-0 relative">
          <img
            className="w-[38rem] "
            src="/Working/Girl4.png"
            alt="Girl"
          />
          <div className="w-36 flex flex-col items-center gap-1 py-3 px-1 border-2 border-orient-400 backdrop-blur-md rounded-xl absolute top-[16%] left-[64%]">
            <Avatar
              className="!h-14 !w-14"
              src="/Profiles/avatar6.jpg"
              alt="girl"
            />
            <div className="text-sm font-semibold text-mine-shaft-200 text-center">
              Complete your profile
            </div>
            <div className="text-xs text-mine-shaft-300">70% Completed</div>
          </div>
        </div>

        <div className="flex flex-col max-w-[680px] flex-1 gap-10">
          {work.map((workStep, idx) => (
            <div key={idx} className="flex gap-4 items-start">
              <div className="p-3 bg-orient-300 rounded-full flex-shrink-0">
                <img
                  className="w-9"
                  src={`/Working/${workStep.name}.png`}
                  alt={workStep}
                />
              </div>
              <div className="gap-14">
                <div className="text-mine-shaft-100 text-xl font-semibold">
                  {workStep.name}
                </div>
                <div className="text-mine-shaft-300">{workStep.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Working