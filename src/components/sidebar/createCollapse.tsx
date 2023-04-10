import React,{useState} from 'react'
import { SideBarButton } from '~/components'
import {IoPencil} from 'react-icons/io5';

const CreateCollapse = () => {

    const [selectedButton, setSelectedButton] = useState(0);

    const handleButtonClick = (buttonIndex: number) => {
      setSelectedButton(buttonIndex);
    };

  return (
  // <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box shadow-sm">
  //   <div className="collapse-title text-xl font-medium">
  //     Create
  //   </div>
  //   <div className="collapse-content"> 
  //     <div tabIndex={0} >

  //       <SideBarButton icon= {<IoPencil className='text-xl ml-4 mr-2' />} text='Create'
  //       onClick={() => {
  //         handleButtonClick(0);
  //       }} selected={selectedButton == 0} />

  //     </div>
  //   </div>
  // </div>

  <div className='flex-col flex gap-2'>

        <span className='text-md ml-1 font-light'>CREATE</span>
        <SideBarButton icon= {<IoPencil className='text-xl mx-4' />} text='Create'
        onClick={() => {
          handleButtonClick(0);
        }} selected={selectedButton == 0} 
        />

        <SideBarButton icon= {<IoPencil className='text-xl mx-4' />} text='Create'
        onClick={() => {
          handleButtonClick(1);
        }} selected={selectedButton == 1} 
        />
       

        <SideBarButton icon= {<IoPencil className='text-xl mx-4' />} text='Create'
        onClick={() => {
          handleButtonClick(2);
        }} selected={selectedButton == 2} 
        />

  </div>
  )
}

export default CreateCollapse
