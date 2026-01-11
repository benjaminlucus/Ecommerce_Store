import configPromise from '@payload-config'
import { getPayload } from 'payload'

export default async function Home() {
  // Initialize Payload
  const payload = await getPayload({
    config: configPromise,
  })

  // Fetch categories
  const categories = await payload.find({
    collection: 'categories',
    depth: 0, // relationships + joins
    where: {
      parent: {
        exists: false,
      },
    },
  })
  console.log('categories', categories)

  return (
    <div>
      <h1>Categories</h1>

      <pre>
        {JSON.stringify(categories.docs, null, 2)}
      </pre>
    </div>
  )
}
