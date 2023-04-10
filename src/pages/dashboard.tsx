import React from 'react'
import { ContentPage, Sidebar } from '~/container'


const Dashboard = () => {
  return (
    <div className='flex relative'>
      <Sidebar />
      <ContentPage />
    </div>
  )
}

export default Dashboard
