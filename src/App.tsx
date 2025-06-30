import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import "./App.css";
import SignUp from "./pages/auth/SignUp";
import LoginPage from "./pages/auth/LoginPage";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<LoginPage />} />
          {/* {/* <Route path="/signup" element={<SignUpView />} /> */}
          {/* <Route path="/admin/notices" element={<NoticePage />} />
          <Route path="/admin/add-notice" element={<AddNotice />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
