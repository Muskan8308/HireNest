import { Avatar, Button, Divider, Tabs } from "@mantine/core";
import { IconBriefcase, IconMapPin } from "@tabler/icons-react";
import React from "react";
import AboutCompany from "./AboutCompany";
import CompanyJobs from "./CompanyJobs";
import CompanyEmployees from "./CompanyEmployees";
import SimilarCompanies from "./SimilarCompanies";

const Company = () => {
  return (
    <div className="w-3/4">
      <div className="relative">
        <img
          src="/UserProfile/Banner.jpg"
          className="rounded-t-2xl"
          alt="banner"
        />
        <img
          src="/Icons/Google.png"
          className="w-48 -bottom-1/4 left-5 absolute rounded-3xl border-4 bg-mine-shaft-950  border-mine-shaft-950"
          alt="user"
        />
      </div>
      <div className="px-3 pt-20 ">
        <div className="text-3xl font-semibold flex justify-between">
          Google
          <Avatar.Group>
            <Avatar src="Profiles/avatar1.jpg" />
            <Avatar src="Profiles/avatar2.jpg" />
            <Avatar src="Profiles/avatar3.png" />
            <Avatar>+10k</Avatar>
          </Avatar.Group>
        </div>

        <div className="text-lg flex gap-1 items-center text-mine-shaft-400">
          <IconMapPin className="h-5 w-5 " stroke={1.5} />
          Bangalore, India
        </div>
      </div>
      <Divider size="sm" my="xl" />
      <div>
        <Tabs variant="outline" defaultValue="about" radius="md">
          <Tabs.List className="mb-5 [&_button]:!text-lg font-semibold [&_button[data-active='true']]:text-orient-400">
            <Tabs.Tab value="about">About</Tabs.Tab>
            <Tabs.Tab value="jobs">Jobs</Tabs.Tab>
            <Tabs.Tab value="employees">Employees</Tabs.Tab>
          </Tabs.List>

          <Tabs.Panel value="about"><AboutCompany  /></Tabs.Panel>
          <Tabs.Panel value="jobs"><CompanyJobs/></Tabs.Panel>
          <Tabs.Panel value="employees"><CompanyEmployees/></Tabs.Panel>
        </Tabs>
      </div>
    </div>
  );
};

export default Company;
