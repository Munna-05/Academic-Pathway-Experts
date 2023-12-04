import React from 'react'
import JobInformations from '../Components/JobInformations';
import {motion} from 'framer-motion'

const JobDetails = () => {
    window.scrollTo(0, 0);
  return (
    <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.3}} className='pt-16'><JobInformations/></motion.div>
  )
}

export default JobDetails