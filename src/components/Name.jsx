import React, { useState } from 'react'



const Name = () => {

  // const[상태 변수, 상태 변화 함수]= useState('')
  const [name, setName] = useState('')
  const [nickName, setNickname] = useState('')

  // 이벤트 값 반환
  const handleName = event => {
  setName(event.target.value)
  }

  const handleNickname = event => {
    setNickname(event.target.value)
  }

  return (
    <div className="name">
      <h>Name</h>
      <hr></hr>
      <input name="myName" placeholder="이름을 입력해주세요" onChange={handleName}/>
      <input name="nickName" placeholder="닉네임을 입력해주세요" onChange={handleNickname}/>
      <p>이름: {name === '' ? ' 아직 이름이 없습니다' : name}</p>
      <p>닉네임: {nickName === '' ? ' 아직 닉네임이 없습니다' : nickName}</p>

    </div>
  )
}

export default Name
