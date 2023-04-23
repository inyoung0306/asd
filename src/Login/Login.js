import React, { useState } from 'react'
import Header from '../Main/Header'
import { useNavigate } from 'react-router-dom'
import './Login.css'

function Login() {
  const navigate = useNavigate();

  const [Id,setId] = useState("")
  const [Pw,setPw] = useState("")
  const [Tf,setTf] = useState(true)
  const onChangeId = (e) =>{
    setId(e.target.value);
  }
  const onChangePw = (e) =>{
    setPw(e.target.value);
  }
  const onClickLogIn = (q) =>{
    if(q)
    {
      navigate("/");
    }
    else
    {
      alert("Id, 비밀번호가 틀렸습니다.")
      window.location.replace("/login")
    }
  }
  const onClickCa = () =>{
    window.location.replace("/ca")
  }
    return (
      <div className='Login-Wrap'>
          <Header/>
          <div className='Login-Content'>
        <div className='Id-Pw'>
          <input className='Input1'
            onChange={onChangeId} value={Id}>
          </input>
          
          <input type="password" 
            className='Input1'
             onChange={onChangePw} value={Pw}>
          </input>
        </div>
          <button className='Button1'
            onClick={() =>onClickLogIn(Tf)}
          >
            로그인
          </button>
  
        </div>
        <div className='Info-Wrap'>
          <button className='Button2' 
            onClick={onClickCa}
          >
            회원가입
          </button>
          <button className='Button2'>
            정보찾기
          </button>
        </div>
  
      </div>
    )
  }
  

export default Login
