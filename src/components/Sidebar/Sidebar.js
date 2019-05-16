import React from 'react';
import './Sidebar.css';

import Section from './Section';
import tags from './__mock__/tags';

const itemsProcessos = [
  {
    icon: 'A',
    label: 'Todos os Processos',
    count: 5
  }
];

const etiquetas = [];

const Sidebar = () => {
  return (
    <aside>
      <Section label="Processos" items={itemsProcessos}/>
      <Section label="Etiquetas" items={tags} />

      <div>
        <button> Criar Etiqueta </button>
      </div>
    </aside>
  );
}

export default Sidebar;