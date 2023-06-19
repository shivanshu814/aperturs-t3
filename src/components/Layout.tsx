import { SideBar } from ".";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <div className="relative gap-8 lg:flex">
        <SideBar />
        <div className="mt-8 flex w-full justify-center px-2 lg:p-12  lg:block">
          {children}
        </div>
      </div>
    </div>
  );
}
