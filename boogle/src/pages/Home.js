import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className='home'>
      <div className='home__header'>
        Header Section
        <div className='home__header__left'>
          <Link to='about'>About</Link>
          <Link to='/store'>Store</Link>
        </div>
        <div className='home__header__right'>
          <Link to='/gmail'>Gmail</Link>
          <Link to='/images'>Images</Link>
        </div>
      </div>
      <div className='home__body'>
        Header Body
      </div>
    </div>
  )
}

export default Home