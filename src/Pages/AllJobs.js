import React from 'react'
import JobCards from '../Components/JobCards'

const AllJobs = () => {
    window.scrollTo(0, 0);

  return (
    <div className='pt-16'>
        <JobCards/>
    </div>
  )
}

export default AllJobs