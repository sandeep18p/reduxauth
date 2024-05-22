import './App.css';
import Login from './components/Login';
import Nav from './components/Nav';
import Profile from './components/Profile';
import { useState } from 'react';

function App() {
  const [page, setPage] = useState("Login");

  return (
    <>
      <Nav setPage={setPage} />
      {page === "Login" ? <Login setPage={setPage} /> : <Profile />}
    </>
  );
}

export default App;
