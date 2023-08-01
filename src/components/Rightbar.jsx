import { Avatar, AvatarGroup, Box, Stack, Typography } from '@mui/material';
import React from 'react';

export const Rightbar = () => {
  return (
    <Box flex={2} p={2}>
      <Box position="fixed" width={300}>
        <Typography variant='h5' fontWeight={200}>
          Firmalar
        </Typography>
        <Stack direction="row" padding={5} spacing={8} sx={{ marginBottom: 5 }}>
          <AvatarGroup total={50} max={7} spacing={4}>
            <Avatar alt="Savunma Sanayi" src="https://vizyonergenc.com/company/savunma-sanayii-baskanligi.png" style={{ border: '2px solid blue' }} />
            <Avatar alt="Havelsan" src="https://vizyonergenc.com/company/havelsanlogo.png" style={{ border: '2px solid blue' }} />
            <Avatar alt="Roketsan" src="https://vizyonergenc.com/company/roketsan.png" style={{ border: '2px solid blue' }} />
            <Avatar alt="Baykar" src="https://vizyonergenc.com/company/baykar.png" style={{ border: '2px solid blue' }} />
          </AvatarGroup>
        </Stack>
      </Box>
    </Box>
  );
};
