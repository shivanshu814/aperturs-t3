import React from "react";
import { CreateButton } from "~/components";
import LinkTwitterButton from "~/components/LinkTwitter/button";

const ContentPage = () => {
  return (
    <div className="w-full m-12">
      <div className="w-full flex justify-between">
        <h2 className="text-2xl font-bold">Content</h2>
        <div className="flex ">
          <CreateButton />
          <LinkTwitterButton />
        </div>
      </div>
    </div>
  );
};

export default ContentPage;
