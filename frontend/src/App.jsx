import { Routes, Route} from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Signup from "./pages/Signup";

import Navbar from "./components/Navbar";
import ProtectRoute from "./components/protectRoute";


function App() {
  return (
    <div>
      <Navbar />

      <Routes>
        {/*Public routes*/}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        
        {/*Protected routes*/}
        <Route
          path="/"
          element= {
            <ProtectRoute>
              <Home />
            </ProtectRoute>
          }
        />

        <Route
          path="/profile"
          element= {
            <ProtectRoute>
              <Profile />
            </ProtectRoute>
          }
        />

        {/*Catch all - redirect to home*/}
        <Route
          path="*"
          element= {
            <ProtectRoute>
              <Home />
            </ProtectRoute>
          }
        />
    </Routes>
    </div>
  );
}

export default App
