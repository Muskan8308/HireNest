import React from "react";
import image from "/Default/heroImage.png";
import { Avatar, TextInput } from "@mantine/core";
import { IconSearch } from "@tabler/icons-react";

export const DreamJob = () => {
  return (
    <div className="flex items-center px-20 space-between pt-9">
      {/* Left section */}
      <div className="flex flex-col w-[45%] gap-5 ">
        <div className="text-5xl font-bold text-mine-shaft-100 [&>span]:text-orient-400 leading-tight">
          Find your <span>Dream Job</span> with us
        </div>

        <div className="text-lg text-mine-shaft-300">
          Good life begins with a good company. Start explore thousands of jobs
          in one place.
        </div>

        <div className="flex gap-5 mt-5">
          <TextInput
            label="Job Title"
            placeholder="Sotfware Engineer"
            className="bg-mine-shaft-900 rounded-lg p-1 px-2 text-mine-shaft-100 [&_input]:!text-mine-shaft-100"
            variant="unstyled"
          />
          <TextInput
            label="Job Type"
            placeholder="Fulltime"
            className="bg-mine-shaft-900 rounded-lg p-1 px-2 text-mine-shaft-100 [&_input]:!text-mine-shaft-100"
            variant="unstyled"
          />
          <div
            className="flex items-center justify-center bg-orient-400 text-mine-shaft-100 p-2 h-full w-20
           rounded-lg cursor-pointer hover:bg-orient-600 "
          >
            <IconSearch className="h-[75%] w-[75%]" />
          </div>
        </div>
      </div>

      {/* Right section */}
      <div className="w-1/2 flex items-center justify-center relative">
        <img
          src={image}
          alt="Dream Job"
          className="
            max-h-[80vh]
            max-w-[32rem]
            w-auto
            h-auto         
          "
        />
        <div className="w-fit border-orient-400 border rounded-lg absolute top-[47%] right-[0%] p-4 backdrop-blur-md">
          <div className="text-center text-mine-shaft-100 mb-1 text-sm ">
            10K+ got Job
          </div>
          <Avatar.Group>
            <Avatar src="Profiles/avatar1.jpg" />
            <Avatar src="Profiles/avatar2.jpg" />
            <Avatar src="Profiles/avatar3.png" />
            <Avatar>+9K</Avatar>
          </Avatar.Group>
        </div>
        <div className="absolute left-[2%] top-[28%] w-fit border-orient-400 border rounded-lg p-2 backdrop-blur-md">
          <div className="flex gap-2 items-center">
            <div className="w-12 h-12 p-1 mb-2">
              <img src="Companies/google.jpg" className="rounded-lg" />
            </div>
            <div className="text-sm text-mine-shaft-100">
              <div>Software Engineer</div>
              <div className="text-mine-shaft-200 text-xs">Bangalore</div>
            </div>
          </div>
          <div className="flex gap-2 text-mine-shaft-200 text-xs justify-around ">
            <span>1 day ago</span>
            <span>120 Applications</span>
          </div>
        </div>
      </div>
    </div>
  );
};
