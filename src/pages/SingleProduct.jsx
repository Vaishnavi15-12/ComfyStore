import React from 'react'
import { useLoaderData } from 'react-router-dom';
import { formatPrice, customFetch, generateAmountOptions } from '../utils';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../features/cart/cartSlice';

export const loader = async ({params}) => {
   const response = await customFetch(`/products/${params.id}`);
   const product = response.data.data;
  
  return {product};
}

const SingleProduct = () => {
  const {product} = useLoaderData();
  // console.log(product);
  const {title,company, description, colors ,image, price} = product.attributes;
  const dollarAmount = formatPrice(price);
  const [productColor,setProductColor] = useState(colors[0]);
  const [amount,setAmount] =  useState(1);

  const handleAmount = (e) =>{
    setAmount(parseInt(e.target.value));
  }

  const cartProduct = {
    cartID:product.id + productColor,
    productID: product.id,
    image,
    title,
    price,
    company,
    productColor,
    amount,
  }

  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(addItem({product:cartProduct}))
  }

  return (
    <section>
      <div className='text-md breadcrumbs'>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/products'>Products</Link></li>
        </ul>
      </div>
      {/* PRODUCT */}
      <div className='mt-6 grid gap-y-8 lg:grid-cols-2 lg:gap-x-16'>
        {/* IMAGE */}
        <img src={image} alt={title} className='w-96 h-96 object-cover rounded-lg lg:w-full'></img>
        {/* PRODUCT DETAILS*/}
        <div>
          <h1 className='capitalize text-3xl font-bold'>{title}</h1>
          <h4 className='text-xl font-bold mt-2 text-neutral-content'>{company}</h4>
          <p className='mt-3 text-xl'>{dollarAmount}</p>
          <p className='mt-6 leading-8'>{description}</p>
          {/* COLORS */}
          <div className='mt-6'>
            <h4 className='text-md font-medium tracking-wider capitalize'>colors</h4>
            <div className='mt-2'>
              {colors.map((color)=>{
                return(
                  <button key={color} type='button' className={`badge w-6 h-6 mr-2 ${color === productColor && 'border-2 border-secondary'}`} style={{ backgroundColor:color}} onClick={()=> setProductColor(color)}> 
                  </button>
                )
              })}
            </div>
            {/* AMOUNT */}
            <div className='form-control w-full max-w-xs'>
              <label className='label' htmlFor='amount'>
                <h4 className='text-md capitalize tracking-wider font-medium'>Amount</h4>
              </label>
              <select id="amount" value={amount} onChange={handleAmount} className="select select-secondary select-bordered select-md">
                {generateAmountOptions(20)}
              </select>
            </div>
            {/* CART */}
              <div className='mt-10'>
                <button className='btn btn-secondary btn-md uppercase' onClick={addToCart}>add to bag</button>
              </div>
          </div>
        </div>
      </div>


    </section>
  )
}

export default SingleProduct
