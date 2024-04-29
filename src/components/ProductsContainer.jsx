import React, { useState } from 'react'
import ProductsGrid from './ProductsGrid';
import ProductList from './ProductList';
import { BsFillGridFill,BsList } from 'react-icons/bs';
import { useLoaderData } from 'react-router-dom';

const ProductsContainer = () => {
    const {meta} = useLoaderData();
    const totalProducts = meta.pagination.total;
    


    const setActiveStyles = (pattern) => {
        return `text-xl btn btn-circle btn-sm ${pattern === layout ? 'btn-primary text-primary-content' : 'btn-ghost text-neutral-content' }`;
    }

    const getLayoutType = () => {
        const comfyLayout = localStorage.getItem("comfyLayoutType")
        const newLayout = comfyLayout ? comfyLayout : "grid"
        return newLayout
      }
      const [layout,setLayout] = useState(getLayoutType());
      

  return (
   <>
   {/* HEADER */}
    <div className="flex justify-between items-center mt-8 border-b border-base-300 pb-5">
        <h4 className='font-medium text-md'>
            {totalProducts} product{totalProducts > 1 && 's'}
        </h4>
        <div className='flex gap-x-2'>
            <button type='button' 
            onClick={()=>{
                localStorage.setItem('comfyLayoutType','grid')
                setLayout('grid')}
                } 
                className={setActiveStyles('grid')}><BsFillGridFill /></button>
            <button  type='button' onClick={()=> {
                localStorage.setItem('comfyLayoutType','list')
                setLayout('list')
                }} className={setActiveStyles('list')}><BsList /></button>

        </div>

    </div>
    {/* PRODUCTS */}
    <div>
        {totalProducts === 0 ? <h5 className='text-2xl mt-16'>Sorry, no products matched your search</h5>: layout === 'grid' ? <ProductsGrid/> : <ProductList/>}
    </div>
    
   </>
  )
}

export default ProductsContainer
