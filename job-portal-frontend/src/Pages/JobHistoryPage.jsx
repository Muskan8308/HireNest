import { Divider } from '@mantine/core'
import React from 'react'
import JobHistory from "../Components/JobHistory/JobHistory";

const JobHistoryPage = () => {
  return (
   <div className=" bg-mine-shaft-950 font-[poppins] min-h-screen p-4">
        <Divider size="sm" />
        <div className="flex gap-5">
        <JobHistory/> 
        </div>
   
    </div>
  )
}

export default JobHistoryPage