import React, { useState, useRef, useEffect } from "react";

function Popup(props) {
  const [box1, setBox1] = useState("");
  const box1Ref = useRef(null);
  useEffect(() => {
    box1Ref.current.focus();
  }, []);
  useEffect(() => {
    if (box1.length === 1) {
      box1Ref.current && box2Ref.current.focus();
    }
  }, [box1.length]);
  const onChangeBox1 = (e) => {
    setBox1(e.target.value);
  };

  const [box2, setBox2] = useState("");
  const box2Ref = useRef(null);
//   useEffect(() => {
//     box2Ref.current.focus();
//   }, []);
  useEffect(() => {
    if (box2.length === 1) {
      box3Ref.current.focus();
    }
  }, [box2.length]);
  const onChangeBox2 = (e) => {
    setBox2(e.target.value);
  };

  const [box3, setBox3] = useState("");
  const box3Ref = useRef(null);
//   useEffect(()=>{
//       box3Ref.current.focus();
//   },[]);
  useEffect(()=>{
      if(box3.length===1){
          box4Ref.current.focus();
      }
  },[box3.length]);
  const onChangeBox3 = (e) => {
    setBox3(e.target.value);
  };

  const [box4,setBox4]= useState("");
  const box4Ref= useRef(null);
//   useEffect(()=>{
//       box4Ref.current.focus()
//   },[]);
  useEffect(()=>{
      if(box4.length===1){
          box5Ref.current.focus();
      }
  },[box4.length])
  const onChangeBox4=e=>{
      setBox4(e.target.value);
  }

  const [box5,setBox5]= useState("");
  const box5Ref=useRef(null);
//   useEffect(()=>{
//       box5Ref.current.focus();
//   },[]);
  useEffect(()=>{
      if(box5.length===1){
          box6Ref.current.focus();
      }
  },[box5.length])
  const onChangeBox5=e=>{
      setBox5(e.target.value);

  }
 
  const [box6,setBox6]=useState("");
  const box6Ref= useRef(null);
  const onChangeBox6=e=>{
      setBox6(e.target.value);
  }

  useEffect(()=>{
      if(box6.length===1){
          verifyRef.current.disabled=false;
      }
  },[box6.length])
  const verifyRef= useRef(null);



  useEffect(()=>{
      if(box6.length===0){
          box5Ref.current.focus()
      }
  },[box6.length]);

  useEffect(()=>{
    if(box5.length===0){
        box4Ref.current.focus()
    }
},[box5.length]);

useEffect(()=>{
    if(box4.length===0){
        box3Ref.current.focus()
    }
},[box4.length]);

useEffect(()=>{
    if(box3.length===0){
        box2Ref.current.focus()
    }
},[box3.length]);

useEffect(()=>{
    if(box2.length===0){
        box1Ref.current.focus()
    }
},[box2.length]);


  const handlePaste=(e)=>{
      if(e.ctrlKey && e.charCode==='v'){
        navigator.clipboard.readText()
        .then(text => {
          text.split('').map(ele=>Number(ele));
          setBox1(text[0]);
          setBox2(text[1]);
          setBox3(text[2]);
          setBox4(text[3]);
          setBox5(text[4]);
          setBox6(text[5]);
          
        })
        .catch(err => {
          console.error('Failed to read clipboard contents: ', err);
        }); 
      }
  }

  return (
      <div className='container'>
    <div className="inputs">
      <h3>Enter the 6 digit OTP </h3>
      <p text={props.number} ></p>
      <div>
        <input
          type="number"
          maxLength={1}
          value={box1}
          onChange={onChangeBox1}
          autoFocus={true}
          ref={box1Ref}
          onKeyPress={(e)=>handlePaste(e)}
        />
        <input
          type="number"
          maxLength={1}
          value={box2}
          onChange={onChangeBox2}
          ref={box2Ref}
        />
        <input
          type="number"
          maxLength={1}
          value={box3}
          onChange={onChangeBox3}
          ref={box3Ref}
        />

        <input
          type="number"
          maxLength={1}
          value={box4}
          onChange={onChangeBox4}
          ref={box4Ref}
        />

        <input
          type="number"
          maxLength={1}
          value={box5}
          onChange={onChangeBox5}
          ref={box5Ref}
        />

        <input
          type="number"
          maxLength={1}
          value={box6}
          onChange={onChangeBox6}
          ref={box6Ref}
        />
      </div>
    </div>
    <div className='btns'>
    <button className='primary-btn' disabled={true} ref={verifyRef}>verify</button>
    <button className='primary-btn' onClick={()=>props.setShow(false)}>Re-Enter</button>
    </div>
    </div>
  );
}

export default Popup;
