import React, { ReactElement } from 'react'
import { Layout, PostView } from '~/components'

export default function Post() {
  return (
          <div className="container mx-auto p-4">
      <PostView />
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
   
