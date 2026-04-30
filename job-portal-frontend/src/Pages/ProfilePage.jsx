import { Divider } from '@mantine/core';
import React from 'react'
import Profile from "../Components/Profile/Profile";
import { profile } from "../Data/TalentData";

const ProfilePage = () => {
  return (
    <div className=" bg-mine-shaft-950 font-[poppins] min-h-screen ">
      <Divider mx="md" mb="xl" />
      <Profile {...profile}/>
    </div>
  );
}

export default ProfilePage