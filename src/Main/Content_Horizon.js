import React from 'react'
import { useNavigate } from 'react-router-dom'

/* 여기서 한 번 더 이미지 넘기고 대강 하면 될듯? */
function Content_Horizon(props) {
  const imag = props.ima
  const navigate = useNavigate()

  const onClickNews =() =>{
    navigate(`/news` , {state: {id:'asd', ima:imag}});
}
  return (
    <div className='Horizontal-Content'
    onClick={onClickNews}>
        <img src = {imag}
            className='Thumbnail'
        />
        <a className='HeadLine' 
        >
            {props.para}
        </a>
    </div>
  )
}

export default Content_Horizon
