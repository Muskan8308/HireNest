import { Divider } from "@mantine/core";
import { dropdownData } from "../../Data/JobData";
import { MultiSelectInput } from "./MultiSelectInput";
import { RangeSlider } from "@mantine/core";
import { useState } from "react";
import React from "react";

const SearchBar = () => {
      const [value, setValue] = useState([40, 80]);

  return (
    <div className="flex px-5 py-8  bg-mine-shaft-950">
      {dropdownData.map((data, idx) => (
        <>
          <div key={idx} className="w-1/5  ">
            <MultiSelectInput {...data} />
          </div>
          <Divider mr="xs" size="xs" orientation="vertical" />
        </>
      ))}
      <div className="w-1/5 [&_.mantine-Slider-label]:!translate-y-11">
        <div className="flex justify-between text-sm">
          <div>Salary</div>
          <div>&#8377;{value[0]} LPA - &#8377;{value[1]} LPA</div>
        </div>
        <RangeSlider
          size="xs"
          color="orient.4"
          value={value}
          onChange={setValue}
          labelTransitionProps={
            {
              transition : 'skew-down',
              duration : 150,
              timingFunction : 'linear'
            }
          }
        />
      </div>
    </div>
  );
};

export default SearchBar;
