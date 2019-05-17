import React, {Component} from 'react';
import './Sidebar.css';

import CriarEtiqueta from './CriarEtiqueta';
import Section from './Section';

const itemsProcessos = ['Todos os Processos'];

class Sidebar extends Component {

  constructor(props) {
    super(props);
    this.state = {
      etiquetas: []
    };
  }

  adicionarEtiqueta = (nomeEtiqueta) => {
    this.setState({
      etiquetas: [...this.state.etiquetas, nomeEtiqueta]
    });
  }

  render() {
    return(
      <aside>
        <Section label="Processos" items={itemsProcessos}/>
        <Section label="Etiquetas" items={this.state.etiquetas} />
        <CriarEtiqueta etiquetas={this.state.etiquetas} addEtiqueta={this.adicionarEtiqueta} />
      </aside>
    );
  }
}

export default Sidebar;