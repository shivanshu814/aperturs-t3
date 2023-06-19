import React, { ReactElement } from 'react'
import { Layout, LinkedinPostCard } from '~/components'

export default function Post() {
  return (
          <div className="container mx-auto p-4">
      <LinkedinPostCard />
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
   
