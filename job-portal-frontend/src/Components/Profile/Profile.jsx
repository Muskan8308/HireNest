import { ActionIcon, Button, Divider, TagsInput, Textarea } from '@mantine/core';
import { IconBriefcase, IconFileDescription, IconMapPin, IconPencil, IconPlus } from '@tabler/icons-react';
import React from 'react'
import ExpCard from './ExpCard';
import CertificateCard from './CertificateCard';
import {useState} from 'react'
import SelectInput from './SelectInput';
import fields from "../../Data/Profile";
import ExpInput from './ExpInput';
import CertiInput from './CertiInput';



const Profile = (props) => {

  const [skills, setSkills] = useState(['React', 'SpringBoot', 'MongoDB','MySQL','Java','C++','C','Ruby','Swift','Docker','DevOps','Express','Go','Python','Django','Figma','Postman'])
  const [edit, setEdit] = useState([false, false, false, false, false]);
  const [about, setAbout] = useState(props.about);
  const [addExp, setAddExp] = useState(false)
  const [addCerti, setAddCerti] = useState(false);

  const select = fields;

  function handleEdit(idx)
  {
    const newEdit = [...edit];
    newEdit[idx] = !newEdit[idx];
    setEdit(newEdit);
    console.log(edit);
  }

  return (
    <div className="w-4/5 mx-auto ">
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

      <div className="px-3 pt-28 ">
        <div className="text-3xl font-semibold flex justify-between">
          {props.name}
          <ActionIcon
            variant="subtle"
            aria-label="Settings"
            size="lg"
            color="orient.4"
            onClick={() => handleEdit(0)}
          >
            {edit[0] ? (
              <IconFileDescription style={{ width: "70%", height: "70%" }} />
            ) : (
              <IconPencil style={{ width: "70%", height: "70%" }} />
            )}
          </ActionIcon>
        </div>
        {edit[0] ? (
          <>
            <div className="flex gap-10 [&>*]:w-1/2">
              <SelectInput {...select[0]} />
              <SelectInput {...select[1]} />
            </div>
            <SelectInput {...select[2]} />
          </>
        ) : (
          <>
            <div className="text-xl flex gap-1 items-center text-mine-shaft-300">
              <IconBriefcase className="h-5 w-5 " stroke={1.5} />
              {props.role} &bull; {props.company}
            </div>
            <div className="text-lg flex gap-1 items-center text-mine-shaft-400">
              <IconMapPin className="h-5 w-5 " stroke={1.5} />
              {props.location}
            </div>
          </>
        )}
      </div>
      <Divider size="sm" my="xl" />
      <div className="">
        <div className="text-2xl font-semibold mb-3 flex justify-between">
          About{" "}
          <ActionIcon
            variant="subtle"
            aria-label="Settings"
            size="lg"
            color="orient.4"
            onClick={() => handleEdit(1)}
          >
            {edit[1] ? (
              <IconFileDescription style={{ width: "70%", height: "70%" }} />
            ) : (
              <IconPencil style={{ width: "70%", height: "70%" }} />
            )}
          </ActionIcon>
        </div>
        {edit[1] ? (
          <Textarea
            autosize
            minRows={3}
            placeholder="Write about yourself...."
            value={about}
            onChange={(event) => setAbout(event.currentTarget.value)}
          />
        ) : (
          <div className="text-sm text-mine-shaft-300 text-justify">
            {about}
          </div>
        )}
      </div>

      <Divider size="sm" my="xl" />
      <div className="">
        <div className="text-2xl font-semibold mb-3 flex justify-between">
          Skills{" "}
          <ActionIcon
            variant="subtle"
            aria-label="Settings"
            size="lg"
            color="orient.4"
            onClick={() => handleEdit(2)}
          >
            {edit[2] ? (
              <IconFileDescription style={{ width: "70%", height: "70%" }} />
            ) : (
              <IconPencil style={{ width: "70%", height: "70%" }} />
            )}
          </ActionIcon>
        </div>
        {edit[2] ? (
          <TagsInput
            placeholder="Add Skills"
            splitChars={[",", " ", "|"]}
            value={skills}
            onChange={setSkills}
          />
        ) : (
          <div className="flex flex-wrap gap-3">
            {skills?.map((skill, idx) => (
              <div
                key={idx}
                className="text-sm bg-orient-300 font-medium text-orient-400 bg-opacity-15 rounded-3xl px-3 py-1 "
              >
                {skill}
              </div>
            ))}
          </div>
        )}
      </div>

      <Divider size="sm" my="xl" />
      <div >
        <div className="text-2xl font-semibold mb-5 flex justify-between">
          Experience{" "}
          <div className="">
            <ActionIcon
              variant="subtle"
              aria-label="Settings"
              size="lg"
              color="orient.4"
              onClick={() => setAddExp(true)}
            >
              <IconPlus style={{ width: "70%", height: "70%" }} />
            </ActionIcon>

            <ActionIcon
              variant="subtle"
              aria-label="Settings"
              size="lg"
              color="orient.4"
              onClick={() => handleEdit(3)}
            >
              {edit[3] ? (
                <IconFileDescription style={{ width: "70%", height: "70%" }} />
              ) : (
                <IconPencil style={{ width: "70%", height: "70%" }} />
              )}
            </ActionIcon>
          </div>
        </div>

        <div className="flex flex-col gap-8">
          {props.experiences?.map((exp, idx) => (
            <ExpCard key={idx} {...exp} edit={edit[3]} />
          ))}
          {addExp && <ExpInput setEdit={setAddExp} add />}
        </div>
      </div>

      <Divider size="sm" my="xl" />
      <div className="">
        <div className="text-2xl font-semibold mb-5 flex justify-between">
          Certificates{" "}
          <div className="">
            <ActionIcon
              variant="subtle"
              aria-label="Settings"
              size="lg"
              color="orient.4"
              onClick={() => setAddCerti(true)}
            >
              <IconPlus style={{ width: "70%", height: "70%" }} />
            </ActionIcon>

            <ActionIcon
              variant="subtle"
              aria-label="Settings"
              size="lg"
              color="orient.4"
              onClick={() => handleEdit(4)}
            >
              {edit[4] ? (
                <IconFileDescription style={{ width: "70%", height: "70%" }} />
              ) : (
                <IconPencil style={{ width: "70%", height: "70%" }} />
              )}
            </ActionIcon>
          </div>
        </div>
        <div className="flex flex-col gap-8">
          {props.certificates?.map((cert, idx) => (
            <CertificateCard key={idx} {...cert} edit={edit[4]} />
          ))}
          {
            addCerti && <CertiInput setEdit={setAddCerti}/>
          }
        </div>
      </div>
    </div>
  );
}

export default Profile
