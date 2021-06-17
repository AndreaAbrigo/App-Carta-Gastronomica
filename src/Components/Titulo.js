import React from 'react';
import '../Style/Titulo.css';

class Titulo extends React.Component{
    render(){
        return(
            <p className="Titulo">{this.props.titulo}</p>
        )
    }
}

export default Titulo;