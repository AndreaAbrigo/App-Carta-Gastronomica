import React from 'react';
import {CardImg,Button, Container, Modal, ModalBody, ModalFooter, ModalHeader, CardSubtitle} from 'reactstrap';
import '../Style/DetalleProducto.css';
import {pedido} from '../db/pedido.json';

class DetalleProducto extends React.Component{
    constructor(props){
        super();

        // State hace referencia al estado del componente, el cual se actualiza antes de que el componente sea procesado y renderizado
        this.state = {
            Modal:false,
            pedido
        };
        
        this.toogle = this.toogle.bind(this);
        this.agregarPedido = this.agregarPedido.bind(this);
    }

    toogle(){
        this.setState(prevState => ({
            modal: !prevState.modal
        }));
    }

     agregarPedido(){
        pedido.push({
            "nombre":this.props.props.nombre,
            "precio": this.props.props.precio
        });
        this.setState(prevState => ({
            modal: !prevState.modal
        }));
    } 

    render(){
        return(
            <Container>
                <Button className="boton" onClick={this.toogle}>Detalles del plato</Button>
                <Modal isOpen={this.state.modal}>
                    <ModalHeader>{this.props.props.nombre}</ModalHeader>
                    <ModalBody>
                        <CardImg src={this.props.props.imagen} />
                        <CardSubtitle className="cardSubtitle">Detalles del plato</CardSubtitle>
                        {this.props.props.descripcion}
                        <p className="precio">Precio: ${this.props.props.precio}</p>
                    </ModalBody>
                    <ModalFooter className="modalFooter">
                        <Button color="primary" onClick={this.agregarPedido}>Agregar al pedido</Button>
                        <Button color="secondary" onClick={this.toogle}>Volver</Button>
                    </ModalFooter>
                </Modal>
            </Container>
            );
        }
    }

export default DetalleProducto;

