import {
  IconBookmark,
  IconBookmarkFilled,
  IconCalendarWeek,
  IconClockHour3,
} from "@tabler/icons-react";
import { Button, Divider, Text } from "@mantine/core";
import React from "react";
import { Link } from "react-router-dom";

const Card = (props) => {
  return (
    <Link
      to={`/jobs`}
      className="bg-mine-shaft-900 p-4 w-72 flex flex-col gap-5 rounded-md hover:shadow-[0_0_4px_2px] !shadow-orient-400"
    >
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
        {props.saved ? (
          <IconBookmarkFilled className="text-orient-400 cursor-pointer " />
        ) : (
          <IconBookmark className="text-mine-shaft-300 cursor-pointer " />
        )}
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
          {props.applied || props.interviewing
            ? "Applied "
            : props.offered
            ? "Interviewed "
            : "Posted "}
          {props.postedDaysAgo} days ago
        </div>
      </div>
      {(props.offered || props.interviewing) && (
        <Divider size="xs" color="mine-shaft.7" />
      )}
      {props.offered && (
        <div className="flex gap-2">
          <Button color="orient.4" variant="outline" fullWidth>
            Accept
          </Button>
          <Button color="orient.4" variant="light" fullWidth>
            Reject
          </Button>
        </div>
      )}
      {props.interviewing && (
        <div className="flex gap-1 text-sm items-center">
          <IconCalendarWeek className="text-orient-400 h-5 w-5" />
          Sun, 25 August, 2024 &bull;
          <span className="text-mine-shaft-400"> 10:00 AM</span>
        </div>
      )}
    </Link>
  );
};

export default Card;
