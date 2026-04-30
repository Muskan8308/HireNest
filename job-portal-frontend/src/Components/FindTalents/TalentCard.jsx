import {
  IconCalendarMonth,
  IconCalendarWeek,
  IconClockHour3,
  IconHeart,
  IconMapPin,
} from "@tabler/icons-react";
import { Avatar, Button, Divider, Modal, Text } from "@mantine/core";
import { Link } from "react-router-dom";
import { useState, useRef } from "react";
import { DateInput, PickerControl, TimeInput } from "@mantine/dates";
import React from "react";
import { useDisclosure } from "@mantine/hooks";
import { Dayjs } from "dayjs";

const TalentCard = (props) => {
  const [opened, { open, close }] = useDisclosure(false);
  const [value, setValue] = useState(null);
  const ref = useRef(null);

  return (
    <div className="bg-mine-shaft-900 p-4 w-96 flex flex-col gap-4 rounded-md hover:shadow-[0_0_4px_2px] !shadow-orient-400 border border-orient-400">
      <div className="flex justify-between ">
        <div className="flex gap-2 items-center">
          <div className="p-2 bg-mine-shaft-800 rounded-full">
            <Avatar src={props.image} alt="user" />
          </div>
          <div>
            <div className="font-semibold">{props.name}</div>
            <div className="text-sm text-mine-shaft-300">
              {props.role} &#x2022; {props.company}
            </div>
          </div>
        </div>
        <IconHeart className="text-mine-shaft-300 cursor-pointer " />
      </div>
      <div className="flex gap-2">
        {props.skills?.map((skill, idx) => (
          <div
            key={idx}
            className=" text-xs py-1 px-2 bg-mine-shaft-800 text-orient-400 rounded-lg"
          >
            {skill}
          </div>
        ))}
      </div>
      <Text lineClamp={3} className="!text-xs  !text-mine-shaft-300">
        {props.about}
      </Text>
      <Divider size="xs" color="mine-shaft.7" />
      {props.invited ? (
        <div className="flex gap-1 text-mine-shaft-200 text-sm items-center">
          <IconCalendarWeek className="h-5 w-5" />
          Interview :{" "}
          <span className="font-semibold">27 August, 2026 10:00 AM</span>
        </div>
      ) : (
        <div className="flex justify-between items-center ">
          <div className="font-semibold text-mine-shaft-200">
            &#8377; {props.expectedCtc}{" "}
          </div>
          <div className="flex items-center gap-1 text-mine-shaft-400 text-xs">
            <IconMapPin className="h-5 w-5" stroke={1.5} />
            {props.location}
          </div>
        </div>
      )}

      <Divider size="xs" color="mine-shaft.7" />

      <div className="flex [&>*]:w-1/2 [&>*]:p-1 items-center">
        {!props.invited && (
          <>
            <Link to="/talent-profile">
              <Button color="orient.5" variant="outline" fullWidth>
                Profile
              </Button>
            </Link>
            <div>
              {props.posted ? (
                <Button
                  color="orient.5"
                  variant="light"
                  rightSection={<IconCalendarWeek className="h-6 w-6" />}
                  fullWidth
                  onClick={open}
                >
                  Schedule
                </Button>
              ) : (
                <Button color="orient.5" variant="light" fullWidth>
                  Message
                </Button>
              )}
            </div>
          </>
        )}
        {props.invited && (
          <>
            <div>
              <Button color="orient.5" variant="outline" fullWidth>
                Accept
              </Button>
            </div>
            <div>
              <Button color="orient.5" variant="light" fullWidth>
                Reject
              </Button>
            </div>
          </>
        )}
      </div>

      <Modal
        opened={opened}
        onClose={close}
        title="Schedule Interview"
        centered
      >
        <div className="flex flex-col gap-4">
          <DateInput
            value={value}
            onChange={setValue}
            label="Date "
            placeholder="Enter Date"
            minDate={new Date()}
          />
          <TimeInput
            label="Time"
            ref={ref}
            onClick={() => ref.current?.showPicker()}
          />
          <Button color="orient.5" variant="light" my={8} fullWidth>
            Schedule
          </Button>
        </div>
      </Modal>
    </div>
  );
};

export default TalentCard;
