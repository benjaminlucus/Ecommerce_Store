import React from 'react'
import SearchFilterPractice from './index'
import CategoriesPractice from './CategoriesPractice'

const Home = async () => {

  let value = false;

  const data = [
    {
      "createdAt": "2026-01-06T09:50:29.713Z",
      "updatedAt": "2026-01-06T09:50:29.713Z",
      "name": "All",
      "slug": "design-ux",
      "subcategories": [
        {
          "createdAt": "2026-01-06T09:50:49.397Z",
          "updatedAt": "2026-01-06T09:50:49.397Z",
          "name": "Figma Designs",
          "slug": "figma-designs",
          "parent": "695cdae5f9c8b86344b39610",
          "subcategories": {
            "docs": [],
            "hasNextPage": false
          },
          "id": "695cdaf9f9c8b86344b39635"
        }
      ],
      "id": "695cdae5f9c8b86344b39610"
    },
    {
      "createdAt": "2026-01-06T05:42:02.700Z",
      "updatedAt": "2026-01-06T05:42:02.700Z",
      "name": "Software Development",
      "slug": "software_development",
      "color": "#f0f0f0",
      "subcategories": [
        {
          "createdAt": "2026-01-06T05:42:31.958Z",
          "updatedAt": "2026-01-06T05:42:31.958Z",
          "name": "Backend",
          "slug": "backend",
          "parent": "695ca0aac15511ed258832b6",
          "subcategories": {
            "docs": [],
            "hasNextPage": false
          },
          "id": "695ca0c7c15511ed258832eb"
        },
        {
          "createdAt": "2026-01-06T05:42:17.332Z",
          "updatedAt": "2026-01-06T05:42:17.332Z",
          "name": "Frontend",
          "slug": "frontend",
          "parent": "695ca0aac15511ed258832b6",
          "subcategories": {
            "docs": [],
            "hasNextPage": false
          },
          "id": "695ca0b9c15511ed258832d2"
        }
      ],
      "id": "695ca0aac15511ed258832b6"
    },
    {
      "createdAt": "2026-01-06T04:12:42.933Z",
      "updatedAt": "2026-01-06T04:12:42.933Z",
      "name": "Food",
      "slug": "food",
      "color": "#f0f028",
      "subcategories": [
        {
          "createdAt": "2026-01-06T04:13:06.796Z",
          "updatedAt": "2026-01-06T04:13:06.796Z",
          "name": "Pizza",
          "slug": "pizza",
          "parent": "695c8bbac15511ed25882e7b",
          "subcategories": {
            "docs": [],
            "hasNextPage": false
          },
          "id": "695c8bd2c15511ed25882eb5"
        },
        {
          "createdAt": "2026-01-06T04:12:55.644Z",
          "updatedAt": "2026-01-06T04:12:55.644Z",
          "name": "Biriyani",
          "slug": "biriyani",
          "parent": "695c8bbac15511ed25882e7b",
          "subcategories": {
            "docs": [],
            "hasNextPage": false
          },
          "id": "695c8bc7c15511ed25882e9c"
        }
      ],
      "id": "695c8bbac15511ed25882e7b"
    },
  ]

  return (
    <div className="px-4 lg:px-12 py-8 border-b flex gap-4 w-full flex-col">
      {/* <SearchFilterPractice  disabled={value}/>
      <CategoriesPractice data={data} /> */}
    </div>
  )
}

export default Home