import React from 'react';
import Navbar from "react-bootstrap/Navbar";
import Nav from 'react-bootstrap/Nav'

import './App.css';

function App() {
  return (
    <div className="App">
    	<Navbar bg="light">
    		<Navbar.Brand>Reacognito</Navbar.Brand>
    		<Nav className="mr-auto">
        </Nav>
    		<Nav>
        <Nav.Link href="https://lc3test.auth.us-east-1.amazoncognito.com/login?response_type=code&client_id=1qo2p01r4m9mmf9sbfrkvfir1e&redirect_uri=localhost:3000">Login</Nav.Link>
    </Nav>
  		</Navbar>
      <p>Not Logged In</p>
    </div>
  );
}

export default App;
