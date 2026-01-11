import { DM_Sans } from "next/font/google";
import './global.css' // Make sure the path points to your CSS file

import SearchFilter from "./(home)/(search-filter)/index";
import Footer from "./(home)/Footer";
import Navbar from "./(home)/Navbar";

import configPromise from '@payload-config'
import { getPayload } from 'payload'

const dmsans = DM_Sans({
  subsets: ["latin"],
});

export const metadata = {
  title: "Multitalent Store",
  description:
    "The Multitalent Store is your one-stop shop for all things creative and innovative.",
};

export default async function RootLayout({ children }) {
  // Initialize Payload
  const payload = await getPayload({
    config: configPromise,
  })

  // Fetch categories
  const data = await payload.find({
    collection: 'categories',
    depth: 2, // relationships + joins
    pagination: false,
    where: {
      parent: {
        exists: false,
      }
    }
  })

  const formattedData = data.docs.map((doc) => {
    return {
      ...doc,
      subcategories: (doc.subcategories.docs || []).map((doc) => {
        return {
          ...doc,
          subtlecategories: undefined
        }
      }),
    }
  })

  // console.log(formattedData)

  return (
    <html lang="en">
      <body
        className={`${dmsans.className} antialiased flex flex-col min-h-screen`}
      >
        <Navbar />
        <SearchFilter data={formattedData} />
        <main className="flex-1 bg-[#F4F4F0]">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
