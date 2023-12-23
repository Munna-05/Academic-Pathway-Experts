import React, { useEffect, useState } from 'react'
import AllBlogCards from '../Components/AllBlogCards';
import {motion} from 'framer-motion'
import axios from 'axios';
import { API } from '../API';
import { useDispatch, useSelector } from 'react-redux';
import { setBlogs } from '../Redux/blogSlice';
import LoadingPage from '../Components/LoadingPage/LoadingPage';

const AllBlogs = () => {
    window.scrollTo(0, 0);
    const all_blogs = useSelector((state) => state.blogs.data);
    console.log("🚀 ~ file: AllBlogs.js:12 ~ AllBlogs ~ all_blogs:", all_blogs)

    const [blogs,setAllBlogs] = useState()
    const dispatch = useDispatch()
    useEffect(()=>{
     
     if(!all_blogs){
      axios.get(`${process.env.REACT_APP_API_URL}/blogs`).then(res=>{
        console.log(res?.data)
        setAllBlogs(res?.data)
        dispatch(setBlogs(res?.data))
      }).catch(e=>console.log(e))
     }
     
    },[])
  return (
    <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.3 , duration:0.5,type:'spring  '}} className='pt-16'>
       {blogs || all_blogs ?  <AllBlogCards main={true} /> :<><LoadingPage/></>}

       
    </motion.div>
  )
}

export default AllBlogs