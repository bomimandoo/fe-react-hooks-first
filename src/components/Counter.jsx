import React, { useState } from 'react'


// const[상태 변수, 상태 변화 함수]= useState('')
  const Counter = () => {
    const [count,setcount]= useState(0);

    const Increse =()=> {
      setcount(count+1);
    }
    const decrease = ()=> {
      setcount(count -1);
    }
    return (
      <div className="counter">
        <h>Counter 1</h>
        <hr></hr>
        <p>{count}</p>
        <button onClick={decrease}> -1</button>
        <button onClick={Increse}> +1</button>
      </div>
    )
  }
 
  

export default Counter
//<button 이벤트 핸들러 = {   }> </button>