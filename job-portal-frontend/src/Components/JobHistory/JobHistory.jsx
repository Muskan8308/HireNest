import { Tabs } from '@mantine/core'
import React from 'react'
import Card from './Card'
import { jobList } from "../../Data/JobData";

const JobHistory = () => {
  return (
    <div className="">
      <div className="text-2xl font-semibold my-5"> Job History</div>
      <div>
        <Tabs variant="outline" defaultValue="applied" radius="md">
          <Tabs.List className="mb-5 [&_button]:!text-lg font-semibold [&_button[data-active='true']]:text-orient-400">
            <Tabs.Tab value="applied">Applied</Tabs.Tab>
            <Tabs.Tab value="saved">Saved</Tabs.Tab>
            <Tabs.Tab value="offered">Offered</Tabs.Tab>
            <Tabs.Tab value="interviewing">Interviewing</Tabs.Tab>
          </Tabs.List>

          <Tabs.Panel value="applied">
            
            <div className="flex flex-wrap gap-6 mx-[2%]">
              {jobList.map((job, idx) => (
                <Card key={idx} {...job} applied />
              ))}
            </div>
          </Tabs.Panel>
          <Tabs.Panel value="saved">
           
            <div className="flex flex-wrap gap-6 mx-[2%]">
              {jobList.map((job, idx) => (
                <Card key={idx} {...job} saved
                 />
              ))}
            </div>
          </Tabs.Panel>
          <Tabs.Panel value="offered">
            <div className="flex flex-wrap gap-6 mx-[2%] ">
              {jobList.map((job, idx) => (
                <Card key={idx} {...job} offered/>
              ))}
            </div>
          </Tabs.Panel>
          <Tabs.Panel value="interviewing">
            <div className="flex flex-wrap gap-6 mx-[2%]">
              {jobList.map((job, idx) => (
                <Card key={idx} {...job} interviewing/>
              ))}
            </div>
          </Tabs.Panel>
        </Tabs>
      </div>
    </div>
  );
}

export default JobHistory