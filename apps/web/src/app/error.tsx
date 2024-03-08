"use client"
import { FC } from 'react'

interface errorProps {
  
}

const error: FC<errorProps> = ({}) => {
  return <div
  className='h-full grid place-content-center text-center'
  >
    <h2
    className='text-3xl font-bold text-primary'
    >
      Noget Gik galt 
    </h2>
    <p
    className='text-black/60'
    >
      Prøv refresh siden
    </p>
  </div>
}

export default error