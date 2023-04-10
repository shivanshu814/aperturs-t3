import React, { PropsWithChildren } from "react";
import { Sidebar } from "~/container";


const Layout = ( props: PropsWithChildren ) => {
  return (
    <div className="h-screen flex flex-row justify-start">
      <Sidebar />
      <div className=" flex-1 p-4">
          {props.children}
      </div>
    </div>
  );
};

export default Layout;