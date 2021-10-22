import React, {useState} from 'react'

const SearchBar = ({ onFormSubmit }) => {
    const [term, setTerm] = useState('')
    
    const onInputChange = (e) => {
            setTerm(e.target.value)
    }

    const handleFormSubmit = (e) => {
        e.preventDefault()
        onFormSubmit(term)
    }
    return (
        <div className="search-bar ui segment">
            <form className="ui form" onSubmit={handleFormSubmit}>
                <div className="field">
                <label className="">Video Search</label>
                <input
                    placeholder="Enter search..."
                    type="text"
                    value={term}
                    onChange={onInputChange}
                    />
                </div>
            </form>
        </div>
    )
}

export default SearchBar