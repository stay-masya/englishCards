import React from 'react'
import { useNavigate } from 'react-router-dom'

import { Box, Button, Typography } from '@mui/material'

import { tabsLink } from '../../utils/constants/common'

import useStyles from './style'

const Home = () => {
  const classes = useStyles()
  const navigate = useNavigate()

  return (
    <Box className={classes.root}>
      <Box>
        {/* <h1>Logo</h1>
        <Box>Search</Box> */}
        <Box>Translation</Box>
      </Box>

      <Box className={classes.cardContainer}>
        {tabsLink.map((item, index) => {
          return (
            <Button
              key={index}
              className={classes.cardItem}
              onClick={() => {
                navigate(item.link)
              }}
            >
              {<item.iconType color='error' />}
              <Typography variant='h5'>{item.text}</Typography>
            </Button>
          )
        })}
      </Box>
    </Box>
  )
}

export default Home
