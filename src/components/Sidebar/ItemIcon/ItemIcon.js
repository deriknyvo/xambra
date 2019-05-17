import React from 'react';
import './ItemIcon.css';

const ItemIcon = (props) => {
  return (
    <div className="item-icon">
      <div className="label">
        { props.label }
      </div>
    </div>
  );
}

export default ItemIcon;