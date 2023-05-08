import { useUser } from '@clerk/nextjs';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react'
import { Layout,DraftPage } from '~/components'


const DraftPost = () => {


  const {user} = useUser();
  const router = useRouter();

  useEffect(() => {

    if (!user) {
      router.replace('/login');
    }
  
  }, []);


  return (
    <Layout>
        <div className="relative flex">
        <DraftPage />
        </div>
    </Layout>    
  )
}

export default DraftPost
