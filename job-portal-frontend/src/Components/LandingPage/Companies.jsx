import Marquee from 'react-fast-marquee'
import { companies } from "../../Data/Data";

const Companies = () => {
  return (
    <div className="mt-20 pb-5">
        <div className="text-4xl font-semibold text-center text-mine-shaft-100 mb-10">
          Trusted by <span className="text-orient-400">1000+</span> companies
        </div>
        <Marquee pauseOnHover={true}>
          {
            companies.map((company, idx) => 
              <div key={idx} className='mx-8 px-3 py-2 hover:bg-mine-shaft-800 rounded-xl cursor-pointer '>
                <img className='h-14 ' src={`/Companies/${company}.png`} alt={company} />
              </div>
            )
          }
        </Marquee>
    </div>
  )
}

export default Companies