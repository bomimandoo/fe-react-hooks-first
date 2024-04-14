import React, {useState, useEffect} from 'react'
// import문 (처음에 밖에다 적어야함)



const Counter2 = () => {

//useState
  const [count,setcount]= useState(0);

  const Increse =()=> {
    setcount(count+1);
    console.log('Count 값이 변경되었습니다.')
  }
  

  const [text, setText]= useState('')
  //input에 입력한 내용을 console에 띄우기
  const handleText = event => {
    setText(event.target.value);
    console.log('text 값이 변경되었습니다.');
  }

  //useEffect
  useEffect(()=> {
    console.log('렌더링이 완료되었습니다.');
  }, []);
 



  return (
    <div className="counter">
     
      <h>Counter 2</h>
      <hr></hr>
      <h3>{count}</h3>
      <button onClick={Increse}> +1</button>
      <hr></hr>
      <input type={'text'} onChange= {handleText}></input>
      <h3>{text}</h3>
    </div>
  )

}
  


export default Counter2
//useEffect 구문
//useEffect(()=>{callback함수},[의존성배열])
//의존성배열 값이 변하면 콜백함수 실행
//빈 배열로 두면 처음 렌더링 시에만 실행됨