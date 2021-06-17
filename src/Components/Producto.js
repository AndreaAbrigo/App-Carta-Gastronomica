import React from 'react';
import {CardSubtitle, CardTitle, CardBody, CardImg,Col, Card} from 'reactstrap';
import '../Style/Producto.css';
import DetalleProducto from './DetalleProducto';

class Producto extends React.Component{
    render(){
        return(
            <Col sm="4">
                <Card className="Card">
                    <CardImg className="Image" src={this.props.imagen}/>
                    <CardBody >
                        <CardTitle className="Title">{this.props.nombre}</CardTitle>
                        <CardSubtitle className="SubTitle">Precio ${this.props.precio}</CardSubtitle>
                        <DetalleProducto props={this.props}/>
                    </CardBody>
                </Card>
            </Col>
        )
    }
}

export default Producto;