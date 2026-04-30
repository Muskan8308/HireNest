import React from 'react'
import CompanyCard from './CompanyCard';
import { similar } from "../../Data/CompanyData";

const SimilarCompanies = () => {
  return (
    <div className='w-1/4'>
      <div className="text-xl font-semibold mb-5">Similar Companies</div>
      <div className="flex flex-wrap flex-col gap-5">
        {similar.map(
          (company, idx) => <CompanyCard key={idx} {...company} />
        )}
      </div>
    </div>
  );
}

export default SimilarCompanies