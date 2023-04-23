import React from "react";
import { CreateButton } from "~/components";
import BasicButton from "~/components/profile/basic_button";
import { signIn } from "next-auth/react";
import { useSession } from "@clerk/nextjs";
import { api } from "~/utils/api";
import { toast } from "react-hot-toast";
const ContentPage = () => {
  const [clientId, setClientId] = React.useState("");
  const [bearerToken, setbearerToken] = React.useState("");
  const { session } = useSession();
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
          <label htmlFor="my-modal" className="btn">
            open modal
          </label>

          {/* Put this part before </body> tag */}
          <input type="checkbox" id="my-modal" className="modal-toggle" />
          <div className="modal">
            <div className="modal-box">
              <input
                type="text"
                value={bearerToken}
                onChange={(e) => setbearerToken(e.target.value)}
                placeholder="Client Secret  "
                className="input-bordered input w-full max-w-xs"
              />
              <div className="modal-action">
                <label onClick={onSubmit} htmlFor="my-modal" className="btn">
                  Submit
                </label>
                <label htmlFor="my-modal" className="btn">
                  Close
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentPage;
