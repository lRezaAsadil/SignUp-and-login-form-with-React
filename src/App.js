import "./App.css";
import Login from "./component/Login";
import SignUp from "./component/SignUp";
import { Navigate, Route, Routes } from "react-router-dom";

function App() {
  return (  
    <div className="App">
      <Routes>
        <Route path="/signUp" element={<SignUp />} />

        <Route path="/login" element={<Login />} />
        
        <Route path="/" element={<Navigate to="/login" />} />
      </Routes>
    </div>
  );
}

export default App;
