import { Button, TextInput } from "@mantine/core";
import React from "react";
import {useState} from "react";
import fields from "../../Data/Profile";
import SelectInput from "./SelectInput";
import { MonthPickerInput } from "@mantine/dates";

const CertiInput = (props) => {
  const [issueDate, setIssueDate] = useState(new Date())
  const select = fields;
  return (
    <div className="flex flex-col gap-3">
      <div className="text-lg font-semibold">Add Certificate</div>
      <div className="flex gap-10 [&>*]:w-1/2">
        <TextInput label="Title" withAsterisk placeholder="Enter Title" />
        <SelectInput {...select[1]} />
      </div>
      <div className="flex gap-10 [&>*]:w-1/2">
        <MonthPickerInput
          label="Issue Date"
          placeholder="Pick Date"
          withAsterisk
          maxDate={new Date()}
          value={issueDate}
          onChange={setIssueDate}
        />
        <TextInput label="Certificate ID" withAsterisk placeholder="Enter ID " />
      </div>
      <div className="flex gap-10">
        <Button
          onClick={() => props.setEdit(false)}
          color="orient.4"
          variant="outline"
        >
          Save
        </Button>
        <Button
          onClick={() => props.setEdit(false)}
          color="red.4"
          variant="light"
        >
          Cancel
        </Button>
      </div>
    </div>
  );
};

export default CertiInput;
