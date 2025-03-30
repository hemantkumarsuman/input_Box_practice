import EmailValidator from "./components/EmailValidator";
import InputLengthValidation from "./components/InputLengthValidation";
import PasswordValidation from "./components/PasswordValidation";
import RealTimeInputHandle from "./components/RealTimeInputHandle";


function App() {
  return (
    <div>
      <PasswordValidation/>
      <InputLengthValidation/>
      <EmailValidator/>
      <RealTimeInputHandle/>
    </div>
  );
}

export default App;
