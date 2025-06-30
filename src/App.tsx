import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import "./App.css";
import SignUp from "./pages/auth/SignUp";
import LoginPage from "./pages/auth/LoginPage";
import OptionsPage from "./pages/OptionsPage";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/options" element={<OptionsPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
