import { Divider } from '@mantine/core';
import React from 'react'
import PostJobs from "../Components/PostJobs/PostJobs";

const PostJob = () => {
 return (
   <div className=" bg-mine-shaft-950 font-[poppins] min-h-screen p-4">
     <Divider size="sm" mx="md" />
     <PostJobs/>
   </div>
 );
}

export default PostJob