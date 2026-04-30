import TalentCard from "./TalentCard";
import { Sort } from "../FindJobs/Sort";
import { talents } from "../../Data/TalentData";

const Talents = () => {
  return (
    <div className="p-8">
      <div className="flex justify-between pb-4">
        <div className="text-2xl font-semibold mb-4">Talents</div>
        <Sort />
      </div>
      <div className="flex flex-wrap gap-6 mx-[2%] justify-between">
        {talents.map((talent, idx) => (
            <TalentCard key={idx} {...talent} />
        ))}
      </div>
    </div>
  );
};

export default Talents;
