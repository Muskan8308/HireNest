
import SearchBar from '../Components/FindJobs/SearchBar'
import { Divider } from '@mantine/core'
import Jobs from "../Components/FindJobs/Jobs";

const FindJobs = () => {
  return (
    <div className=' bg-mine-shaft-950 '>
      <Divider size="sm" mx="md" />
      <SearchBar />
      <Divider size="sm" mx="md" />
      <Jobs />
    </div>
  );
}

export default FindJobs