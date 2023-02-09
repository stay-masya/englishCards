import React from 'react'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'

import { Box, Tab, Tabs } from '@mui/material'

// import useStyles from './style'

const LayoutContent = () => {
  // const classes = useStyles()
  const navigate = useNavigate()
  const location = useLocation()

  // eslint-disable-next-line @typescript-eslint/ban-types
  const handleCallToRouter = (event: React.ChangeEvent<{}>, newValue: number) => {
    return navigate(`${newValue}`)
  }

  return (
    <Box>
      <Outlet />
      <Box>
        <Tabs value={location.pathname} onChange={handleCallToRouter}>
          <Tab label={'Card'} value={'/card-list'} />
          <Tab label={'Table'} value={'/table-verb'} />
          <Tab label={'Eclair'} value={'/spin-ekler'} />
          <Tab label={'Add new word'} value={'/add-word'} />
          <Tab label={'Home'} value={'/'} />
        </Tabs>
      </Box>
    </Box>
  )
}

export default LayoutContent
