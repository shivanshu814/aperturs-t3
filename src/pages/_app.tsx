import { type AppType } from "next/app";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { Toaster } from "react-hot-toast";
import { RouteGuard } from "~/utils/helper/auth_check";

import { api } from "~/utils/api";

import "~/styles/globals.css";
import { ClerkProvider } from "@clerk/nextjs";

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <SessionProvider session={session}>
      <ClerkProvider {...pageProps}>
        <Toaster position="bottom-center" reverseOrder={false} />
        <Component {...pageProps} />
      </ClerkProvider>
    </SessionProvider>
  );
};

export default api.withTRPC(MyApp);
