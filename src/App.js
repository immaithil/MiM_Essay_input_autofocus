import React,{useState, useRef, useEffect} from 'react';
import Popup from './component/popup';
import './App.css';
import Heading from './component/heading';

function App() {
  const [show, setShow]=useState(false);
  const showPopup=()=>{
    setShow(!show);
  }
  const [number,setNumber]=useState("");
  const changeInput=(e)=>{
    setNumber(e.target.value);
  }

  const sendRef= useRef(null);
  // useEffect(()=>{
  //   if(number.length!==0){
  //     sendRef.current.disabled=false;
  //   }
  // })
  return (
   <div className='main'>
     <Heading/>
     
     <h1>Otp Assignment</h1>
     <input type="text" placeholder='enter 10 digit number' className="number-input" value={number} onChange={changeInput} />
     <button onClick={showPopup} className='primary-btn'  ref={sendRef} >Send OTP </button>
     {show && <Popup number={number} setShow={setShow} />}
   </div>
  );
}

export default App;
