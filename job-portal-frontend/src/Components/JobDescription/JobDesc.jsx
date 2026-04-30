import { ActionIcon, Button, Divider } from "@mantine/core";
import { IconAdjustments, IconBookmark, IconMapPin } from "@tabler/icons-react";
import React from "react";
import { Link } from "react-router-dom";
import { card, desc, skills } from "../../Data/JobDescData";
import DOMPurify from "dompurify";

const JobDesc = (props) => {
  const data = DOMPurify.sanitize(desc);

  return (
    <div className="w-2/3">
      <div className="flex justify-between ">
        <div className="flex gap-2 items-center">
          <div className="p-3 bg-mine-shaft-800 rounded-xl">
            <img className="h-14 " src={`Icons/Google.png`} alt="company" />
          </div>
          <div className="flex flex-col gap-1">
            <div className="text-2xl font-semibold">Frontend Developer</div>
            <div className="text-lg text-mine-shaft-300">
              Google &#x2022; 2 days ago &#x2022; 120 Applicants
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4 items-center">
          <Link to="/apply-job">
            <Button color="orient.4" className="!min-w-[90px]" variant="light">
              {props.edit ? "Edit" : "Apply"}
            </Button>
          </Link>
          {props.edit ? (
            <Button color="red.5" variant="outline">
              Delete
            </Button>
          ) : (
            <IconBookmark className="text-orient-500 cursor-pointer " />
          )}
        </div>
      </div>
      <Divider my="xl" />
      <div className="flex justify-between">
        {card.map((item, idx) => (
          <div key={idx} className="flex flex-col items-center gap-1">
            <ActionIcon
              variant="light"
              radius="xl"
              aria-label="Settings"
              className="!h-12 !w-12"
              color="orient.5"
            >
              <item.icon className="h-4/5 w-4/5" stroke={1.5} />
            </ActionIcon>
            <div className="text-sm text-mine-shaft-400">{item.name}</div>
            <div className="font-semibold">{item.value}</div>
          </div>
        ))}
      </div>
      <Divider my="xl" />
      <div>
        <div className="text-xl font-semibold mb-5 ">Required Skills</div>
        <div className="flex flex-wrap gap-3">
          {skills.map((skill, idx) => (
            <ActionIcon
              key={idx}
              variant="light"
              radius="md"
              aria-label="Settings"
              className="!h-fit !w-fit font-medium !text-sm"
              p="xs"
              color="orient.5"
            >
              {skill}
            </ActionIcon>
          ))}
        </div>
      </div>
      <Divider my="xl" />
      <div
        className="[&_h4]:text-xl [&_h4]:my-5 [&_h4]:font-semibold [&_*]:text-mine-shaft-300 [&_li]:marker:text-orient-500 [&_li]:mb-1 [&_h4]:text-mine-shaft-200 text-justify"
        dangerouslySetInnerHTML={{ __html: data }}
      ></div>
      <Divider my="xl" />
      <div>
        <div className="text-xl font-semibold mb-5 ">About Company</div>
        <div className="flex justify-between mb-3">
          <div className="flex gap-2 items-center">
            <div className="p-3 bg-mine-shaft-800 rounded-xl">
              <img className="h-8 " src={`Icons/Google.png`} alt="company" />
            </div>
            <div className="flex flex-col ">
              <div className="text-lg font-medium">Google</div>
              <div className=" text-mine-shaft-300">10K+ Employees</div>
            </div>
          </div>
          <Link to="/company">
            <Button color="orient.4" variant="light">
              Company Page
            </Button>
          </Link>
        </div>
        <div className="text-mine-shaft-300 text-justify">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
          sapiente asperiores fugiat error recusandae quaerat autem laborum
          maxime labore molestias pariatur, dolore nulla nihil repudiandae
          mollitia veniam perspiciatis optio ab. Rem sequi exercitationem esse
          velit, quod facilis autem mollitia? Eius impedit quisquam hic eaque, a
          repellendus accusamus. Incidunt harum necessitatibus fugiat eveniet!
          Necessitatibus labore molestiae porro velit totam, distinctio facere.
          Quod eligendi, eaque accusamus dicta sequi quisquam quia odio animi
          obcaecati quo corporis illo a totam alias veritatis sit id praesentium
          tempore at eum reprehenderit blanditiis! Dicta consectetur excepturi
          ipsam.
        </div>
      </div>
    </div>
  );
};

export default JobDesc;
