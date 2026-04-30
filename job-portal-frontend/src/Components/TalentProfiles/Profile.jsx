import { Button, Divider } from '@mantine/core';
import { IconBriefcase, IconMapPin } from '@tabler/icons-react';
import React from 'react'
import ExpCard from './ExpCard';
import CertificateCard from './CertificateCard';

const Profile = (props) => {
  return (
    <div className="w-2/3 ">
      <div className="relative">
        <img
          src="/UserProfile/Banner.jpg"
          className="rounded-t-2xl"
          alt="banner"
        />
        <img
          src="/Profiles/avatar2.jpg"
          className="w-48 -bottom-1/3 left-3 absolute rounded-full border-4 border-mine-shaft-950"
          alt="user"
        />
      </div>

      <div className="px-3 pt-24 ">
        <div className="text-3xl font-semibold flex justify-between">
          {props.name}
          <Button color="orient.5" variant="light">
            Message
          </Button>
        </div>
        <div className="text-xl flex gap-1 items-center text-mine-shaft-300">
          <IconBriefcase className="h-5 w-5 " stroke={1.5} />
          {props.role} &bull; {props.company}
        </div>
        <div className="text-lg flex gap-1 items-center text-mine-shaft-400">
          <IconMapPin className="h-5 w-5 " stroke={1.5} />
          {props.location}
        </div>
      </div>
      <Divider size="sm" my="xl" />
      <div className="">
        <div className="text-2xl font-semibold mb-3">About</div>
        <div className="text-sm text-mine-shaft-300 text-justify">
          {props.about}
        </div>
      </div>

      <Divider size="sm" my="xl" />
      <div className="">
        <div className="text-2xl font-semibold mb-3">Skills</div>
        <div className="flex flex-wrap gap-3">
          {props.skills?.map((skill, idx) => (
            <div key={idx} className="text-sm bg-orient-300 font-medium text-orient-400 bg-opacity-15 rounded-3xl px-3 py-1 ">
              {skill}
            </div>
          ))}
        </div>
      </div>

      <Divider size="sm" my="xl" />
      <div className="">
        <div className="text-2xl font-semibold mb-5">Experience</div>
        <div className="flex flex-col gap-8">
          {props.experiences?.map((exp, idx) => (
            <ExpCard key={idx} {...exp} />
          ))}
        </div>
      </div>

      <Divider size="sm" my="xl" />
      <div className="">
        <div className="text-2xl font-semibold mb-5">Certificates</div>
        <div className="flex flex-col gap-8">
          {props.certificates?.map((cert, idx) => (
            <CertificateCard key={idx} {...cert} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Profile