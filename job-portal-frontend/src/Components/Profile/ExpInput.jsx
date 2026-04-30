import React from "react";
import fields from "../../Data/Profile";
import SelectInput from "./SelectInput";
import { Button, Checkbox, Textarea } from "@mantine/core";
import { MonthPickerInput } from "@mantine/dates";
import { useState } from "react";

const ExpInput = (props) => {
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
  const [checked, setChecked] = useState(false);

  const select = fields;
  const [desc, setDesc] = useState(
    "Developing and maintaining web applications using React and Node.js. Collaborating with cross-functional teams to design scalable solutions."
  );
  return (
    <div className="flex flex-col gap-5">
      <div className="text-lg font-semibold">{props.add ? "Add " : "Edit "} Experience</div>
      <div className="flex gap-10 [&>*]:w-1/2">
        <SelectInput {...select[0]} />
        <SelectInput {...select[1]} />
      </div>
      <SelectInput {...select[2]} />
      <Textarea
        autosize
        minRows={3}
        label="Summary"
        placeholder="Enter job summary...."
        withAsterisk
        value={desc}
        onChange={(event) => setDesc(event.currentTarget.value)}
      />
      <div className="flex gap-10 [&>*]:w-1/2">
        <MonthPickerInput
          label="Start Date"
          placeholder="Pick Date"
          maxDate={endDate || undefined}
          value={startDate}
          withAsterisk
          onChange={setStartDate}
        />
        <MonthPickerInput
          label="End Date"
          placeholder="Pick Date"
          withAsterisk
          minDate={startDate || undefined}
          value={endDate}
          onChange={setEndDate}
          disabled={checked}
        />
      </div>
      <Checkbox
        checked={checked}
        onChange={(event) => setChecked(event.currentTarget.checked)}
        autoContrast
        label="Currently working here."
      />

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

export default ExpInput;
