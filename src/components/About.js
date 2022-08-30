import React, { useState } from 'react'

function About(props) {
//    const[myStyle,setmyStyle]= useState
//    ({
//         color:'black',
//         backgroundColor:'white',
//         // border:'1px solid white',
//       })
    
      let myStyle={
        color:props.mode=== 'dark'?'white':'Black',
        backgroundolor:props.mode=== 'dark'?'black':'white',
        // border:'1px solid ',
      }
    
    return (
        <div className="container my-3" style={myStyle}>
        <h1>About Us</h1>
            <div className="accordion" id="accordionPanelsStayOpenExample" style={myStyle}>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="panelsStayOpen-headingOne">
                        <button  className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                           <strong> About The Project</strong>
                        </button>
                    </h2>
                    <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse " aria-labelledby="panelsStayOpen-headingOne">
                        <div className="accordion-body" >
                            This app is for the manipulations of Text.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
                        <button  className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                            <strong>Descriptions</strong>
                        </button>
                    </h2>
                    <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
                        <div className="accordion-body"  >
                            You Can easily manipulate the text as UpperCase(), LowerCase(), change color, and remove extra spaces from text
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="panelsStayOpen-headingThree">
                        <button  className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                           <strong>About Us</strong>
                        </button>
                    </h2>
                    <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
                        <div className="accordion-body" >
                           This is my first website in Reactjs
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
