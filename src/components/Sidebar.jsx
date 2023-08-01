import { Home,Apartment,ListAlt,FormatListBulleted,SkipPrevious,Description,SentimentSatisfiedAlt,Message} from '@mui/icons-material'
import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import React from 'react'
import {Link} from 'react-router-dom'

export const Sidebar = () => {
  return (
    <Box flex={1} p={2} >
      <Box position="fixed">
       <List>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#home">
              <ListItemIcon>
               <Home style={{color:'black'}}/>
              </ListItemIcon>
             <Link to="/kurumsalana"><ListItemText primary="Anasayfa" /></Link>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#company">
              <ListItemIcon>
                <Apartment style={{color:'red'}}/>
              </ListItemIcon>
            <Link to="/firmabilgi"><ListItemText primary="Firma Bilgileri" /></Link>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#advert">
              <ListItemIcon>
                <FormatListBulleted style={{color:'blue'}}/>
              </ListItemIcon>
              <Link to="/ilanolusturma"><ListItemText primary="İlanlar" /></Link>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#form">
              <ListItemIcon>
                <ListAlt style={{color:'green'}}/>
              </ListItemIcon>
              <ListItemText primary="İlan Formları" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#result">
              <ListItemIcon>
                <SkipPrevious style={{color:'black'}}/>
              </ListItemIcon>
              <ListItemText primary="İlan Sonuç Aşamaları" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#applicant">
              <ListItemIcon>
                <FormatListBulleted style={{color:'red'}}/>
              </ListItemIcon>
              <ListItemText primary="İlan Aday Listeleri" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#follower">
              <ListItemIcon>
                <SentimentSatisfiedAlt style={{color:'blue'}}/>
              </ListItemIcon>
              <ListItemText primary="Takipçiler" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#shipment">
              <ListItemIcon>
                <Description style={{color:'purple'}}/>
              </ListItemIcon>
              <ListItemText primary="Gönderiler" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#message">
              <ListItemIcon>
                <Message style={{color:'orange'}}/>
              </ListItemIcon>
              <ListItemText primary="Mesajlar" />
            </ListItemButton>
          </ListItem>
          </List>
          </Box>
    </Box>
  )
}
