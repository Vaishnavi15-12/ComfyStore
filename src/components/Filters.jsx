import React from 'react'
import { Form,useLoaderData, Link } from 'react-router-dom'
import FormInput from './FormInput'
import FormSelect from './FormSelect'
import FormRange from './FormRange'
import FormCheckBox from './FormCheckBox'

const Filters = () => {
    const {meta,params} = useLoaderData();
    const {search,category,company,shipping,order,price} = params;
    const categories = meta.categories;
    const companies = meta.companies;
    // console.log(meta);
  return (
    <Form className='bg-base-200 rounded-md px-8 py-4 grid gap-x-4 gap-y-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center'>
        {/* SEARCH */}
        <FormInput label='search product' defaultValue={search} type='search' name='search' size='input-sm'/>
        {/* CATEGORIES */}
        <FormSelect label='select category' defaultValue={category} name='category' list={categories} size='select-sm' />
        {/* COMPANIES */}
        <FormSelect label='select company' defaultValue={company} name='company' list={companies} size='select-sm' />
        {/* ORDER */}
        <FormSelect label='sort by' name='order' defaultValue={order} list={['a-z','z-a','high','low']} size='select-sm' />
        {/* PRICE */}
        <FormRange name='price' price={price} label='select price' size='range-sm' />
        {/* FREE SHIPPING */}
        <FormCheckBox label='free shipping' defaultValue={shipping} name='shipping' size='checkbox-sm' />
        {/* BUTTONS */}
        <button type='submit' className='btn btn-primary btn-sm uppercase'>search</button>
        <Link to='/products' className='btn btn-accent btn-sm uppercase'>reset</Link>
    </Form>
  )
}

export default Filters
