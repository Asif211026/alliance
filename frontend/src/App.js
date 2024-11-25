import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import InputForm from "./components/inputForm";
import Leaderboard from "./components/leaderboard";
import Navbar from "./components/navbar";

const App = () => (
  <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<InputForm />} />
      <Route path="/leaderboard" element={<Leaderboard />} />
    </Routes>
  </Router>
);

export default App;
