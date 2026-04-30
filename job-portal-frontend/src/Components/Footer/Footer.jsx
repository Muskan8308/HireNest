import React from "react";
import {
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandX,
  IconHexagonLetterH,
} from "@tabler/icons-react";
import { footerLinks } from "../../Data/Data";
import { useLocation } from "react-router-dom";

const Footer = () => {
  
  const location = useLocation();
  return location.pathname != "/signup" && location.pathname != "/login" ? (
    <div className="pt-10 pb-5 flex justify-around bg-mine-shaft-950 font-[poppins]">
      <div className="w-1/4 flex flex-col gap-4">
        <div className="flex gap-1 items-center text-orient-400 ">
          <IconHexagonLetterH className="h-7 w-7 stroke={2.5}" />
          <div className="text-xl">HireNest </div>
        </div>
        <div className="text-sm text-mine-shaft-200">
          Job portal with user profiles, skill updates, certifications and
          experience and admin job postings.
        </div>
        <div className="flex gap-4 text-orient-400 [&>div]:bg-mine-shaft-900 [&>div]:p-2 [&>div]:rounded-full cursor-pointer hover:[&>div]:bg-mine-shaft-600">
          <div>
            <IconBrandInstagram />
          </div>
          <div>
            <IconBrandLinkedin />
          </div>
          <div>
            <IconBrandX />
          </div>
        </div>
      </div>
      <div className="flex justify-around gap-5 w-3/5">
        {footerLinks.map((item, idx) => (
          <div key={idx} className="">
            <div className="text-lg font-semibold mb-4 text-orient-400">
              {item.title}
            </div>
            {item.links.map((link, idx) => (
              <div
                key={idx}
                className="text-mine-shaft-300 text-sm mb-1 hover:text-orient-400 cursor-pointer hover:translate-x-2 duration-300 ease-in-out"
              >
                {link}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  ) : (
    <></>
  );
};

export default Footer;
