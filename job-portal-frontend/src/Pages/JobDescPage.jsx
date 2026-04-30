import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Divider } from '@mantine/core';
import { IconArrowLeft } from '@tabler/icons-react';
import JobDesc from "../Components/JobDescription/JobDesc";
import RecommendedJobs from "../Components/JobDescription/RecommendedJobs";

const JobDescPage = () => {
  return (
    <div className=" bg-mine-shaft-950 font-[poppins] min-h-screen p-4">
      <Divider size="sm" />
      <Link to="/find-jobs" className="my-4 inline-block">
        <Button
          leftSection={<IconArrowLeft size={20} />}
          color="orient.4"
          variant="light"
        >
          Back
        </Button>
      </Link>
      <div className="flex gap-8 justify-around mt-3">
        <JobDesc/>
        <RecommendedJobs/>
      </div>
    </div>
  );
}

export default JobDescPage