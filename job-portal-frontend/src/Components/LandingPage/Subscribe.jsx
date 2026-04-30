import { Button, TextInput } from '@mantine/core';
import React from 'react'

const Subscribe = () => {
  return (
    <div className="mt-20 flex items-center bg-mine-shaft-900 mx-20 py-3 rounded-xl justify-evenly">
      <div className="text-4xl w-2/5 font-semibold text-center text-mine-shaft-100 py-6">
        Never Wants to Miss Any{" "}
        <span className="text-orient-400">Job News</span>
      </div>
      <div className="rounded-xl flex bg-mine-shaft-700 gap-4 px-3 py-2 items-center">
        <TextInput
        className='[&_input]:text-mine-shaft-100 font-semibold'
          variant="unstyled"
          placeholder="Your@gmail.com"
          size="xl"
        />
        <Button size="lg" className='!rounded-lg' color="orient.5" variant="filled">
          Subscribe
        </Button>
      </div>
    </div>
  );
}

export default Subscribe