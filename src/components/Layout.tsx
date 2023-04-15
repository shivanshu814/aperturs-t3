import React, { PropsWithChildren, useEffect } from "react";
import { Sidebar } from "~/container";


const Layout = ( props: PropsWithChildren ) => {
  // useEffect(() => {
  //   // Only render the sidebar on the initial page load
  //   // and not on subsequent page transitions
  //   return () => {
  //     const sidebar = document.querySelector('.sidebar');
  //     if (sidebar && sidebar.parentNode) {
  //       sidebar.parentNode.removeChild(sidebar);
  //     }
  //   };
  // }, []);
  
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