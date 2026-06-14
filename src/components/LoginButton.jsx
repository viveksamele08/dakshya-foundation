import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Button, Box, Avatar, Menu, MenuItem } from '@mui/material';

function LoginButton() {
  const { loginWithRedirect, logout, user, isAuthenticated } = useAuth0();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    handleMenuClose();
    logout({ logoutParams: { returnTo: window.location.origin } });
  };

  if (isAuthenticated) {
    return (
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        <Avatar
          alt={user?.name}
          src={user?.picture}
          sx={{ width: 40, height: 40, cursor: 'pointer' }}
          onClick={handleMenuOpen}
        />
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
        >
          <MenuItem disabled sx={{ opacity: 1 }}>
            {user?.email}
          </MenuItem>
          <MenuItem onClick={handleLogout}>Logout</MenuItem>
        </Menu>
      </Box>
    );
  }

  return (
    <Button
      onClick={() => loginWithRedirect()}
      variant="outlined"
      sx={{
        color: '#14b8a6',
        borderColor: '#14b8a6',
        '&:hover': {
          borderColor: '#14b8a6',
          backgroundColor: 'rgba(20, 184, 166, 0.08)',
        },
      }}
    >
      Login
    </Button>
  );
}

export default LoginButton;
