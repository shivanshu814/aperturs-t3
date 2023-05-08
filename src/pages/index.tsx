import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import { useUser } from '@clerk/nextjs';

export default function Home() {
  const router = useRouter();
  const { user } = useUser();

  if (typeof window !== 'undefined') {
    // Only execute this code on the client side
    if (user) {
      router.replace('/dashboard');
    } else  {
      router.replace('/login');
    }
  }

  return null;
}


