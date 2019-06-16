import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import MenuItem from '@material-ui/core/MenuItem'
import Menu from '@material-ui/core/Menu'

import AccountCircle from '@material-ui/icons/AccountCircle'
import Typography from '@material-ui/core/Typography'

export default () => {
  const [anchorEl, setAnchorEl] = React.useState(null)
  function handleProfileMenuOpen(event) {
    setAnchorEl(event.currentTarget)
  }
  const renderMenu = (
    <Menu
      elevation={1}
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
      id="aa"
      keepMounted
      transformOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      open={!!anchorEl}
      onClose={() => setAnchorEl(null)}
    >
      <MenuItem>Meus livros</MenuItem>
      <MenuItem>Adicionar Livro</MenuItem>
    </Menu>
  )
  return (
    <AppBar
      elevation={0}
      position="static"
      color="defaul"
      style={{
        paddingBottom: '50px',
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <Toolbar>
        <Typography
          edge="end"
          style={{ flex: 1 }}
          align="start"
          color="primary"
          variant="h5"
          bold
        >
          WIKILIVROS
        </Typography>
        <IconButton
          edge="end"
          aria-label="Account of current user"
          onClick={handleProfileMenuOpen}
          color="inherit"
        >
          <AccountCircle color="primary" />
        </IconButton>
      </Toolbar>
      {renderMenu}
    </AppBar>
  )
}
