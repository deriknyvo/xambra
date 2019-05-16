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
         items && items.map(({ icon, label, count }) => {
            return <ItemIcon icon={icon} label={label} total={count} />
          })
        } 
      </div>

    </section>
  );
}

export default Section;