import { useUser } from '@clerk/nextjs';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react'
import { Layout,ProfileHeader,ConnectSocials } from '~/components'

const ProfilePage = () => {

  const {user} = useUser();
  const router = useRouter();

  useEffect(() => {

    if (!user) {
      router.replace('/login');
    }
  
  }, []);

  return (
    <Layout>
        <div className='flex flex-col items-center justify-center'>
            <ProfileHeader />
            <ConnectSocials />
        </div>
    </Layout>
  )
}

export default ProfilePage
