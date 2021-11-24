import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignUp from './SignUp';
import Login from './Login';
import Navbar from './Navbar';
import HomePage from './Home/HomePage';

const Session = () => {
  const currentSession = useSelector((state) => state.session);
  const [logNsign, setlogNsign] = useState(true);

  const buttonActionHandle = () => {
    setlogNsign(!logNsign);
  };

  let ans = (
    <div className="bg-session m-0 position-relative p-0 border">
      <div className="position-absolute top-50 start-50 translate-middle session-container">
        <div
          className="p-2 bg-dark-transparent text-white rounded-3 d-flex flex-column align-items-center"
        >
          {
            logNsign
              ? <Login />
              : <SignUp />
          }
          <button className="link-info bg-transparent border-0" type="button" onClick={buttonActionHandle}>
            { logNsign ? 'Sign Up' : 'Log In' }
          </button>
        </div>
      </div>
    </div>
  );

  if (currentSession.session) {
    ans = (
      <Router>
        <div className="page-container">
        <Navbar/>
        <Routes >
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/newreservation" element={<p>New Reservations!!</p>} />
          <Route exact path="/reservations" element={<p>Reservations!!</p>} />
          <Route exact path="/newcar" element={<p>New Car!!</p>} />
          <Route exact path="/deletecar" element={<p>Delete Car!!</p>} />
        </Routes>
        </div>
      </Router>
    );
  }

  return ans;
};

export default Session;
