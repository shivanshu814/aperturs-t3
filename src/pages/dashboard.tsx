import React, { ReactElement } from "react";
import { Layout } from "~/components";
import { ContentPage, Sidebar } from "~/container";


const Dashboard = () => {

  return (

      <div className="relative flex">
        <ContentPage />
      </div>

  );

};

Dashboard.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}
 


export default Dashboard;