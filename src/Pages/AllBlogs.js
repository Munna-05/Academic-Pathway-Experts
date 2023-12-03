import React from 'react'
import AllBlogCards from '../Components/AllBlogCards';
import {motion} from 'framer-motion'

const AllBlogs = () => {
    window.scrollTo(0, 0);
  return (
    <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.3 , duration:0.5,type:'spring  '}} className='pt-16'>
        <AllBlogCards/>
    </motion.div>
  )
}

export default AllBlogs