import React from 'react'
import { Filters, PaginationContainer, ProductsContainer } from '../components';
import { customFetch } from '../utils';

const url = '/products';

const allProductsQuery = (queryParams) => {
  const {search,category,company,sort,price,shipping,page} = queryParams;
  return{
    queryKey:['products', search ?? '', category ?? 'all', company ?? 'all', sort ?? 'a-z' , price ?? '10000', shipping ?? false, page ?? 1],
    queryFn: () => customFetch(url,{
      params: queryParams,
    }),
  }
}

export const loader =  (queryClient) => async ({request}) => {
  // console.log(request);
  // const params = new URL(request.url).searchParams;
  // // console.log(params);
  // const search = params.get('search');
  // console.log(search);

  const params = Object.fromEntries([...new  URL(request.url).searchParams.entries()])
  console.log(params);

  const response = await queryClient.ensureQueryData(allProductsQuery(params));
  const products = response.data.data;
  const meta = response.data.meta;
  // console.log(response);
  return {products,meta,params};
}

const Products = () => {
  return (
   <>
    <Filters />
    <ProductsContainer />
    <PaginationContainer />
   </>

  )
}

export default Products
