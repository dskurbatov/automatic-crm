import React from 'react'

const Input = ({
  id,
  className,
  error,
  type,
  placeholder,
  onChange,
  parentClassName,
  name
}) => {
  return (
    <div className={parentClassName}>
      <label htmlFor={id}>{name}</label>
      <input 
        onChange={onChange} 
        type={type} 
        className={error ? `${className} is-invalid` : `${className}`} 
        id={id} 
        placeholder={placeholder} 
      />
      {error && <div className="text-danger">{error}</div>}
    </div>
  )
}

export default Input