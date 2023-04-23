import React, { useState } from 'react'
import Content_Horizon from './Content_Horizon'


function Content(props) {

    const paragra = props.para
    const ima = props.ima
    const [count,SetCount]=useState(0)
    const onClickPrev = () =>{
        if(count<=0)
        {
            alert("첫 번째 페이지입니다")
        }
        else
        {
            SetCount(count-1)
        }
    }
    const onClickNext = () =>{
        if(3*count+2>=paragra.length)
        {
            alert("마지막 페이지입니다")
        }
        else
        {
            SetCount(count+1)
        }
    }

  return (
    <div className='Content-Wrapm'>
      <button className='Button-3' onClick={onClickPrev}>전 페이지 이동</button>
      <div className='Vertical-Content'>
      {3*count<10 &&
      <Content_Horizon para={paragra[3*count]} ima={ima[3*count]}/>
      }   
      {3*count+1<paragra.length &&
      <Content_Horizon para={paragra[3*count+1]} ima={ima[3*count+1]}/>
      }
      {3*count+2<paragra.length &&
        <Content_Horizon para={paragra[3*count+2]} ima={ima[3*count+2]}/>
      }
      </div>
      <button className='Button-4'onClick={onClickNext}>다음 페이지 이동</button>
      
    </div>
  )
}

export default Content
