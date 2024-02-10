import React from 'react'
import Helmet from '../components/Helmet/Helmet'
import CommonSection from '../components/UI/CommonSection'
import ServiceSection from '../components/UI/ServiceSection'

const Services = () => {
  return (
    <Helmet title = "Services">
      <CommonSection title="Our Popular Servives"/>
      <ServiceSection/>
    </Helmet>
  )
}

export default Services