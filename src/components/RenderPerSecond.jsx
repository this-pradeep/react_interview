import React, { useEffect, useState } from 'react'

const RenderPerSecond = () => {
    const [date, setDate] = useState()
    useEffect(() => {
        const id = setInterval(() => { 
            setDate(Date())
        }, 1000) 
        return () => {
            clearInterval(id)
        }
    },[date])
  return (
    <div className='bg-white p-3'>{date}</div>
  )
}

export default RenderPerSecond