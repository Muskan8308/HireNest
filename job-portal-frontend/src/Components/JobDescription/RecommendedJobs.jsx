import React from "react";
import { jobList } from "../../Data/JobData";
import JobCard from "../FindJobs/JobCard";

const RecommendedJobs = () => {
  return (
    <div>
      <div className="text-xl font-semibold mb-5">Recommended Jobs</div>
      <div className="flex flex-wrap flex-col gap-5">
        {jobList.map((job, idx) => idx < 6 && <JobCard key={idx} {...job} />)}
      </div>
    </div>
  );
};

export default RecommendedJobs;
