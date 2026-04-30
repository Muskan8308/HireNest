import { Button, Divider } from "@mantine/core";
import { Link } from "react-router-dom";
import React from "react";
import { IconArrowLeft } from "@tabler/icons-react";
import Profile from "../TalentProfiles/Profile";
import { profile } from "../../Data/TalentData";
import RecommendTalents from "../TalentProfiles/RecommendTalents";

const TalentProfile = () => {
  return (
    <div className=" bg-mine-shaft-950 font-[poppins] min-h-screen p-4">
      <Divider size="sm" />
      <Link to="/find-talent" className="my-4 inline-block">
        <Button leftSection={<IconArrowLeft size={20} />} color="orient.4" variant="light">
          Back
        </Button>
      </Link>
      <div className="flex gap-8 ">
        <Profile {...profile}/>
        <RecommendTalents/>
      </div>
      
    </div>
  );
};

export default TalentProfile;
