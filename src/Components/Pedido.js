import React from 'react';
import {Button, Popover, PopoverBody, PopoverHeader, Table} from 'reactstrap';
import '../Style/Pedido.css';
import {pedido} from '../db/pedido.json'

class Pedido extends React.Component{
    constructor(){
        super();
        this.state = {
            popoverOpen:false,
            pedido
        };
        this.toggle=this.toggle.bind(this);
    }

    toggle(){
        this.setState(prevState => ({
            popoverOpen: !prevState.popoverOpen
        }));
    }

    render(){
        const arregloPedido = this.state.pedido.map(
            (pedido, i) => {
                return (
                    <tr>
                        <td>{pedido.nombre}</td>
                        <td>${pedido.precio}</td>
                    </tr>
                )
            }
        )
        var total_pedido = 0
        this.state.pedido.map(
            (pedido, i) => {
                return (
                    total_pedido += parseInt(pedido.precio)
                );
            }
        )
        return(
            <div>
                <Button id="Popover1" color="dark">
                    <p className="MiPedido">Mi pedido</p>
                    <span className="material-icons">shopping_cart </span>
                </Button>
                <Popover target="Popover1" placement="bottom" isOpen={this.state.popoverOpen} toggle={this.toggle}>
                    <PopoverHeader></PopoverHeader>
                    <PopoverBody>
                        <Table className="Table">
                            <thead>
                                <tr>
                                    <th>Producto</th>
                                    <th>Precio</th>
                                </tr>
                            </thead>
                            <tbody>
                                {arregloPedido}
                            </tbody>
                            <tfoot>
                                <tr>
                                    <th>Total</th>
                                    <th>${total_pedido}</th>
                                </tr>
                            </tfoot>
                        </Table>
                        <a className="Btn" href="#">CONFIRMAR PEDIDO</a> 
                    </PopoverBody>
                </Popover>
            </div>
        );
    }
}

export default Pedido;
