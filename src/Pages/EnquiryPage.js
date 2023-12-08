import React from 'react'
import EnquiryForm from '../Components/EnquiryForm'
import {motion} from 'framer-motion'


const EnquiryPage = () => {
    window.scrollTo(0, 0);

  return (
    <motion.div initial={{opacity:0}} animate={{opacity:1 , transition:{duration:1 , delay:0.3}}} className='flex justify-center lg:py-32 '><EnquiryForm/></motion.div>
  )
}

export default EnquiryPage


