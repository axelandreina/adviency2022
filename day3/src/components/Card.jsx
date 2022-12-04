import React from 'react'

export const Card = (regalo) => {
  return (
    <>
        <div key={regalo.nombre} className="flex flex-col items-center">
            <p className="text-white">{regalo.nombre}</p>
        </div>
    </>
  )
}
