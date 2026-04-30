import { Button, Divider } from '@mantine/core'
import { IconArrowLeft } from '@tabler/icons-react'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Company from "../Components/CompanyProfile/Company";
import SimilarCompanies from "../Components/CompanyProfile/SimilarCompanies";

const CompanyPage = () => {

  const navigate = useNavigate();

  return (
    <div className=" bg-mine-shaft-950 font-[poppins] min-h-screen p-4">
      <Divider size="sm" />
      <Button
        leftSection={<IconArrowLeft size={20} />}
        my="md"
        color="orient.4"
        variant="light"
        onClick={() => navigate(-1)}
      >
        Back
      </Button>
      <div className='flex gap-5 justify-between'>
        <Company />
      <SimilarCompanies />
      </div>
      
    </div>
  );
}

export default CompanyPage