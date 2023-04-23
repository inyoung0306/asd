import React from 'react'
import HeaderHome from './HeaderHome'
import ContentHome from './ContentHome'
import { useLocation, useParams, useRoutes } from 'react-router-dom'
import './Home.css';
function Home() {

  return (
    <div className='Center-Align-Div'>
        <HeaderHome />
        <ContentHome />

    </div>
  )
}

export default Home
