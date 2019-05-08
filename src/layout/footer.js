import React from 'react'
import {Link} from 'react-router-dom'

const Footer = () =>(
  <footer>
    <Link to="/">footer--------home</Link>
    <Link to="/about">footer---------about</Link>
    <Link to="/friend">footer---------friend</Link>
  </footer>
)

export default Footer
