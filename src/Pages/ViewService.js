import React from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import ServiceDetails from '../Components/ServiceDetails';

const ViewService = () => {
    window.scrollTo(0, 0);

    const {id} = useParams()
    const service = useSelector(state=>state.services.data)
    const selectedService = service.find(res=>res?._id === id)
    console.log("🚀 ~ file: ViewService.js:11 ~ ViewService ~ selectedService:", selectedService)
  return (
    <div className='pt-16'><ServiceDetails data={selectedService}/></div>
  )
}

export default ViewService