import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import DriverLogin from "./pages/DriverLogin.jsx";
import StudentLogin from "./pages/StudentLogin.jsx";

function App() {
  return (
    <BrowserRouter>

      <h1>College Bus Tracker</h1>

      <Link to="/driver">
        <button>Driver Login</button>
      </Link>

      <Link to="/student">
        <button>Student Login</button>
      </Link>

      <Routes>
        <Route path="/driver" element={<DriverLogin />} />
        <Route path="/student" element={<StudentLogin />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;