import React, { ReactElement } from 'react'
import { Layout, LinkedinPostCard, SocialTabs } from '~/components'

export default function Post() {
  return (
          <div className="container mx-auto p-4">
      <SocialTabs />
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
   
