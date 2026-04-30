import React from "react";
import { Link, useLocation } from "react-router-dom";

const NavLinks = () => {
  const links = [
    { name: "Find Jobs", url: "/find-jobs" },
    { name: "Find Talent", url: "/find-talent" },
    { name: "Post Jobs", url: "/post-jobs" },
    { name: "Posted Jobs", url: "/posted-jobs" },
    { name : "Job History", url: "/job-history" },
    { name : "SignUp", url: "/signup" }

  ];
  const location = useLocation();   // useLocation hook to get the current path i.e /jobs
  return (
    <div className="flex gap-4 text-mine-shaft-200 h-full items-center">
      {links.map((link, idx) => (
        <div key={idx} className={`${location.pathname == link.url ? "border-orient-400 text-orient-400 " : "border-transparent "} border-t-[3px] h-full flex items-center`} >
          <Link  to={link.url}>
            {link.name}
          </Link>
        </div>
      ))}
    </div>
  );
};

export default NavLinks;
