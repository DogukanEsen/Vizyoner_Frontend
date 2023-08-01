import React from 'react'
import { Rightbar } from '../../components/Rightbar'
import {Feed} from '../../components/Feed'
import {Navbar} from '../../components/Navbar'
import {Sidebar} from '../../components/Sidebar'
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
