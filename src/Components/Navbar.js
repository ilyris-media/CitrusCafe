import React from 'react';
import styled from 'styled-components'
import CitrusLogo from '../Assets/CitrusLogo.svg';
import PhoneIcon from '@material-ui/icons/Phone';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <Nav>
            <Link to="/">
                <Img src={CitrusLogo} alt={"Citrus Logo"} />
            </Link>
            <Div>
                <A href="tel:6087549006"><PhoneIcon fontSize={'medium'} className="phone_icon" />(608) 754-9006</A>
                <LinksDiv>
                    <Link className="nav_link" to="/">Home</Link>
                    <Link className="nav_link" to="/contact" >Contact</Link>
                    <Link className="nav_link" to="/menus">Menus</Link>
                    <Link className="nav_link" to="/about">About</Link>
                </LinksDiv>
            </Div>
        </Nav>
    )
}

export default Navbar;

const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
    width: 85%;
    margin: 0 auto 15px auto;

`

const Img = styled.img`
    height: 115px;
`

const Div = styled.div`
    margin: 0 50px 0 0;
    width: 255px;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    margin-bottom: 20px;
`

const A = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background: orange;
    color: white;
    border-radius: 0px 0px 10px 10px;
    font-weight: 600;
    padding: .2em;
    cursor: pointer;
`

const LinksDiv = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 5%;
    font-weight: 400;
`

