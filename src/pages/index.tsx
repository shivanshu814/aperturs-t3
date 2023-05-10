import { useRouter } from 'next/router';
import { useUser } from '@clerk/nextjs';
import { useEffect } from 'react';

export default function Home() {
  const router = useRouter();
  const { user } = useUser();


  useEffect(() => {
  // Only execute this code on the client side
    if (user) {
      router.replace('/dashboard');
    } else  {
      router.replace('/login');
    }
  
  }, []);
  return null;
}


