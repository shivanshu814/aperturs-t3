import React from 'react'
import { Layout } from '~/components'
import { ContentPage, Sidebar } from '~/container'


const Dashboard = () => {
  return (
    <Layout>
    <div className='flex relative'>
      <ContentPage />
    </div>
    </Layout>
  )
}

export default Dashboard
