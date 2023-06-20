import React, { ReactElement } from 'react'
import { BsFillCalendarFill } from 'react-icons/bs';
import { CreateButton, DraftCard, Layout, ProjectLayout } from '~/components';

const DraftPage = () => {
  return (
      <div className="w-full flex flex-col">
        <div className="flex justify-between">
        <h2 className="text-2xl font-bold">Draft</h2>
        <div className="flex gap-2">
        <CreateButton text="New Draft"/>
            <button className="btn btn-primary gap-2 text-white px-4 py-2">
                Add to Queue
                <BsFillCalendarFill className="ml-2"/>
            </button>
        </div>
        </div>
        <div className='grid xl:grid-cols-3 sm:grid-cols-2 grid-col-1 gap-6
        mt-4
        '>
        <DraftCard  id={1}/>
        <DraftCard  id={2}/>
        <DraftCard  id={3}/>
        
        </div>
        
        
      </div>
  );
};



DraftPage.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      <ProjectLayout>
      {page}
      </ProjectLayout>
    </Layout>
  )
}


export default DraftPage
