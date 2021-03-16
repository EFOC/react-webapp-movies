import React from 'react';
import HeaderListModal from './HeaderListModal';
import Dropdown from 'react-dropdown';

class Header extends React.Component {
    state = {
        modalOpen: false,
        options: ['All', 'Titles', 'TV Episodes', 'Celebs', 'Companies'] 
    }

    setModalOpen = () => {
        // this.setState((state) => {
        //     return {modalOpen: (!state.modalOpen ? true : false)}
        // });
    }
    render() {
       
        return (
        <div className="header-container">
            <div className="header">
                <h1 id="header-logo-button">IMDb</h1>
                <HeaderListModal />
                <div id="header-searchbar-container">
                    <Dropdown 
                        value={this.state.options[0]} 
                        options={this.state.options} 
                        />
                    <input id="header-seachbar" input="text" placeholder="Search IMDb" />
                </div>
                <h2>IMDBPro</h2>
                <h2>Watchlist</h2>
                <h2>Sign In</h2>
            </div>
        </div>
    )}
}

export default Header;