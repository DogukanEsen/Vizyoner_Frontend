import React from 'react'
import { Rightbar } from './Rightbar'
import {Feed} from './Feed'
import {Navbar} from './Navbar'
import {Sidebar} from './Sidebar'
import { Box, Stack } from '@mui/material'

export default function 
() {
  return (
    <div>
      <Box>
       <Navbar/>
       <Stack direction="row" spacing={2} justifyContent="space-between">
       <Sidebar/>
        <Feed/>
        <Rightbar/>
       </Stack>
        
       </Box>
    </div>
  )
}
