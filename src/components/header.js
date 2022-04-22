import React,{useState} from 'react';
import {ModalBody,Modal, Navbar,NavbarBrand,Nav,NavItem,Button,InputGroup,Input,Col,Dropdown,DropdownItem, DropdownMenu, ModalHeader,Label,Form,FormGroup } from 'reactstrap';
import {NavLink} from 'react-router-dom';

function Header(props){
        const [open_shoppingCart,setShoppingCart]=useState(false);//hook1 to control state of shopping cart button
        const [open_login,setLogin]=useState(false);//hook3 to controle state of login button
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
                                    <Button className='searchBtn'>
                                    <span className="fa fa-search fa-lg"></span>
                                    </Button>
                                </InputGroup>
                            </Col>
                        </div>
                        <div className="col-3 offset-1 col-sm-2">
                            <Nav navbar className='links'>
                                    <NavItem className='item'onClick={()=>{setShoppingCart(!open_shoppingCart)}}>
                                        <NavLink to="/Panier"className="nav-link" >
                                            <i className="fa fa-shopping-cart fa-lg"> </i>
                                        </NavLink>
                                    </NavItem>
                                    <NavItem >
                                        <NavLink to="/Favorites"className="nav-link">
                                            <span class="fa fa-bookmark fa-lg"></span>
                                        </NavLink>
                                    </NavItem>
                                    <NavItem >
                                        <Button className='login' onClick={()=>setLogin(!open_login)}>
                                            <span class="fa fa-sign-in fa-lg"></span>
                                        </Button>
                                    </NavItem>
                                
                            </Nav>
                       
                        </div>
                    </div>
                </div>
            </Navbar>
            {/* dropdown menu for shopping cart*/}
            <Dropdown className="shopping_cart_menu"  isOpen={open_shoppingCart} onMouseLeave={()=>setShoppingCart(false)} >
                <DropdownMenu >
                    {
                        [...new Set(props.purchases)].map(item=>(
                            
                            
                            <DropdownItem className='shooping-dropdown-item'>{item.substring(0,30)}<i className='fa fa-arrow-right '></i></DropdownItem>

                        ))
                    }

                </DropdownMenu>
            </Dropdown>
           
            <Modal  onMouseLeave={()=>{setLogin(false)}}className="loginModal" isOpen={open_login}>
                <ModalHeader className='loginHeader loginBody'>Account Login</ModalHeader>
                <ModalBody className='loginBody'>
                    <Form >
                        <FormGroup>
                            <Label>Username</Label>
                            <Input type="text"/>
                        </FormGroup>
                        <FormGroup>
                            <Label>Password</Label>
                            <Input type="password"/>
                        </FormGroup>
                        <FormGroup check>
                            <Label check>
                                <Input  type="checkbox"/>Remember me</Label>
                        </FormGroup>
                        <Input type="submit" value="Login" className='loginBtn'/>
                    </Form>
                </ModalBody>
            </Modal>

        </React.Fragment>
        
    )
}


export default Header