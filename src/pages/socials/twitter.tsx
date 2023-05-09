import React from 'react'

const AddTwitter = () => {
  return (
    <div className='py-28 px-56 w-screen'>
        <h1 className='font-medium text-4xl text-primary'>
            Add Twitter
        </h1>
        <p className='mt-2 text-gray-500'>
          you will need to give your own 
          <span className='font-bold text-primary'> Twitter API keys </span>
        </p>
        <p className='text-gray-500'>
          you can get them from Twitter Developer Portal
        </p>
        <ApiBox />

    </div>
  )
}


function ApiBox(){
  return(
    <div className='flex postShadow w-full  p-6 rounded-xl mt-8 flex-col'>
      <textarea
  className='w-[80%] my-2 h-auto border-primary border resize-none rounded-xl p-3'
  placeholder='API Key'
  rows={1}
  cols={1}
  maxLength={50}
></textarea>


      <textarea  className='w-[80%] h-auto border-primary border  
      resize-none rounded-xl p-3 ' placeholder='API secret'></textarea>

     </div>
  )
}


export default AddTwitter
