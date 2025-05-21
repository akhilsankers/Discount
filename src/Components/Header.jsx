import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import React from 'react'
import '../App.css'
function Header() {
    return (
        <div>
            <Navbar className='nav'>
                <Navbar.Brand className='p-3' href="#home" style={{ color: 'white' }}>
                    <img
                        alt=""
                        src="https://w7.pngwing.com/pngs/110/471/png-transparent-discounts-and-allowances-advertising-sales-promotion-computer-icons-marketing-logo-discount-sticker.png"
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    />{' '}
                    Discound Calculator
                </Navbar.Brand>

            </Navbar>
        </div>
    )
}

export default Header
