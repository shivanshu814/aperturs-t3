import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { NextPage } from 'next';
import { useSession } from 'next-auth/react';

const withAuth = <T extends Record<string, unknown>>(
  WrappedComponent: NextPage<T>,
): NextPage<T> => {
  const AuthComponent: NextPage<T> = (props: T) => {
    const { data: session,status } = useSession();
    const router = useRouter();
    console.log(status,session);

    useEffect(() => {
      if (status != 'authenticated' && session != undefined) { 
        // If the user is not logged in, redirect to the login or signup page
        router.push('/login');
      }
    }, []);

    // If the user is logged in, render the protected component
    return session ? <WrappedComponent {...props} /> : null;
  };

  return AuthComponent;
};

export default withAuth;
