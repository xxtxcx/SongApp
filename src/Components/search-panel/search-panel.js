import { useState, useEffect } from 'react';
import './search-panel.css';

export const SearchPanel = (props) => {

    const [term, setTerm] = useState("");

    const onUpdateSearch = (e) => {
        const term = e.target.value;
        setTerm(term);
        props.onUpdateSearch(term); 
    }

    useEffect(() => {
        setTerm(props.term)
    }, [term])

        return(
            <input 
                type="text"
                className="form-control search-input"
                placeholder="Find needed song.."
                value={props.term}
                onChange={onUpdateSearch}
                />
    
        )
}
