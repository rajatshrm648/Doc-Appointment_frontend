import {BrowserRouter ,Routes, Route} from "react-router-dom";
import Homepage from "./pages/Homepage";
import Login from "./pages/Login";
import Register from "./pages/register";




function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Route>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
