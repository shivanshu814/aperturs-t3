import React from "react";
import { Layout } from "~/components";
import { ContentPage, Sidebar } from "~/container";

import withAuth from "~/utils/helper/auth_check";





const Dashboard = () => {

  return (

    <Layout>
      <div className="relative flex">
        <ContentPage />
      </div>
    </Layout>

  );

};




export default Dashboard;