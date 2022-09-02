import { AppBar, Box, styled, Toolbar, InputBase, Badge, Avatar, Menu, MenuItem } from '@mui/material';
import React, { useState } from 'react';
import CurrencyBitcoinIcon from '@mui/icons-material/CurrencyBitcoin';
import { Mail, Notifications } from '@mui/icons-material';


const StyledToolbar = styled(Toolbar)({
  display:"flex",
  justifyContent:"space-between"
});

const SearchBar = styled ("div")(({theme})=>({
  backgroundColor:"white",
  padding:"0 10px",
  borderRadius: theme.shape.borderRadius,
  width: "40%"
}));

const Icons = styled (Box)(({theme})=>({
  display:"flex",
  gap: "20px",
  alignItems:"center",
  borderRadius: theme.shape.borderRadius,
  width: "7%"
}));


export const Navbar = () => {
  const [open,setOpen] = useState(false)
  return (
    <AppBar position="sticky">
      <StyledToolbar>
      <CurrencyBitcoinIcon/>
      <SearchBar>
        <InputBase placeholder='Fuck ballet...'/>
      </SearchBar>
      <Icons>
        <Badge badgeContent={0} color="error">
        <Mail/>
        </Badge>
        <Badge badgeContent={0} color="error">
          <Notifications />
        </Badge>
        <Avatar 
          sx={{width:30, height:30}}
          src="data:image/jpeg;base64,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"/>
        onClick={(e) => setOpen(true)}
      </Icons>
      </StyledToolbar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={(e) => setOpen(false)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <MenuItem >Profile</MenuItem>
        <MenuItem >My account</MenuItem>
        <MenuItem >Logout</MenuItem>
      </Menu>
    </AppBar>
  )
}

export default Navbar