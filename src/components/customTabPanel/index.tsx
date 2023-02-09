import React from 'react'

import { Typography } from '@mui/material'
import { Box } from '@mui/system'

interface IProps {
  children?: React.ReactNode
  index: string
  value: string
}

const CustomTabPanel: React.FC<IProps> = (props) => {
  const { children, value, index, ...other } = props

  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`scrollable-prevent-tabpanel-${index}`}
      aria-labelledby={`scrollable-prevent-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  )
}

export default CustomTabPanel
