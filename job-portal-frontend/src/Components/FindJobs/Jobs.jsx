import React from 'react'
import JobCard from './JobCard'
import { Sort } from './Sort'
import { jobList } from "../../Data/JobData";

const Jobs = () => {
  return (
    <div className='p-8'>
      <div className = "flex justify-between pb-4">
        <div className = "text-2xl font-semibold mb-4">
          Recommended Jobs
        </div>
        <Sort />
      </div>
      <div className='flex flex-wrap gap-6 mx-[2%]'>
        {
          jobList.map((job, idx) => <JobCard key={idx} {...job}/>)
        }
      </div>
      
    </div>
  )
}

export default Jobs