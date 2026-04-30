import { Divider } from '@mantine/core';
import React from 'react'
import SearchBar from "../Components/FindTalents/SearchBar";
import Talents from "../Components/FindTalents/Talents";

const FindTalent = () => {
  return (
    <div className=" bg-mine-shaft-950 font-[poppins] min-h-screen">
      <Divider size="sm" mx="md" />
      <SearchBar />
      <Divider size="sm" mx="md" />
      <Talents />
    </div>
  );
}

export default FindTalent