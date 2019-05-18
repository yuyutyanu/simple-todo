import React from 'react'
import { Link } from 'react-router-dom'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton'
import Icon from '@material-ui/core/Icon'
import "../static/header.css"

const Header = () => (
  <AppBar position={"static"}>
    <Toolbar>
      <IconButton>
        <Link to="/settings" className="to-setting">
          <Icon>settings</Icon>
        </Link>
      </IconButton>
    </Toolbar>
  </AppBar>
)

export default Header
