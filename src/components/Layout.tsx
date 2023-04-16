import React, { PropsWithChildren, useEffect } from "react";
import { Sidebar } from "~/container";


const Layout = ( props: PropsWithChildren ) => {

  
  return (

    <div className="h-screen flex flex-row justify-start">
      <Sidebar />
      <div className="flex-1 p-4 ml-60">
          {props.children}
      </div>
    </div>

  );
};

export default Layout;