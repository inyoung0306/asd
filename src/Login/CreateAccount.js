import React from 'react'

function CreateAccount() {
    return (
        <div style={{
            border: "3px solid black",
            height: "100%",
            display:"flex",
            justifyContent:"center",
            width:"80%",
    
        }}>
            <div style={{
                border:"1px solid pink",
                display:"flex",
                flexDirection:"column",
                height:"100%",
                justifyContent:"center"
            }}>
                <plaintext style={{
                    display:"flex",
                    justifyContent:"left"
                }}>
                    ID
                </plaintext>
                <input style= {{
                    height:"10%",
                    marginBottom:"5%",
                    fontSize:"2.5rem"
                }}>
                </input>
                <plaintext style={{
                    display:"flex",
                    justifyContent:"left"
                }}>
                    이메일
                </plaintext>
                <input style= {{
                    height:"10%",
                    marginBottom:"5%",
                    fontSize:"1.5rem"
                }}>
                </input>
                <plaintext style={{
                    display:"flex",
                    justifyContent:"left"
                }}>
                    PW
                </plaintext>
                <input style= {{
                    height:"10%",
                    marginBottom:"5%",
                    fontSize:"2.5rem"
                }} type="password">
                </input>
                <plaintext style={{
                    display:"flex",
                    justifyContent:"left"
                }}>
                    PW 확인
                </plaintext>
                <input style= {{
                    height:"10%",
                    fontSize:"2.5rem"
                }} type="password">
                </input>
            </div>
            <div style={{
                border:"0.5px solid blue",
                height:"100%",
                display:"flex",
                flexDirection:"column",
                justifyContent:"center",
            }}>
                <button style={{
                    height:"3%"
                }}>
                    회원가입하기
                </button>
    
            </div>
       
    
    
         </div>
      )
    }
export default CreateAccount
