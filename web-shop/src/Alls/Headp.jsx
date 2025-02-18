import React from 'react'
import '../style/main.scss'

const Headp = () => {
    return (
        <div className='Headp'>
        <div className='headLogo'>My Books</div>
        <div className='headNav'>
        <ul>
            <li><Link to='/' end>Home</Link></li>
            <li><Link to='/subAll' >All</Link></li>
            <li><Link to='/subBest' >Best</Link></li>
            <li><Link to='/subNew' >New</Link></li>
            <li><Link to='/subEvent' >Event</Link></li>
        </ul>
        </div>
        </div>
    )
}

export default Headp