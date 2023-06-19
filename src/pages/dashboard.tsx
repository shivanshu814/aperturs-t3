import React, { ReactElement } from "react";
import { Layout } from "~/components";
import { ContentPage } from "~/components";


const Dashboard = () => {

  return (

        <ContentPage />

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