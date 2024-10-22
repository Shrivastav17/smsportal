
import Nav from 'react-bootstrap/Nav';
import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <div className="container ">
       
        <h1 className='text-center text-uppercase pt-3' style={{'color':'Purple'}}>Sms portal</h1> <br></br>
        <Nav className="justify-content-center"  activeKey="/home">
          <Nav.Item >
            <Nav.Link href="/">Home</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/add-library">Add Library</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/add-group">Add Group</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/add-contact"> Add Contact </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/add-message">Add Message</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/sms">SMS Message</Nav.Link>
          </Nav.Item>
        </Nav>

      </div>

    </>
  );
}

export default Header;