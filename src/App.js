import About from "./components/About";
import EmailValidator from "./components/EmailValidator";
import Header from "./components/Header";
import Home from "./components/Home";
import InputLengthValidation from "./components/InputLengthValidation";
import PasswordValidation from "./components/PasswordValidation";
import RealTimeInputHandle from "./components/RealTimeInputHandle";
import {BrowserRouter,Routes,Route} from 'react-router-dom'


function App() {
  return (
    <div>
      <BrowserRouter>
            <Header/>
            <Routes>
                
                <Route path='/home' element={<Home/>}></Route>
                <Route path='/about' element={<About/>}></Route>

            </Routes>
        </BrowserRouter>

      
      <PasswordValidation/>
      <InputLengthValidation/>
      <EmailValidator/>
      <RealTimeInputHandle/>
    </div>
  );
}

export default App;
