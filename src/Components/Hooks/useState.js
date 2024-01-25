import React from 'react'
import './style.css'

const useState = () => {
    const initialData =0;
    const [mynum,setmyNum]=React.useState(initialData);

  return (
    <>
        <div>
            <p>{mynum}</p>
            <div class='button2' onClick={()=>setmyNum(mynum+1)}>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                Increment
            </div>
        
            
            <div class='button2' onClick={()=> setmyNum(mynum-1)}>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                Decrement
            </div>
        </div>
    </>
  )
}

export default useState