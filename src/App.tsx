import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* <Route path="/signup" element={<SignUpView />} />
          <Route path="/admin/notices" element={<NoticePage />} />
          <Route path="/admin/add-notice" element={<AddNotice />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
