import React from "react";
import { CreateButton } from "~/components";
import BasicButton from "~/components/profile/basic_button";
import { signIn, useSession as useNextAuthSession } from "next-auth/react";
import { useSession } from "@clerk/nextjs";
import { api } from "~/utils/api";
import { toast } from "react-hot-toast";

const ContentPage = () => {
  const [clientId, setClientId] = React.useState("");
  const [bearerToken, setbearerToken] = React.useState("");
  const { session } = useSession();
  const { data } = useNextAuthSession();
  const { mutateAsync: addSecrets } = api.tweet.addSecrets.useMutation();
  const onSubmit = async () => {
    if (session?.user.id) {
      await addSecrets({ bearerToken, userId: session?.user.id });
      toast("Secrets Added Successfully");
    }
  };
  return (
    <div className="m-12 w-full">
      <div className="flex w-full justify-between">
        <h2 className="text-2xl font-bold">Content</h2>
        <div className="flex ">
          <CreateButton text="Create" />
          {!data?.user ? (
            <BasicButton
              onClick={() => {
                signIn();
              }}
              text={"Connect Twitter"}
            />
          ) : null}
          
        </div>
      </div>
    </div>
  );
};

export default ContentPage;
