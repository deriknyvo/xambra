import React from 'react';
import './ItemIcon.css';

const ItemIcon = (props) => {
  return (
    <div className="item-icon">
      <div className="icon">
        { props.icon }
      </div>

      <div className="label">
        { props.label }
      </div>

      <div className="total">
        { props.total }
      </div>
    </div>
  );
}

export default ItemIcon;