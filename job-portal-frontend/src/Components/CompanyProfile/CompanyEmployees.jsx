import React from 'react'
import { talents } from '../../Data/TalentData';
import TalentCard from '../FindTalents/TalentCard';

const CompanyEmployees = () => {
  return (
    <div className="flex flex-wrap gap-14 mx-[2%] ">
      {talents.map((talent, idx) => (idx < 6 &&
        <TalentCard key={idx} {...talent} />
      ))}
    </div>
  );
}

export default CompanyEmployees