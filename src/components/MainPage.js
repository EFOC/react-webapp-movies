import React from 'react';

class MainPage extends React.Component {
    state = {
        loading: true,
        searchEmpty: undefined,
        book: undefined
    };

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

    render() {
            return (
            <div>
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