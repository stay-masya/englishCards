import React, { BaseSyntheticEvent, useEffect, useRef } from 'react'

import { Avatar } from '@mui/material'

import Ekler from '../../assets/homePage/Ekler.png'

const SpinEkler = () => {
  const step = useRef(10)
  const spin = useRef(0)

  let interval: any

  const handleClick = (e: BaseSyntheticEvent) => {
    if (spin.current < 60) spin.current += 10

    clearInterval(interval)

    interval = setInterval(() => {
      step.current += 15

      e.target.style.transform = `rotateZ(${step.current}deg)`
    }, 60 - spin.current)
  }

  useEffect(() => {
    return () => {
      clearInterval(interval)
    }
  }, [])

  return (
    <div>
      <div onClick={handleClick}>
        <Avatar alt='Remy Sharp' src={Ekler} sx={{ width: 350, height: 350 }} />
      </div>
    </div>
  )
}

export default SpinEkler
