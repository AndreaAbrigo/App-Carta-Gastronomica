import React from 'react';
import {Navbar, NavItem, Nav, NavbarBrand} from 'reactstrap';
import '../Style/Menu.css';
import Pedido from './Pedido';

class Menu extends React.Component{
    render(){
        return(
            <Navbar>
                <NavbarBrand className="Icon" href="/"><img width="200px" src="https://img.flaticon.com/icons/png/512/51/51771.png?size=1200x630f&pad=10,10,10,10&ext=png&bg=FFFFFFFF" alt="" /></NavbarBrand>
                <Nav className="MiPedido">
                    <NavItem>
                        <Pedido/>
                    </NavItem>
                </Nav>
            </Navbar>
        )
    }
}

export default Menu;