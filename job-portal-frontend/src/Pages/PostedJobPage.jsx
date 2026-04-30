import { Divider } from "@mantine/core";
import React from "react";
import PostedJob from "../Components/PostedJobs/PostedJob";
import PostedJobDesc from "../Components/PostedJobs/PostedJobDesc";

const PostedJobPage = () => {
  return (
    <div className=" bg-mine-shaft-950 font-[poppins] min-h-screen p-4">
      <Divider size="sm" />
      <div className="flex gap-5">
        <PostedJob/>
        <PostedJobDesc/> 
      </div>

    </div>
  );
};

export default PostedJobPage;
