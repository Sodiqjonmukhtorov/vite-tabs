import React from 'react'

export const Users = () => {
    return (
        <div className='project'>
        <h1 className='title'>USER NAME</h1>
        <div className='input_div'>
        <input type="text" placeholder='USER'/>
        <input type='password' placeholder='PAROL' />
        </div>
        <button className='btn'>
            SIGIN
        </button>

    </div>
    )
}

export default Users
