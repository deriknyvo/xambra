import React from 'react';
import './Section.css';

import ItemIcon from '../ItemIcon';

const Section = ({label, items}) => {
  return (
    <section className="section">

      <div className="label">
        { label }
      </div>

      <div className="items">
        {
         items && items.map((label, index) => {
            return <ItemIcon label={label} key={index} />
          })
        } 
      </div>

    </section>
  );
}

export default Section;