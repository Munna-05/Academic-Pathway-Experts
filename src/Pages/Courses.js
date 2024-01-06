import React from 'react'
import { useSelector } from 'react-redux'
import MuiCard from '../Components/MUIComponents/Card'
import CourseCard from '../Components/CourseCard'

const Courses = () => {
    const all_courses = useSelector((state)=>state?.courses?.data)
    console.log("🚀 ~ file: Courses.js:6 ~ Courses ~ all_courses:", all_courses)
    window.scroll(0,0)

  return (
    <div className=' bg-stone-50  p-12'>
        
       <CourseCard data={all_courses}/>
    </div>
  )
}

export default Courses