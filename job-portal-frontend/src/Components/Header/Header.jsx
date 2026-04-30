import React from "react";
import { IconHexagonLetterH } from "@tabler/icons-react";
import { IconBell } from "@tabler/icons-react";
import { IconSettings } from "@tabler/icons-react";
import { Avatar, Button } from "@mantine/core";
import { Indicator } from "@mantine/core";
import NavLinks from "./NavLinks";
import ProfileMenu from "./ProfileMenu";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

export const Header = () => {
  const user = useSelector((state) => state.user);
  const location = useLocation();

  return location.pathname != "/signup" && location.pathname != "/login" ? (
    <div className="w-full bg-mine-shaft-950 h-20 font-[poppins] text-white flex justify-between px-6 items-center">
      <div className="flex gap-1 items-center text-orient-400">
        <IconHexagonLetterH className="h-10 w-10 stroke={2.5}" />
        <div className="text-3xl">HireNest </div>
      </div>

      <NavLinks />

      <div className="flex gap-2 items-center">
        {user ? (
          <ProfileMenu />
        ) : (
          <Link to="/login">
            <Button variant="subtle" color="orient.4">
              Login
            </Button>
          </Link>
        )}
        {/* <div className="bg-mine-shaft-900 p-1.5 rounded-full">
          <IconSettings />
        </div> */}
        <div className="bg-mine-shaft-900 p-1.5 rounded-full">
          <Indicator color="orient.4" size={8} offset={7} processing>
            <IconBell />
          </Indicator>
        </div>
      </div>
    </div>
  ) : (
    <></>
  );
};
