import React from "react";
import { CreateButton } from "~/components";

const ContentPage = () => {
  return (
    <div className="w-full m-12">
      <div className="w-full flex justify-between">
        <h2 className="text-2xl font-bold">Content</h2>
        <div className="flex ">
          <CreateButton />
        </div>
      </div>
    </div>
  );
};

export default ContentPage;
