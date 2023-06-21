import React, { ReactElement } from 'react'
import { Layout } from '~/components'
import { QueueNav } from '~/components/queue/queue'

function Queue() {
  return (
    <QueueNav />
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
