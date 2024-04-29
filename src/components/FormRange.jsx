import React, { useState } from 'react'
import { formatPrice } from '../utils';

const FormRange = ({label,name,size, price}) => {
    const step = 1000
    const maxPrice = 100000
    const [selectedPrice,setSelectedPrice] = useState(price || maxPrice);
  return (
    <div className='form-control'>
        <label htmlFor={name} className='label cursor-pointer'>
            <span className='label-text capitalize'>{label}</span>
            <span>{formatPrice(selectedPrice)}</span>
        </label>
        <input type="range" min={0} max={maxPrice} name={name} step={step} value={selectedPrice} className={`range range-primary ${size}`} onChange={(e)=>setSelectedPrice(e.target.value)}/>
        <div className='w-full flex justify-between text-xs mt-2 font-bold px-2'>
            <p>0</p>
            <p>Max : {formatPrice(maxPrice)}</p>

        </div>
    </div>
    
  )
}

export default FormRange
