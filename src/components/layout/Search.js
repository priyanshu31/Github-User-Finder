import React, { useState, useEffect } from 'react'

export default function Search(props) {

    const [searchtxt, setSearchtxt] = useState('');

    const updateSearch = e => {
        setSearchtxt(e.target.value);
    }

    const Submit = () => {
        if (searchtxt === '')
            props.setAlerts('Please Enter Something', 'light');
        else {
            props.searchUsers(searchtxt);
            setSearchtxt('');
        }
    }

    return (
        <div>
            <input type="text" placeholder="Search..." value={searchtxt} onChange={updateSearch} />
            <input type="submit" className="btn btn-dark btn-block" onClick={Submit} />
            {props.showClear && (
                <button className="btn btn-light btn-block" onClick={props.clearUsers}>Clear</button>
            )}

        </div>
    )
}
