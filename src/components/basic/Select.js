import React from 'react'

const Select = ({
  id,
  className,
  onChange,
  parentClassName
}) => {
  return (
    <div className={parentClassName}>
      <label htmlFor={id}>Corporate Email type</label>
      <select className={className} id={id} onChange={onChange}>
        <option>Gmail</option>
        <option>Yahoo</option>
        <option>Yandex</option>
        <option>Mail</option>
        <option>Aon</option>
      </select>
    </div>
  )
}

export default Select