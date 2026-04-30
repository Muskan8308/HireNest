import { useState } from "react";
import { Button, Combobox, useCombobox, Text, Box, ActionIcon } from "@mantine/core";
import { IconAdjustments } from "@tabler/icons-react";

const opt = [
  "Relavance",
  "Most Recent",
  "Salary (Low to High)",
  "Salary (High to Low)",
];

export function Sort() {
  const [selectedItem, setSelectedItem] = useState(null);
  const combobox = useCombobox({
    onDropdownClose: () => combobox.resetSelectedOption(),
  });

  const options = opt.map((item) => (
    <Combobox.Option className="text-xs" value={item} key={item}>
      {item}
    </Combobox.Option>
  ));

  return (
    <>
      <Combobox
        store={combobox}
        width={200}
        position="bottom-start"
        withArrow
        onOptionSubmit={(val) => {
          setSelectedItem(val);
          combobox.closeDropdown();
        }}
      >
        <Combobox.Target>
          <Button
            onClick={() => combobox.toggleDropdown()}
            rightSection={<IconAdjustments size={16} className="h-5 w-5 text-orient-400 " />}
            variant="outline"
            color = "orient.4"
            className = "flex items-center px-2 py-1 cursor-pointer hover:bg-mine-shaft-900 text-sm border border-orient-400 rounded-xl pr-1"
          >
            {selectedItem || "Sort By"}
            
          </Button>
        </Combobox.Target>

        <Combobox.Dropdown>
          <Combobox.Options>{options}</Combobox.Options>
        </Combobox.Dropdown>
      </Combobox>
    </>
  );
}
