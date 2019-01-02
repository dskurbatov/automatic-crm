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
        <option>Outlook 365</option>
        <option>Exchange</option>
      </select>
    </div>
  )
}

export default Select