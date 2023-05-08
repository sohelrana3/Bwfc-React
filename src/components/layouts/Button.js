import React from 'react'

const Button = ({title}) => {
  return (
    <a className='py-4 px-10 bg-primary text-white border-solid rounded font-man text-base font-bold cursor-pointer'>{title}</a>
  )
}

export default Button