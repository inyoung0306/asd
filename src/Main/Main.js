import React from 'react'
import Header from './Header'
import Content from './Content'
import './Main.css'

function Main() {
  const para1=['아름다운 은평구의 산골',
        '즐거운 기계학습 기초',
        '돌을 던지는 26세 최인영씨',
        '1학년의 발언에 상처받은 4학년 최인영씨',
        '울산으로 여행가서 신난 3년전 최인영씨',
        '입대한 제자에게 발해의 역사에 대해 인편을 작성한 최인영',
        '귀여운 길고양이',
        '큰 잠만보와 작은잠만보(feat,팬텀)']

  const imag=[require("../Img/img1.jpg"),require("../Img/img2.jpg"),require("../Img/img3.jpg"),require("../Img/img4.jpg"),require("../Img/img5.jpg"),require("../Img/img6.jpg"),require("../Img/img7.jpg"),require("../Img/img8.jpg")]


  return (
    <>
        <Header />
        <Content ima={imag}  para={para1}/>
    </>
  )
}

export default Main
