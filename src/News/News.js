import React from 'react'
import Header from '../Main/Header'
import '../Main/Main.css'
import { useLocation, useParams } from 'react-router-dom';
function News() {
  const location = useLocation()
  const imag=location.state.ima
  const test = location.state.id

  return (
    <div className='App'>
        <Header />
        <div style={{
            border:"1px solid black",
            display:"flex",
            flexDirection:"column",
            height:"80%",
            width:"100%",   
            alignItems:"center"
        }}>
            <img src={imag} style={{
                height:"50%",
                width: "40%"
            }}/>
            <p style={{
                fontSize:"2.5rem"
            }}>
              asd {test}
            </p>
        </div>
    </div>
  )
}

export default News
