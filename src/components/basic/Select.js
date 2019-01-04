import React from 'react'

const Select = ({
  id,
  className,
  onChange,
  parentClassName,
  options,
  name
}) => {
  return (
    <div className={parentClassName}>
      <label htmlFor={id}>{name}</label>
      <select className={className} id={id} onChange={onChange}>
        {options.map((option, idx) => <option key={idx}>{option}</option>)}
      </select>
    </div>
  )
}

export default Select