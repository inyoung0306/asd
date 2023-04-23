import React from 'react'
import './Home.css'
function ContentHome() {
    const onClickMain = () =>{
        window.location.replace("/main")
    }

  return (
    <div className='Content-Wrap'>
        <div className='Vertical-Div'>
            <b className='Home-Text'
                onClick={onClickMain}>
            키워드 검색
            </b>
        </div>

        <div className='Vertical-Div'>
            <b className='Home-Text'>
            인기뉴스 검색
            </b>
        </div>   
    </div>
  )
}

export default ContentHome
