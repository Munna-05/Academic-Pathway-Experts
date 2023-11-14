import React from 'react'
import { useParams } from 'react-router-dom'
import CountryDetails from '../Components/CountryDetails'
import { countries } from '../DummyData/Datas'

const AboutCountry = () => {
    const {name } = useParams()
    const country = countries.find(res=> res.name === name)
    window.scrollTo(0, 0);
  return (
    <div className='pt-10'><CountryDetails data = {country}/></div>
  )
}

export default AboutCountry