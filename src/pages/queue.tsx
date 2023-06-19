import React, { ReactElement } from 'react'
import { Layout } from '~/components'

function Queue() {
  return (
    <div>
      
    </div>
  )
}

Queue.getLayout = function getLayout(page: ReactElement) {
    return (
      <Layout>
        {page}
      </Layout>
    )
  }

export default Queue
