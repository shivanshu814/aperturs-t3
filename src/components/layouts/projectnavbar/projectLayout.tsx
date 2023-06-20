import React from 'react'
import ProjectNavBar from './projectnavbar'


function projectLayout({children}:{children: React.ReactNode}) {
  return (
    <div className='w-full flex flex-col justify-center'>
      <ProjectNavBar />
      {children}
    </div>
  )
}

export default projectLayout
