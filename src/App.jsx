import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "../src/components/pages/Home";
import { Success } from "../src/components/pages/Success";
import Login from '../src/components/pages/Login';
import Dashboard from '../src/components/pages/Dashboard';
import Index from '../src/components/dashboard/Index' 

function App() {
  return (
    <div className="App">
      {/* routing done here */}
      <Routes>
        <Route index element={<Home />} />
        <Route path="success" element={<Success />} />
        <Route path="login" element={<Login />} />
        <Route path="dashboard" element={<Dashboard />}>
          <Route index element={<Index />} />
          <Route path="index" element={<Index />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
