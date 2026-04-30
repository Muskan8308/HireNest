import { Badge, Tabs } from '@mantine/core';
import JobDesc from '../JobDescription/JobDesc';
import { talents } from "../../Data/TalentData";
import TalentCard from '../FindTalents/TalentCard';

const PostedJobDesc = () => {
  return (
    <div className="mt-5 w-3/4 px-5">
      <div className="text-2xl font-semibold flex items-center">
        Software Engineer{" "}
        <Badge variant="light" ml="sm" color="orient.4" size="sm" radius="sm">
          Badge
        </Badge>
      </div>
      <div className="font-medium text-mine-shaft-300">
        New York, United States
      </div>
      <div>
        <Tabs variant="outline" defaultValue="overview" radius="md">
          <Tabs.List className="mb-5 [&_button]:!text-lg font-semibold [&_button[data-active='true']]:text-orient-400">
            <Tabs.Tab value="overview">Overview</Tabs.Tab>
            <Tabs.Tab value="applicants">Applicants</Tabs.Tab>
            <Tabs.Tab value="invited">Invited</Tabs.Tab>
          </Tabs.List>

          <Tabs.Panel value="overview" className="[&>div]:w-full">
            <JobDesc edit />
          </Tabs.Panel>
          <Tabs.Panel value="applicants">
            <div className="flex flex-wrap gap-10 justify-around mx-[2%] ">
              {talents.map(
                (talent, idx) =>
                  idx < 6 && <TalentCard key={idx} {...talent} posted />
              )}
            </div>
          </Tabs.Panel>
          <Tabs.Panel value="invited">
            <div className="flex flex-wrap gap-10 justify-around mx-[2%] ">
              {talents.map(
                (talent, idx) =>
                  idx < 6 && <TalentCard key={idx} {...talent} posted invited />
              )}
            </div>
          </Tabs.Panel>
        </Tabs>
      </div>
    </div>
  );
}

export default PostedJobDesc