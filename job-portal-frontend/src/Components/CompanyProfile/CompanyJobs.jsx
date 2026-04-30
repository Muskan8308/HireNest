import React from 'react'
import { jobList } from "../../Data/JobData";
import JobCard from '../FindJobs/JobCard';

const CompanyJobs = () => {
  return (
    <div className="flex flex-wrap gap-6 mx-[2%]">
      {jobList.map((job, idx) => (
        <JobCard key={idx} {...job} />
      ))}
    </div>
  );
}

export default CompanyJobs