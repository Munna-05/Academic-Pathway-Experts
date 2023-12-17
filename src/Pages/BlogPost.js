import React, { useState } from 'react'
import BlogPostComponent from '../Components/BlogPostComponent'
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const BlogPost = () => {
    window.scrollTo(0, 0);
    const [selectedBlog,setSelectedBlog] = useState()
    const {id} = useParams()
    const data = useSelector(state=>state.blogs.data)
  return (
    <div className='pt-16'><BlogPostComponent data={data?.find(res=> res?._id === id)}/></div>
  )
}

export default BlogPost