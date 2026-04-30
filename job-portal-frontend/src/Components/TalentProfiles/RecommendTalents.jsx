import React from 'react'
import { talents } from "../../Data/TalentData";
import TalentCard from '../FindTalents/TalentCard'

const RecommendTalents = () => {
  return (
    <div>
        <div className='text-xl font-semibold mb-5'>Recommended Talent</div>
        <div className='flex flex-wrap flex-col gap-5'>
            {
                talents.map((talent, idx) => idx < 4 && <TalentCard key={idx} {...talent} />)
            }
        </div>
    </div>
  )
}

export default RecommendTalents