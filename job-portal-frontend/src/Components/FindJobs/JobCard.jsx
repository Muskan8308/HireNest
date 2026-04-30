import { IconBookmark, IconClockHour3 } from '@tabler/icons-react'
import { Divider, Text } from '@mantine/core'
import React from 'react'
import { Link } from 'react-router-dom';

const JobCard = (props) => {
  return (
    <Link to={`/jobs`} className="bg-mine-shaft-900 p-4 w-72 flex flex-col gap-4 rounded-md hover:shadow-[0_0_4px_2px] !shadow-orient-400">
      <div className="flex justify-between ">
        <div className="flex gap-2 items-center">
          <div className="p-2 bg-mine-shaft-800 rounded-md">
            <img
              className="h-7 "
              src={`Icons/${props.company}.png`}
              alt="company"
            />
          </div>
          <div>
            <div className="font-semibold">{props.jobTitle}</div>
            <div className="text-sm text-mine-shaft-300">
              {props.company} &#x2022; {props.applicants} Applicants
            </div>
          </div>
        </div>
        <IconBookmark className="text-mine-shaft-300 cursor-pointer " />
      </div>

      <div className="flex gap-2 text-xs [&>div]:py-1 [&>div]:px-2 [&>div]:bg-mine-shaft-800 [&>div]:text-orient-400 [&>div]:rounded-lg">
        <div>{props.experience}</div>
        <div>{props.jobType}</div>
        <div>{props.location}</div>
      </div>

      <Text lineClamp={3} className="!text-xs  !text-mine-shaft-300">
        {props.description}
      </Text>
      <Divider size="xs" color="mine-shaft.7" />

      <div className="flex justify-between items-center ">
        <div className="font-semibold text-mine-shaft-200">
          &#8377;{props.package}{" "}
        </div>
        <div className="flex items-center gap-1 text-mine-shaft-400 text-xs">
          <IconClockHour3 className="h-5 w-5" stroke={1.5} />
          {props.postedDaysAgo} days ago
        </div>
      </div>
    </Link>
  );
}

export default JobCard