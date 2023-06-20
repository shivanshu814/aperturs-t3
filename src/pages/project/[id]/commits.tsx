import React, { ReactElement } from 'react'
import { Layout, ProjectLayout } from '~/components'

function Commits() {
  return (
    <div>
      
    </div>
  )
}

Commits.getLayout = function getLayout(page: ReactElement) {
    return (
      <Layout>
        <ProjectLayout>
        {page}
        </ProjectLayout>
      </Layout>
    )
  }

export default Commits
