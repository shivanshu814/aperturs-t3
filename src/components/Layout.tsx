import React, { PropsWithChildren, useEffect } from "react";
import { Sidebar } from "~/container";
import SideBar from "./layouts/sidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <div className="relative gap-8 lg:flex">
        <SideBar />
        <div className="mt-8 flex w-full justify-center lg:mt-1 lg:block">
          {children}
        </div>
      </div>
    </div>
  );
}
