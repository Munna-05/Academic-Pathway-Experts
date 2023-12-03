import React from 'react'
import JobCards from '../Components/JobCards'
import {motion} from 'framer-motion'

const AllJobs = () => {
    window.scrollTo(0, 0);

  return (
    <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.2 , duration:0.5,type:'spring  '}} className='pt-16'>
        <JobCards/>
    </motion.div>
  )
}

export default AllJobs