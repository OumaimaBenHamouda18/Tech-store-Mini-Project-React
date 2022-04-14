import React,{Component} from 'react'
import { Navbar,NavbarBrand,Nav,NavbarToggler,Collapse,NavItem,Button,InputGroup,Input,Col} from 'reactstrap';
import {NavLink} from 'react-router-dom';
class Header extends  Component{
    constructor(props){
        super(props)
        this.state={
            isNavOpen:false
        }
        this.toggleNav=this.toggleNav.bind(this);

    }
    toggleNav(){
        this.setState(
            {isNavOpen:!this.state.isNavOpen}
        );
    }
    render(){
        return(
            <React.Fragment>
                <Navbar dark expand="md">
                    <div className="container">
                        <div className='row'>
                        <div className="col-3 offset-1 col-sm-1">
                        <NavbarToggler onClick={this.toggleNav}></NavbarToggler>
                    <NavbarBrand className="mr-auto" href="/">
                        <img src="assets/images/logo.png" height="30" width="41" alt="logo"></img>
                    </NavbarBrand>
                        </div>
                        <div className="col-3 offset-1 col-sm-6">
                        <Col  md={6}>
                            <InputGroup>
                                <Input placeholder='Browse products here' />
                                <Button>
                                <span className="fa fa-search fa-lg"></span>
                                </Button>
                            </InputGroup>
                        </Col>
                        </div>
                        <div className="col-3 offset-1 col-sm-2">
                        <Collapse isOpen={this.state.isNavOpen}navbar>
                        <Nav navbar className='links'>
                                <NavItem className='item'>
                                    <NavLink to="/Panier"className="nav-link">
                                        <span className="fa fa-shopping-cart fa-lg "></span>
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink to="/Favorites"className="nav-link">
                                        <span class="fa fa-bookmark fa-lg"></span>
                                    </NavLink>
                                </NavItem>
                            
                            </Nav>

                            <Nav navbar className='sign'>
                                <NavItem>
                                    <Button>
                                        <span class="fa fa-sign-in fa-lg"></span>
                                    </Button>
                                </NavItem>
                            </Nav>
                           
                        </Collapse>
                            </div>


                   
                        
                    </div>
               
                        </div>
                       

                </Navbar>
            </React.Fragment>
        )
    }

}
export default Header