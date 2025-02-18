import React from 'react'
import topData from'../Mainp/reviewList1.json'
import '../style/main.scss'

const Top = () => {
    return (
        <div className='page tops'>
            <h1>상의</h1>
        <div className='outbox'>
            {topData.map(item=>(
                <div className='inbox' key={item.id}> 
                <img src={item.img}/>
                <h3>{item.Bname}</h3>
                <h5>{item.price}원</h5>
                </div>
            ))}
            </div>
        </div>
    )
}

export default Top