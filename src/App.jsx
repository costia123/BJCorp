import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "screens/Home";
import Login from 'screens/Login'
import Chat from "screens/chat";

function App() {

  return (
    <>
      <Router>
		<Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/login" element={<Login />}/>
          <Route path="/logged" element={<Chat />}/>
		</Routes>
      </Router>
    </>
  );
}
export default App;