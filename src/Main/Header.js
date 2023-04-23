import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'


function Header() {
    const loc = useLocation();
  
    
    const onClickPlay = () =>{
      const audio = new Audio(require("../Audio/TestAud.mp3"))
      audio.play();
  }
    const onClickAgain = () =>{
        /* 버튼을 누르면 사용자가 말한 키워드를 다시 들을 수 있도록 하는 기능 추가할 예정 */
      }
    
      
      const onClickBack = (e) => {
          if(loc.pathname === "/main")
          {
            window.location.replace("/")
          }
          else if(loc.pathname === "/news")
          {
            window.location.replace("/main")
          }
  
      }
      


 


      return (
        <div className='Header-Wrap'>
          <img className='Button-1' 
            src={require("../Img/left-arrow.png")} 
            onClick={onClickBack}>

          </img>
          <b className='Logo'
          >
            어플 이름
          </b>
          <img className='Button-2' 
            src={require("../Img/play-button.png")} 
            onClick={onClickPlay}>
          </img>
        </div>
    
      )
}

export default Header
