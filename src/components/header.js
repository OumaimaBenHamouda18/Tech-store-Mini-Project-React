import React,{useState} from 'react';
import { Navbar,NavbarBrand,Nav,NavItem,Button,InputGroup,Input,Col,Dropdown,DropdownToggle,DropdownItem,Drop} from 'reactstrap';
import {NavLink} from 'react-router-dom';

function Header(props){
        const [open,setOpen]=useState(false);
    return(
       
        <React.Fragment>
         
            <Navbar dark expand="md">
                <div className="container">
                    <div className='row'>
                        <div className="col-3 offset-1 col-sm-1">
                            <NavbarBrand className="mr-auto" href="/">
                                <img src="assets/images/logo.png" height="30" width="41" alt="logo"></img>
                            </NavbarBrand>
                        </div>
                        <div className="col-3 offset-1 col-sm-6">
                            <Col  md={6}>
                                <InputGroup>
                                    {/*onkeyUp we will save the value of the search input in the props*/}
                                    <Input onKeyUp={(e)=>props.changeSearchText(e.target.value)} placeholder='Browse products here' />
                                    <Button >
                                    <span className="fa fa-search fa-lg"></span>
                                    </Button>
                                </InputGroup>
                            </Col>
                        </div>
                        <div className="col-3 offset-1 col-sm-2">
                            <Nav navbar className='links'>
                                    <NavItem className='item'>
                                        <NavLink to="/Panier"className="nav-link" onClick={()=>setOpen(!open)}>
                                            <i className="fa fa-shopping-cart fa-lg"> </i>
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink to="/Favorites"className="nav-link">
                                            <span class="fa fa-bookmark fa-lg"></span>
                                        </NavLink>
                                    </NavItem>
                                    <NavItem >
                                        <Button className='login'>
                                            <span class="fa fa-sign-in fa-lg"></span>
                                        </Button>
                                    </NavItem>
                                
                            </Nav>
                       
                        </div>
                    </div>
                </div>
            </Navbar>
        </React.Fragment>
    )
}


export default Header