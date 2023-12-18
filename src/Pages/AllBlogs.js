import React, { useEffect, useState } from 'react'
import AllBlogCards from '../Components/AllBlogCards';
import {motion} from 'framer-motion'
import axios from 'axios';
import { API } from '../API';
import { useDispatch } from 'react-redux';
import { setBlogs } from '../Redux/blogSlice';

const AllBlogs = () => {
    window.scrollTo(0, 0);
    const [blogs,setAllBlogs] = useState()
    const dispatch = useDispatch()
    useEffect(()=>{
      axios.get(`${process.env.REACT_APP_API_URL}/blogs`).then(res=>{
        console.log(res?.data)
        setAllBlogs(res?.data)
        dispatch(setBlogs(res?.data))
      })
    },[])
  return (
    <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.3 , duration:0.5,type:'spring  '}} className='pt-16'>
       {blogs &&  <AllBlogCards main={true} />}
    </motion.div>
  )
}

export default AllBlogs