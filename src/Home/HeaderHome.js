import React from 'react'

function HeaderHome() {

      const onClickPlay = () =>{
          const audio = new Audio(require("../Audio/TestAud.mp3"))
          audio.play();
      }
      const onClickBack = (e) => {
          window.location.replace("/login")
      }
    
      return (
        <div className='Header-Wrap'>
           <button className='Button-1'  
            onClick={onClickBack}
           >
            로그아웃
          </button>
          <b className='Logo'>
            어플 이름
          </b>
          <img className='Button-2' 
            src={require("../Img/play-button.png")} 
            onClick={onClickPlay}
          >

          </img>
        </div>
    
      )
}

export default HeaderHome
