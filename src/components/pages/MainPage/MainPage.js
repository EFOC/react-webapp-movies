import React from 'react';
import ImageGallery from 'react-image-gallery';
import logo from '../../../images/bee-movie-poster.jpg';

class MainPage extends React.Component {
    state = {
        loading: true,
        searchEmpty: undefined,
        book: undefined,
        images: []
    };

    constructor() {
        super();
        const poster = {
            original: logo,
            thumbnail: logo
        }
        const image = [poster, poster, poster];
        this.state = {
            images: image,
            loading: false
        };

    }

    componentDidMount() {
    }

    async getBooks(searchTitle) {
        const response = await fetch(`http://localhost:8080/getbooks?bookname=${searchTitle}`);
        const data = await response.json();
        this.setState(() => ({book: data.book_name}))
    }

    handleGetBook = (e) => {
        e.preventDefault();
        const userVal = e.target.elements.bookname.value.trim();
        if (userVal === '') {
            this.setState(() => ({searchEmpty: "Don't leave it empty"}));
            return;
        }
        this.setState(() => ({searchEmpty: undefined, book: 'Loading...'}));
        this.getBooks(userVal);
    }
    
    renderLeftNav = (onClick, disabled) => (
        <button className="image-gallery-button-nav image-gallery-left-button" onClick={onClick}>{`<`}</button>
    );

    renderRightNav = (onClick, disabled) => (
        <button className="image-gallery-button-nav image-gallery-right-button" onClick={onClick}>{`>`}</button>
    )

    render() {
        return (
            <div className="body-container">
                <div className="image-gallery-container">
                    <ImageGallery 
                        items={this.state.images}
                        showFullscreenButton={false}
                        showPlayButton={false}
                        renderLeftNav={(onClick, disabled) => this.renderLeftNav(onClick, disabled)}
                        renderRightNav={(onClick, disabled) => this.renderRightNav(onClick, disabled)}
                        thumbnailPosition={"right"}
                    />
                </div>
                <h1>Enter a book name!</h1>
                {this.state.searchEmpty}
                <form onSubmit={this.handleGetBook}>
                    <input type="text" name="bookname"/>
                    <br />
                    {this.state.book}
                    <button type="submit">Get books</button>
                </form>
            </div>
            
        )
    }
}

export default MainPage;