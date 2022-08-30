import React, { useState } from 'react';



function Textform(props) {
  const [text, setText] = useState("")

  const [myStyle, mytextStyle] = useState ({
    color:'#042743',
    
  })
  const[btnText,setBtnText]= useState("Change Color")


  const changeColor =(e)=>{
    e.preventDefault();
    if(myStyle.color ==='#042743'){
      mytextStyle({
    color:'red',

})
setBtnText("Back to Color")

    }
    else{
      mytextStyle({
            color:'#042743',
            
        })
        setBtnText("Change Color")
    }
    props.showAlert("Color Changed", "success");
   }
  const handelUpClick = (e) => {
    e.preventDefault();
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to UpperCase", "success");
  }
  const handelLowClick = (e) => {
    e.preventDefault();
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to LowerCase", "success");
  }
  const removeSpaces = (e) => {
    e.preventDefault();
    let data = text.trim().split(/ +/).join(' ');
    setText(data);
    props.showAlert("Remove Spaces", "success");
  }
  const reset = (e) => {
    e.preventDefault();
    let newText = '';
    setText(newText);
    props.showAlert("Clear all", "success");
  }
   


  const handelOnChange = (event) => {
    setText(event.target.value);

  }

  return (
    <>
      <div className="container" style={{color:props.mode ==='dark'?'white':'#042743'}}>
        <form>
          <div className="container">
            <h1>{props.heading}</h1>
            <div className="form-group">
              <textarea className="form-control"  id="text" rows="8" value={text} onChange={handelOnChange} style={myStyle}></textarea>
            </div>
            <button className='btn btn-primary btn-space my-2 p-3' onClick={handelUpClick} >Convert to UpperCase</button>
            <button className='btn btn-primary btn-space my-2 p-3' onClick={handelLowClick} >Convert to LowerCase</button>
            <button className='btn btn-primary btn-space my-2 p-3' onClick={changeColor}>{btnText}</button>
            <button className='btn btn-primary btn-space my-2 p-3' onClick={removeSpaces}>Remove Extra Spaces</button>
           <button className='btn btn-primary btn-space my-2 p-3' onClick={reset} >Clear All</button>

          </div>

        </form>
      </div>

      <div className="container" style={{color:props.mode ==='dark'?'white':'#042743'}}>

        <h2>Your Text Summary here</h2>
        <p>  {text.split(/\s+/).filter((element) => {return element.length !==0}).length} words,  {text.length} Charachter</p>
        <p> {0.08 * text.split(" ").filter((element) => {return element.length !==0}).length} Minutes Read</p>
        <h2>Preview Text</h2>

        <p style={myStyle}>{text.length>0? text:"Enter Something in the above textarea!"}</p>
      </div>
    </>
  )
}

export default Textform
