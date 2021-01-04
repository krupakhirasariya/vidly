import React from 'react';

const ListGroup = ({ items, textProperty, valueProperty, onItemSelected, selectedItems }) => {
    return <ul className="list-group">
        {items.map(m =>
            <li onClick={() => onItemSelected(m)} key={m[valueProperty]} className={m === selectedItems ? "list-group-item active" : "list-group-item"}>
                {m[textProperty]}
            </li>
        )}

    </ul>;
}

ListGroup.defaultProps = {
    textProperty: 'name',
    valueProperty: '_id'
};

export default ListGroup;