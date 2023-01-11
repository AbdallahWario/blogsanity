import React from 'react'
import Banner from '../../components/Banner'
import Header from '../../components/Header'
import { previewData } from 'next/headers'
import {groq} from 'next-sanity'
import { client } from '../../lib/sanity.client'



const query = groq`
*[_type=='post']{
  ...,
  author->,
  categories[]->
}|order(_createdAt desc)
`


const Homepage = async() => {
  if(previewData()){
    return <div> preview mode</div>
  }

  const posts = await client.fetch(query)
  console.log(posts)

  return (
    <div>
      <Header/>
      <Banner/>
    </div>
  )
}

export default Homepage
