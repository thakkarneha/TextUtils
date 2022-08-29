import React, { useState } from 'react'

function About() {
   const[myStyle,setmyStyle]= useState
   ({
        color:'white',
        backgroundColor:'black',
        border:'1px solid white',
      })

      const[btnText,setBtnText]= useState("Enable Light mode")
    const toggleStyle =()=>{
    if(myStyle.color ==='black'){
setmyStyle({
    color:'white',
    backgroundColor:'black'
})
setBtnText("Enable Light mode")

    }
    else{
        setmyStyle({
            color:'black',
            backgroundColor:'white'
        })
        setBtnText("Enable Dark mode")
    }
   }
    return (
        <div className="container" style={myStyle}>
        <h1>About Us</h1>
            <div className="accordion" id="accordionPanelsStayOpenExample" style={myStyle}>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="panelsStayOpen-headingOne">
                        <button style={myStyle} className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                           About The Project
                        </button>
                    </h2>
                    <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
                        <div className="accordion-body" style={myStyle}>
                            <strong>This app is for the manipulations of Text</strong>
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
                        <button style={myStyle} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                            Descriptions
                        </button>
                    </h2>
                    <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
                        <div className="accordion-body" style={myStyle}>
                            <strong>You Can easily manipulate the text as UpperCase(), LowerCase(), change color, and remove extra spaces from text</strong>
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="panelsStayOpen-headingThree">
                        <button style={myStyle} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                           About Us
                        </button>
                    </h2>
                    <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
                        <div className="accordion-body" style={myStyle}>
                            <strong>This is my first website in Reactjs</strong>
                        </div>
                    </div>
                </div>
            </div>
 <button onClick={toggleStyle} type="button" className="btn btn-primary" >{btnText}</button>
        </div>
    )
}

export default About
