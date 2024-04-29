import React from 'react'

const FormCheckBox = ({label,name,defaultValue,size}) => {
  return (
    <div className="form-control items-center">
        <label className="cursor-pointer label flex-col gap-y-2" htmlFor={name}>
            <span className="label-text capitalize">{label}</span>
            <input type="checkbox" defaultChecked={defaultValue} name={name} className={`checkbox checkbox-primary ${size}`} />
        </label>
    </div>
  )
}

export default FormCheckBox
