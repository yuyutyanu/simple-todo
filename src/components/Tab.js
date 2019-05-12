import React from 'react'
import {Link} from 'react-router-dom'

export const Tab = ({index}) => (
  <Link to={`/${index}`}>
    tab
  </Link>
)