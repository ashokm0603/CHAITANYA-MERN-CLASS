import React from 'react'
import HomePageImages from './HomePageImages'
import Departments from './Departments'

const Home = () => {
  return (
    <div>
        <h1 className='text-center bg-success-subtle p-3'>Welcome to Home Page</h1>
        <HomePageImages/>
        <h1>Department :</h1>

        <Departments/>
    </div>
  )
}

export default Home