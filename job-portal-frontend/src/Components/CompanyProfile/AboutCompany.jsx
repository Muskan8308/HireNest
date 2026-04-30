import React from 'react'
import { companyData } from '../../Data/CompanyData'

const AboutCompany = () => {
  return (
    <div>
        {
            Object.keys(companyData).map((key, idx) => key != 'Name' && <div key={idx}>
                <div className="text-xl my-3 font-semibold">{key}</div>
                
                {key != 'Website' && <div className = "text-sm text-mine-shaft-300 text-justify">{key != "Specialties" ? companyData[key] : companyData[key].map((item, i) => <span key={i}> &bull; {item}</span>)}</div>}
                
                {key == 'Website' && <a href={companyData[key]} target='_blank' className = "text-sm text-orient-400 text-justify">{companyData[key]}</a>}
            </div>)
        }
    </div>
  )
}

export default AboutCompany