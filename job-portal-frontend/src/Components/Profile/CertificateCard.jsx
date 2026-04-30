import { ActionIcon } from "@mantine/core";
import { IconTrash } from "@tabler/icons-react";
import React from "react";

const CertificateCard = (props) => {
  return (
    <div className="flex justify-between ">
      <div className="flex gap-4 items-center">
        <div className="p-2 bg-mine-shaft-800 rounded-md">
          <img
            className="h-7 "
            src={`/Icons/${props.issuer}.png`}
            alt="company"
          />
        </div>
        <div className="flex flex-col">
          <div className="font-semibold">{props.name}</div>
          <div className="text-sm text-mine-shaft-300">{props.issuer}</div>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <div className="flex flex-col items-end">
          <div className="text-sm text-mine-shaft-300">{props.date}</div>
          <div className="text-sm text-mine-shaft-300">{props.id}</div>
        </div>
        {props.edit && <ActionIcon
          variant="subtle"
          aria-label="Settings"
          size="lg"
          color="red.4"
        >
          <IconTrash style={{ width: "70%", height: "70%" }} stroke={1.5}/>
        </ActionIcon>}
      </div>
    </div>
  );
};

export default CertificateCard;
