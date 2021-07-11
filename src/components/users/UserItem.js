import React from 'react'
import PropTypes from 'prop-types'


function useritem(props) {

    return (
        <div className="card text-center">
            <img src={props.user.avatar_url} alt="" className="round-img" style={{width: "60px"}}/>
            <h5>{props.user.login}</h5>
            <div>
                <a href={props.user.html_url} className="btn btn-dark btn-sm my-2" target="_blank">Github Profile</a>
            </div>
        </div>
    )
}

useritem.propTypes = {

}

export default useritem

