import React from 'react'
import BookingForm from '../components/UI/BookingForm'
import CommonSection from '../components/UI/CommonSection'
import PackageItem from '../components/UI/packageItem'
import "../styles/package.css"

const Packages = () => {
  return (
    <>
      <CommonSection title="Packages"/>
      <div className='package__container'>
      <PackageItem/>
      <PackageItem/>
      <PackageItem/>
      <BookingForm/>
      </div>
    </>
  )
}

export default Packages