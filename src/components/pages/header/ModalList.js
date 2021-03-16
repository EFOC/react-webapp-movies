import React from 'react';
import Modal from 'react-modal';
import ModalListColumnItem from './ModalListColumnItem';


const ModalList = (props) => {
    const titles = ['Movies', 'Celebs', 'TV Show', 'Watch', 'Awards & Events', 'Community'];
    const items = [
        ['Release Calendar', 'DVD & Blu-ray', 'Top Rated Movies', 'Most Popular Movies'],
        ['Born', 'Most Popluar Celebs', 'Celebrity News'],
        [`What's on TV & Streaming`, `Top Rated Shows`, `Most Popular Shows`],
        [`What to Watch`, `Latest Trailers`, `IMDb Originals`, `IMDb Picks`, `IMDb Podcasts`],
        [`Oscars`, `Best Picture Winners`, `Golden Globes`, `Emmys`],
        [`Help Center`, `Contrbutor Zone`, `Polls`]
    ];

    function test() {
        const arr = [];
        for(const i = 0; i < titles.length; i++) {
            
        }
    }

    return (
        <div>
            <Modal isOpen={props.isOpen}>
                <div class="modal-header">
                    <h3>IMDb</h3>
                    <p className="modal-exit-icon" onClick={props.toggle}>X</p>
                </div>
                <div className="container-fluid">
                    <div className="modal-list-column-container row">
                        {
                            titles.map((title, index) => <ModalListColumnItem  title={title} items={items[index]}/>)
                        }
                    </div>
                </div>
                
            </Modal>
        </div>
    )
}

export default ModalList;