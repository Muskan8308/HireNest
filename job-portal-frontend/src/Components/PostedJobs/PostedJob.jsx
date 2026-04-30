import { Tabs } from '@mantine/core';
import React from 'react'
import { activeJobs } from "../../Data/PostedJobData";
import PostedJobCard from './PostedJobCard';

const PostedJob = () => {
  return (
    <div className="w-1/6 mt-5">
      <div className="text-2xl font-semibold mb-5">Posted Jobs</div>
      <div>
        <Tabs variant='pills' defaultValue="active">
          <Tabs.List className='[&_button[aria-selected="false"]]:bg-mine-shaft-900 font-medium mb-5'>
            <Tabs.Tab value="active">Active [4]</Tabs.Tab>
            <Tabs.Tab value="draft">Draft [2]</Tabs.Tab>
          </Tabs.List>

          <Tabs.Panel value="active">
            <div className='flex flex-col gap-4'>
                {
                    activeJobs.map((job,index)=> <PostedJobCard key={index} {...job}/>)
                }
            </div>
          </Tabs.Panel>
          <Tabs.Panel value="draft">Second panel</Tabs .Panel>
        </Tabs> 
      </div>
    </div>
  );
}

export default PostedJob