import React from 'react';
import { Nav, Navbar, Offcanvas } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';

function Navigation() {

    const Location = useLocation();

  return (
    <>
        <Navbar collapseOnSelect expand="md" bg='light' data-bs-theme='light' style={{padding:'8px 6.5%'}}>
            <Link 
                to='/'
                style={{fontSize:'160%', fontWeight:'700', textDecoration:'none', color:'black'}}
            >
                Rick & Morty&nbsp;
                <span style={{color:'#0b5ed7'}}>Wiki</span>
            </Link>
            <Navbar.Toggle aria-controls='responsive-navbar-nav' />
            <Navbar.Offcanvas 
                id={`offcanvasNavbar-expand-${'md'}`}
                aria-labelledby={`offcanvasNavbarLabel-expand-${'md'}`} 
                placement='end'
            >
                <Offcanvas.Header closeButton></Offcanvas.Header>
                <Offcanvas.Body>
                    <Nav className='justify-content-end flex-grow-1'>
                        <Link
                            to='/' 
                            style={{
                                textDecoration : 'none', 
                                color : Location.pathname === '/' ? '#0b5ed7' : 'gray', 
                                padding:'10px',
                                borderBottom : Location.pathname === '/' ? '2px Solid #0b5ed7' : '0',
                                fontWeight:'600'
                            }}
                        >
                            Characters
                        </Link>
                        <Link 
                            to='/episodes' 
                            style={{
                                textDecoration : 'none', 
                                color : Location.pathname === '/episodes' ? '#0b5ed7' : 'gray', 
                                padding:'10px',
                                borderBottom : Location.pathname === '/episodes' ? '2px Solid #0b5ed7' : '0',
                                fontWeight:'600'
                            }}
                        >
                            Episodes
                        </Link>
                        <Link 
                            to='/locations' 
                            style={{
                                textDecoration : 'none', 
                                color : Location.pathname === '/locations' ? '#0b5ed7' : 'gray', 
                                padding:'10px',
                                borderBottom : Location.pathname === '/locations' ? '2px Solid #0b5ed7' : '0',
                                fontWeight:'600'
                            }}
                        >
                            Locations
                        </Link>
                    </Nav>
                </Offcanvas.Body>
            </Navbar.Offcanvas>
        </Navbar>
    </>
  )
}

export default Navigation;