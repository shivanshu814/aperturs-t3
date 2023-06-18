import { AppProps, type AppType } from "next/app";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { Toaster } from "react-hot-toast";
import { ThemeProvider } from "@material-tailwind/react";


import { api } from "~/utils/api";

import "~/styles/globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { NextPage } from "next";
import { ReactElement, ReactNode } from "react";

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}
 
type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

const MyApp: AppType<{ session: Session | null }> = ({Component,pageProps: { session, ...pageProps },}:AppPropsWithLayout) => {

  const getLayout = Component.getLayout ?? ((page) => page)

  return (
    <SessionProvider session={session}>
      <ClerkProvider {...pageProps}>
      <ThemeProvider>
        <Toaster position="bottom-center" reverseOrder={false} />
       { getLayout(<Component {...pageProps} />) }
      </ThemeProvider>
      </ClerkProvider>
    </SessionProvider>
  );
};

export default api.withTRPC(MyApp);
