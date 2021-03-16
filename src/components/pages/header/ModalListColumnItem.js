import React from 'react';

const ModalListColumnItem = (props) => {
    return (
        <div className="col-12 col-md-4 ">
            <div className="modal-list-column">
                <div className="modal-list-column-item container">
                    <h3>{props.title}</h3>
                    <ul>
                        {
                            props.items.map(item => (<li className="modal-list-column-item-list-item">{item}</li>))
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default ModalListColumnItem;