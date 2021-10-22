import React from 'react'

class SearchBar extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            term: ''
        };
    }

    onInputChange = (e) => {
        this.setState({
            term: e.target.value
        })
    }

    onFormSubmit = (e) => {
        e.preventDefault()

        console.log('<<< SUBMITTED>>>>');
        this.props.onFormSubmit(this.state.term)
    }
    render() {
        return (
            <div className="search-bar ui segment">
                <form className="ui form" onSubmit={this.onFormSubmit}>
                    <div className="field">
                    <label className="">Video Search</label>
                    <input
                        placeholder="Enter search..."
                        type="text"
                        value={this.state.term}
                        onChange={this.onInputChange}
                        />
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchBar