import React, { ReactElement } from 'react'
import { Layout } from '~/components'

export default function Post() {
  return (
    <div>
      
    </div>
  )
}

Post.getLayout = function getLayout(page: ReactElement) {
    return (
      <Layout>
        {page}
      </Layout>
    )
  }
   
