/* eslint-disable no-unused-vars */
import {
  Button,
  Divider,
  FileInput,
  LoadingOverlay,
  Notification,
  NumberInput,
  rem,
  Textarea,
  TextInput,
} from "@mantine/core";
import { IconCheck, IconPaperclip } from "@tabler/icons-react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const ApplyJobComp = () => {

    const [preview, setPreview] = useState(false);
    const [submit, setSubmit] = useState(false);
    const [sec, setSec] = useState(5);
    const navigate = useNavigate();

    const handlePreview = () => {
        setPreview(!preview)
        window.scrollTo({top: 0, behavior: "smooth"});
    }

    const handleSubmit = () => {
        setSubmit(true);
        let counter = 5; 
        const interval = setInterval(() => {
            counter--
            setSec(counter);
            if(counter == 0)
              navigate("/find-jobs")
        }, 1000)
  }

  return (
    <>
      <div className="w-2/3 mx-auto">
        <LoadingOverlay
          visible={submit}
          zIndex={1000}
          overlayProps={{ radius: "sm", blur: 2 }}
          loaderProps={{ color: "orient.5", type: "bars" }}
          className="!fixed"
        />
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
        </div>
        <Divider my="xl" />
        <div className="text-xl font-semibold mb-5">
          Submit Your Application
        </div>
        <div className="flex flex-col gap-7">
          <div className="flex gap-10 [&>*]:w-1/2">
            <TextInput
              label="Full Name"
              placeholder="Enter your full name"
              withAsterisk
              readOnly={preview}
              variant={preview ? "unstyled" : "default"}
              className={preview ? "text-mine-shaft-300 font-semibold" : ""}
            />
            <TextInput
              label="Email"
              placeholder="Enter your email address"
              withAsterisk
              readOnly={preview}
              variant={preview ? "unstyled" : "default"}
              className={preview ? "text-mine-shaft-300 font-semibold" : ""}
            />
          </div>
          <div className="flex gap-10 [&>*]:w-1/2">
            <NumberInput
              label="Phone Number"
              placeholder="Enter your phone number"
              withAsterisk
              hideControls
              min={0}
              max={9999999999}
              clampBehavior="strict"
              readOnly={preview}
              variant={preview ? "unstyled" : "default"}
              className={preview ? "text-mine-shaft-300 font-semibold" : ""}
            />
            <TextInput
              label="Personal Website"
              placeholder="Enter your personal website URL"
              readOnly={preview}
              variant={preview ? "unstyled" : "default"}
              className={preview ? "text-mine-shaft-300 font-semibold" : ""}
            />
          </div>
          <FileInput
            leftSection={<IconPaperclip stroke={1.5} />}
            label="Attach your CV"
            placeholder="Your CV"
            leftSectionPointerEvents="none"
            withAsterisk
            readOnly={preview}
            variant={preview ? "unstyled" : "default"}
            className={preview ? "text-mine-shaft-300 font-semibold" : ""}
          />
          <Textarea
            placeholder="Try something about yourself..."
            label="Cover Letter"
            autosize
            minRows={4}
            withAsterisk
            readOnly={preview}
            variant={preview ? "unstyled" : "default"}
            className={preview ? "text-mine-shaft-300 font-semibold" : ""}
          />
          {!preview && (
            <Button
              fullWidth
              color="orient.4"
              variant="light"
              onClick={handlePreview}
            >
              Preview
            </Button>
          )}
          {preview && (
            <div className="flex gap-10 [&>*]:w-1/2">
              <Button
                fullWidth
                color="orient.4"
                variant="outline"
                onClick={handlePreview}
              >
                Edit
              </Button>
              <Button
                fullWidth
                color="orient.4"
                variant="light"
                onClick={handleSubmit}
              >
                Submit
              </Button>
            </div>
          )}
        </div>
      </div>
      <Notification
        icon={<IconCheck style={{ width: rem(20), height: rem(20) }} />}
        color="teal"
        title="Application Submitted!!"
        mt="md"
        withCloseButton={false}
        className={`z-[1001] border !border-orient-500 !fixed top-0 left-[35%] -translate-y-24 transition duration-300 ease-in-out ${
          submit ? "translate-y-0" : "-translate-y-24"
        }`}
      >
        Redirecting to Find Jobs Page in {sec} seconds...
      </Notification>
    </>
  );
};

export default ApplyJobComp;
