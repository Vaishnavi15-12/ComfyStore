import React from 'react'
import { FeaturedProducts, Hero } from '../components'
import { customFetch } from '../utils'

const url = '/products?featured=true' 

const featuredProductQuery = {
  queryKey:['featuredProducts'],
  queryFn:() => customFetch(url),
};

export const loader = (queryClient) => async() => {
  const response = await queryClient.ensureQueryData(featuredProductQuery);
  const products = response.data.data;
  return {products};
}

const Landing = () => {
  return (
    <>
      <Hero/>
      <FeaturedProducts/>
    </>
  )
}

export default Landing
