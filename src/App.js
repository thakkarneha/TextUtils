import Navbar from './components/Navbar';
import Textform from './components/TextForm';
// import About from './components/About';
import './App.css';
import { useState } from 'react';
import Alert from './components/Alert';

// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
 
 
// } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
   const showAlert =(message, type) => {
    setAlert({
  msg:message,
  type:type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode = () =>{
    if (mode ==='light'){
      setMode('dark');
      document.body.style.backgroundColor='#042743';
       showAlert("Dark mode is on", "success")
    }
    
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light mode is on", "danger")
    }
    
  }
  return (

<>
{/* <Router> */}
  <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className="container my-3">
      <Textform heading="Enter the Text to analyze " mode={mode}  showAlert={showAlert}/>
      </div>
      {/* <Routes>
          <Route exact path="/about" element={<About/>}>
           
          </Route> */}
         
         
          {/* <Route exact path="/" element={<Textform heading="Enter the Text to analyze " mode={mode}  showAlert={showAlert}/>}>
          

          </Route>
        </Routes>
      </div>
      </Router> */}
     
</>
   

  );
}

export default App;
