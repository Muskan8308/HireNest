import { Button, Divider } from "@mantine/core";
import { IconArrowLeft } from "@tabler/icons-react";
import React from "react";
import { Link } from "react-router-dom";
import ApplyJobComp from "../Components/ApplyJobs/ApplyJobComp";

const ApplyJobPage = () => {
  return (
    <div className=" bg-mine-shaft-950 font-[poppins] min-h-screen p-4">
      <Divider size="sm" />
      <Link to="/jobs" className="my-4 inline-block">
        <Button
          leftSection={<IconArrowLeft size={20} />}
          color="orient.4"
          variant="light"
        >
          Back
        </Button>
      </Link>
      <ApplyJobComp />
    </div>
  );
};

export default ApplyJobPage;
