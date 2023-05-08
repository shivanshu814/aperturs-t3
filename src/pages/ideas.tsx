import { useUser } from '@clerk/nextjs';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react'
import { Layout } from '~/components'

const IdeasPage = () => {

  const {user} = useUser();
  const router = useRouter();

  useEffect(() => {

    if (!user) {
      router.replace('/login');
    }
  
  }, []);

  return (
   <Layout>
    
   </Layout>
  )
}

export default IdeasPage
