import React, { useState } from 'react';
import { Box, Card, CardActions, CardContent, CardHeader, CardMedia, IconButton, Typography } from '@mui/material';
import { Avatar, Checkbox } from '@mui/material';
import { FavoriteBorder, Favorite, MoreVert as MoreVertIcon, Share as ShareIcon, ExpandMore as ExpandMoreIcon } from '@mui/icons-material';

export const Feed = () => {
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Box flex={4} p={2}>
     <Card sx={{ margin: 5 }}>
  <CardHeader
    avatar={
      <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
        <img
          src="https://vizyonergenc.com/storage/users/May2021/user-63356-KySwB44-1622003496.png"
          alt="User Avatar"
        />
      </Avatar>
    }
    action={
      <IconButton aria-label="settings">
        <MoreVertIcon />
      </IconButton>
    }
    title="Çağlar Demirkan"
    subheader="1 saat önce"
  />
  <CardMedia
    component="img"
    height="50"
    image="https://vizyonergenc.com/storage/posts/1404553/D0T3IBOdAo3zltKR5wwx7OW5vG1KQs0o2I8FnzSn.jpeg"
    style={{ width: "100%" }}
    
  />
  <CardContent>
    <Typography variant="body2" color="text.secondary">
      KALFA programı başladı.. bugünleri gördüğümüz için ALLAH'a hamd ediyorum..
      Sonsuza kadar varol TÜRKİYE.. #vizyonergenç #kalfa #staj
    </Typography>
  </CardContent>
  <CardActions disableSpacing>
    <IconButton aria-label="add to favorites">
      <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite sx={{ color: "red" }} />} />
    </IconButton>
    <IconButton aria-label="share">
      <ShareIcon />
    </IconButton>
    <IconButton onClick={handleExpandClick} aria-expanded={expanded} aria-label="show more">
      <ExpandMoreIcon />
    </IconButton>
  </CardActions>
</Card>


<Card sx={{ margin: 5 }}>
  <CardHeader
    avatar={
      <Avatar sx={{ bgcolor: "white" }} aria-label="recipe">
        <img
          src="https://vizyonergenc.com/company/vg800600.png"
          alt="Vizyoner Genç"
        />
      </Avatar>
    }
    action={
      <IconButton aria-label="settings">
        <MoreVertIcon />
      </IconButton>
    }
    title="Vizyoner Genç"
    subheader="20 saat önce"
  />
  <CardMedia
    component="img"
    height="50"
    image="https://vizyonergenc.com/storage/posts/1404460/RVrsDPjyTAgzh4EQYpnCdNCZeQE3k2W5KDKkzT4W.png"
    style={{ width: "100%" }}
    
  />
  <CardContent>
    <Typography variant="body2" color="text.secondary">
    📰 Haftalık Savunma Sanayii Gündemi

🗓️ 24-30 Temmuz 2023

🔗 https://vizyonergenc.com/icerik/haftalik-savunma-sanayii-gundemi-24-30-temmuz-2023-1690790075910

#savunmasanayii #gündem #haber #vizyonergenç #haftalıksavunmasanayiigündemi
    </Typography>
  </CardContent>
  <CardActions disableSpacing>
    <IconButton aria-label="add to favorites">
      <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite sx={{ color: "red" }} />} />
    </IconButton>
    <IconButton aria-label="share">
      <ShareIcon />
    </IconButton>
    <IconButton onClick={handleExpandClick} aria-expanded={expanded} aria-label="show more">
      <ExpandMoreIcon />
    </IconButton>
  </CardActions>
</Card>


<Card sx={{ margin: 5 }}>
  <CardHeader
    avatar={
      <Avatar sx={{ bgcolor: "white" }} aria-label="recipe">
        <img
          src="https://vizyonergenc.com/company/vg800600.png"
          alt="User Avatar"
        />
      </Avatar>
    }
    action={
      <IconButton aria-label="settings">
        <MoreVertIcon />
      </IconButton>
    }
    title="Vizyoner Genç"
    subheader="17 saat önce"
  />
  <CardMedia
    component="img"
    height="50"
    image="https://vizyonergenc.com/storage/posts/1404372/omNnfrko8Wwf5KU06L8oFItgAaAJXaOnqdRCPV3l.png"
    style={{ width: "100%" }}
    
  />
  <CardContent>
    <Typography variant="body2" color="text.secondary">
    Şampiyon Filenin Efeleri 🏆🇹🇷

FIVB Challenger Cup final maçında Katar’ı 3-2 mağlup ederek şampiyon olan ve 2024 Voleybol Milletler Ligi biletini alan #FileninEfeleri ’ni tebrik ediyoruz. 👏🏻🏐

#voleybol #challengercup #vizyonergenç
    </Typography>
  </CardContent>
  <CardActions disableSpacing>
    <IconButton aria-label="add to favorites">
      <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite sx={{ color: "red" }} />} />
    </IconButton>
    <IconButton aria-label="share">
      <ShareIcon />
    </IconButton>
    <IconButton onClick={handleExpandClick} aria-expanded={expanded} aria-label="show more">
      <ExpandMoreIcon />
    </IconButton>
  </CardActions>
</Card>
<Card sx={{ margin: 5 }}>
  <CardHeader
    avatar={
      <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
        <img
          src="https://vizyonergenc.com/storage/users/May2021/user-63356-KySwB44-1622003496.png"
          alt="User Avatar"
        />
      </Avatar>
    }
    action={
      <IconButton aria-label="settings">
        <MoreVertIcon />
      </IconButton>
    }
    title="Çağlar Demirkan"
    subheader="1 saat önce"
  />
  <CardMedia
    component="img"
    height="50"
    image="https://vizyonergenc.com/storage/posts/1404553/D0T3IBOdAo3zltKR5wwx7OW5vG1KQs0o2I8FnzSn.jpeg"
    style={{ width: "100%" }}
    
  />
  <CardContent>
    <Typography variant="body2" color="text.secondary">
      KALFA programı başladı.. bugünleri gördüğümüz için ALLAH'a hamd ediyorum..
      Sonsuza kadar varol TÜRKİYE.. #vizyonergenç #kalfa #staj
    </Typography>
  </CardContent>
  <CardActions disableSpacing>
    <IconButton aria-label="add to favorites">
      <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite sx={{ color: "red" }} />} />
    </IconButton>
    <IconButton aria-label="share">
      <ShareIcon />
    </IconButton>
    <IconButton onClick={handleExpandClick} aria-expanded={expanded} aria-label="show more">
      <ExpandMoreIcon />
    </IconButton>
  </CardActions>
</Card>
    </Box>
  );
};
