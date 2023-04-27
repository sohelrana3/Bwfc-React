import React from 'react'

const Container = ({ children }) => {
  return (
      <div className='max-w-container mx-auto mt-7'>
          {children}
      </div>
  )
}

export default Container