import React from 'react';
import '../styles/Navbar.css'
import { Link } from 'react-router-dom';
import { Stack } from '@mui/material';
import Logo from '../assets/images/Logo1.jpg';

const Navbar = () => {
  return (
    <Stack className='nav-main-stack'>
      <Link to="/">
        <img src={ Logo } alt="logo" width='150px' />
      </Link>
      <Stack className='nav-substack'>
        <Link to="/" className='nav-link'>Home</Link>
        <a href="#exercises" className='nav-link'>Exercises</a>
      </Stack>
    </Stack>
  )
}

export default Navbar
