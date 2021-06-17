import React from 'react';
import './Style/App.css';
import Producto from './Components/Producto';
import Titulo from './Components/Titulo';
import Menu from './Components/Menu';
import {Container, Row} from 'reactstrap';
import {entradas, pizzas, empanadas, sandwichs} from './db/productos.json';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      entradas,
      pizzas,
      empanadas,
      sandwichs
    };
  }
  render(){
    const arregloEntradas = this.state.entradas.map(
      (entradas, i) =>{
        return(
          <Producto
          key = {i}
          nombre = {entradas.nombre}
          descripcion = {entradas.descripcion}
          imagen = {entradas.imagen}
          precio = {entradas.precio}
          />
        )
      }
    );

    const arregloPizzas = this.state.pizzas.map(
      (pizzas, i) =>{
        return(
          <Producto
          key = {i}
          nombre = {pizzas.nombre}
          descripcion = {pizzas.descripcion}
          imagen = {pizzas.imagen}
          precio = {pizzas.precio}
          />
        )
      }
    );

    const arregloEmpanadas = this.state.empanadas.map(
      (empanadas, i) =>{
        return(
          <Producto
          key = {i}
          nombre = {empanadas.nombre}
          descripcion = {empanadas.descripcion}
          imagen = {empanadas.imagen}
          precio = {empanadas.precio}
          />
        )
      }
    );

    const arregloSandwichs = this.state.sandwichs.map(
      (sandwichs, i) =>{
        return(
          <Producto
          key = {i}
          nombre = {sandwichs.nombre}
          descripcion = {sandwichs.descripcion}
          imagen = {sandwichs.imagen}
          precio = {sandwichs.precio}
          />
        )
      }
    );

    return (
      <Container>
        <Menu titulo ="Carta Gastronomica"/>
        <Titulo titulo = "Entradas" />
        <Row>
          {arregloEntradas}
        </Row>
        <Titulo titulo = "Pizzas" />
        <Row>
          {arregloPizzas}
        </Row>
        <Titulo titulo = "Empanadas" />
        <Row>
          {arregloEmpanadas}
        </Row>
        <Titulo titulo = "Sandwichs" />
        <Row>
          {arregloSandwichs}
        </Row>
      </Container>
    );

  }
}


export default App;
