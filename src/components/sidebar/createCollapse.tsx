import React, { useState, useEffect } from 'react';
import { SideBarButton } from '~/components';
import { IoPencil } from 'react-icons/io5';
import { useRouter } from 'next/router';

const CreateCollapse = () => {
  const [selectedButton, setSelectedButton] = useState(0);
  const router = useRouter();

  const handleButtonClick = (buttonIndex: number) => {
    setSelectedButton(buttonIndex);
  };

  useEffect(() => {
    // Get the current path from the router object
    const currentPath = router.asPath;

    // Set the selected button based on the current path
    switch (currentPath) {
      case '/dashboard':
        setSelectedButton(1);
        break;
      case '/drafts':
        setSelectedButton(2);
        break;
      case '/ideas':
        setSelectedButton(3);
        break;
      default:
        setSelectedButton(0);
    }
  }, [router.asPath]);

  return (
    <div className="flex-col flex gap-2">
      <span className="text-md ml-1 font-light">CREATE</span>
      <SideBarButton
        icon={<IoPencil className="text-xl mx-4" />}
        text="Create"
        onClick={() => {
          handleButtonClick(1);
          router.push('/dashboard');
        }}
        selected={selectedButton == 1}
      />

      <SideBarButton
        icon={<IoPencil className="text-xl mx-4" />}
        text="Drafts"
        onClick={() => {
          router.push('/drafts');
          handleButtonClick(2);
        }}
        selected={selectedButton == 2}
      />

      <SideBarButton
        icon={<IoPencil className="text-xl mx-4" />}
        text="Ideas"
        onClick={() => {
          handleButtonClick(2);
          router.push('/ideas');
        }}
        selected={selectedButton == 3}
      />
    </div>
  );
};

export default CreateCollapse;
