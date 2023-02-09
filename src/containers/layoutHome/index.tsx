import React from 'react'
import { Outlet } from 'react-router-dom'

import { Box } from '@mui/material'

import useStyles from './style'

const LayoutHome = () => {

  const classes = useStyles()

  return (
    <Box className={classes.root}>
      <Box className={classes.eclerContainer}>
        <Box className={classes.logo}></Box>
      </Box>

      <Box className={classes.content}>
        <Outlet />
      </Box>
    </Box>
  )
}

export default LayoutHome
