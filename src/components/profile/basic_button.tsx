import React, { FC, MouseEventHandler } from 'react'


interface SideBarButtonProps {
    onClick: MouseEventHandler<HTMLButtonElement>
    text: string
  }

const BasicButton: FC<SideBarButtonProps> = ({ onClick, text, }) => {
  return (
    <button 
    onClick={onClick}
    className='btn-primary btn w-44 text-white ml-1'>{text}</button>
  )
}

export default BasicButton
