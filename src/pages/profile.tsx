import React from 'react'
import { Layout,ProfileHeader } from '~/components'

const ProfilePage = () => {
  return (
    <Layout>
        <div className='flex flex-col items-center justify-center'>
            <ProfileHeader />
        </div>
    </Layout>
  )
}

export default ProfilePage
