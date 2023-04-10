import React, { FC, MouseEventHandler, ReactNode } from 'react'

interface SideBarButtonProps {
  onClick: MouseEventHandler<HTMLButtonElement>
  icon: ReactNode
  text: string
  selected: boolean
}

const SideBarButton: FC<SideBarButtonProps> = ({ onClick, icon, text,selected }) => {
  return (
    <button className={`w-48 rounded-lg ${selected ?'bg-[#132DA0] text-white shadow-lg' :'bg-[#F4F3FF] hover:bg-[#e3f2ff] text-primary'}
    flex items-center justify-start pl-3 h-12  hover:shadow-sm text-lg ` }
    onClick={onClick}>
      {icon}
      <span className={`mx-2 font-normal text-sm ${selected ? 'text-white' :'text-gray-800'}`}>{text}</span>
    </button>
  )
}

export default SideBarButton
