import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { Layout } from "~/components";
import { ContentPage, Sidebar } from "~/container";

import withAuth from "~/utils/helper/auth_check";





const Dashboard = () => {

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
        <ContentPage />
      </div>
    </Layout>

  );

};




export default Dashboard;