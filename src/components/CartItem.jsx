import React from 'react'
import { formatPrice, generateAmountOptions } from '../utils';
import { useDispatch } from 'react-redux';
import { editItem,removeItem } from '../features/cart/cartSlice';

const CartItem = ({cartItem}) => {
    const dispatch = useDispatch();
    const {cartID,image, amount, title, price, company, productColor} = cartItem;

    const removeItemFromCart = () => {
        dispatch(removeItem({cartID}));
    }
    const handleAmount = (e) =>{
        dispatch(editItem({cartID,amount:parseInt(e.target.value)}))
    }

    
  return (
   <article key={cartID} className='mb-12 flex flex-col gap-y-4 sm:flex-row flex-wrap border-b border-base-300 pb-6 last:border-b-0'>
        {/* IMAGE */}
        <img src={image} alt={title} className='h-24 w-24 rounded-lg sm:h-32 sm:w-32 object-cover'></img>
         {/* INFO */}
         <div className='sm:ml-16 sm:w-48'>
            <h3 className='capitalize font-medium'>{title}</h3>
            <h4 className='capitalize text-sm mt-2 text-neutral-content'>{company}</h4>
            <p className='mt-2 flex items-center gap-x-2 capitalize text-sm'>
                color :
                <span className='badge badge-sm' style={{backgroundColor: productColor}}></span>
            </p>
        </div>
        {/* AMOUNT */}
        
            <div className="sm:ml-12 ">
                <div className='form-control max-w-xs'>
                    <label htmlFor='amount' className='label p-0'>
                        <span className='label-text'>Amount</span>
                    </label>
                    <select name='amount' id='amount' value={amount} onChange={handleAmount} className='mt-2 select select-base select-bordered select-xs'>
                        {generateAmountOptions(amount+5)}
                    </select>
                </div>
                {/* Remove */}
                <button className='mt-2 link link-primary link-hover text-sm' onClick={removeItemFromCart}>remove</button>
            </div>
        {/* PRICE */}
        <p className='font-medium sm:ml-auto'>{formatPrice(price)}</p>
   </article>
  )
}

export default CartItem
