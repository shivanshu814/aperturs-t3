import React,{useState} from 'react'
import { Profile,CreateCollapse } from '~/components'



const Sidebar = () => {
  const [selectedButton, setSelectedButton] = useState(0);

  const handleButtonClick = (buttonIndex: number) => {
    setSelectedButton(buttonIndex);
  };

  return (
    <div className='top-0   left-0 h-full m-0 bg-neutral
    flex flex-col shadow-lg z-20 px-6 pt-7 gap-2'>

        <Profile />
        <CreateCollapse />
        
        
    </div>
  )
}

export default Sidebar
