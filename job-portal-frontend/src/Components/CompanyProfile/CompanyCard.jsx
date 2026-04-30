import { ActionIcon } from "@mantine/core";
import { IconAdjustments, IconExternalLink } from "@tabler/icons-react";
import React from "react";
import { Link } from "react-router-dom";

const CompanyCard = (props) => {
  return (
    <div>
      <div className="flex justify-between bg-mine-shaft-900 p-2 rounded-lg items-center">
        <div className="flex gap-2 items-center">
          <div className="p-2 bg-mine-shaft-800 rounded-md">
            <img
              className="h-7 "
              src={`Icons/${props.name}.png`}
              alt="company"
            />
          </div>
          <div>
            <div className="font-semibold">{props.name}</div>
            <div className="text-sm text-mine-shaft-300">
              {props.employees} Employees
            </div>
          </div>
        </div>
        <Link>
          <ActionIcon
            color="orient.4"
            variant="subtle"
          >
            <IconExternalLink
              style={{ width: "80%", height: "80%" }}
            />
          </ActionIcon>
        </Link>
      </div>
    </div>
  );
};

export default CompanyCard;
