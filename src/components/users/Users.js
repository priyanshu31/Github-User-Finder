import React from 'react'
import UserItem from './UserItem.js'


function users(props) {
    
    let cardstyle = {
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gridGap: '1.2rem'
    };

    if(props.loading) {
        return (
            <div> 
                Loading...
            </div>
        )
    } else {
        return (
            <div style={cardstyle}>
                {
                    props.users.map((user) => (
                        <UserItem key={user.id} user={user}/>
                    ))
                }
            </div>
        )
    }

}

export default users
