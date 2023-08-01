import { AppBar, Toolbar, styled, Typography, InputBase, Box, IconButton, Badge, Avatar, MenuItem, Menu } from '@mui/material';
import { Mail, NotificationsNone } from '@mui/icons-material';
import { Link } from 'react-router-dom'; 

import React, { useState } from 'react';

const StyledToolbar = styled(Toolbar)(
  {
    display: "flex",
    justifyContent: "space-between",
    backgroundColor: "#111827",
  }
);

const Search = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  padding: "0 10px",
  borderRadius: theme.shape.borderRadius,
  width: "%40",
}));

const Icons = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
}));

const IconSpacing = styled("div")(({ theme }) => ({
  marginRight: "20px",
}));

export const Navbar = () => {
  const [open, setOpen] = useState(null);

  const handleClick = (event) => {
    setOpen(event.currentTarget);
  };

  const handleClose = () => {
    setOpen(null);
  };

  return (
    <AppBar position='sticky'>
      <StyledToolbar>
        <Typography variant="h5">
          <img src='https://vizyonergenc.com/v2/images/logo2.png' alt="Logo" />
        </Typography>
        <Icons>
          <IconSpacing>
            <IconButton >
              <Badge badgeContent={4} color="error">
                <Mail style={{ color: 'white' }} /> 
              </Badge>
            </IconButton>
          </IconSpacing>
          <IconSpacing>
            <IconButton >
              <Badge badgeContent={4} color="error">
                <NotificationsNone style={{ color: 'white' }} />
              </Badge>
            </IconButton>
          </IconSpacing>
          <Avatar  onClick={handleClick} src="https://media.licdn.com/dms/image/D4D03AQGMTN0aBCU1Qg/profile-displayphoto-shrink_800_800/0/1689426716772?e=1695859200&v=beta&t=p7QsEIXLp6ZoJ8sxTE-KUkHOdR9hH_nXLMwmJ85o-Z8" />
        </Icons>
      </StyledToolbar>
      <Menu
        id="demo-positioned-menu"
        anchorEl={open}
        open={Boolean(open)}
        onClose={handleClose}
        anchorOrigin={{
          vertical:'top',
          horizontal:'right',
        }}
        transformOrigin={{
          vertical:'top',
          horizontal:'left',
        }}
      >
        <MenuItem>Profil</MenuItem>
        <MenuItem>Ayarlar</MenuItem>
        <Link to='/kurumsal/'><MenuItem>Çıkış</MenuItem></Link>
      </Menu>
    </AppBar>
  );
};
