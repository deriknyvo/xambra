import React, {Component} from 'react';

class CriarEtiqueta extends Component {

  constructor(props) {
    super(props);
    this.state = {
      aberto: false,
      nomeEtiqueta: ''
    };
  }

  mostrarInput = () => {
    this.setState({
      aberto: true
    });
  }

  esconderInput = () => {
    this.setState({
      aberto: false
    }, () => {
      this.setState({
        nomeEtiqueta: ''
      });
    });

    this.props.addEtiqueta(this.state.nomeEtiqueta);
  }

  criarEtiqueta = (event) => {
    this.setState({
      nomeEtiqueta: event.target.value
    });
  }

  render() {
    return (
      <div>
        {
          !this.state.aberto 
        ? <button onClick={this.mostrarInput}> Criar Etiqueta </button>
        : <div>
            <input type="text" placeholder="Nome da etiqueta" value={this.state.nomeEtiqueta} onChange={this.criarEtiqueta} />
            <button onClick={this.esconderInput}>ok</button>
          </div>
        }
      </div>
    );
  }
}

export default CriarEtiqueta;