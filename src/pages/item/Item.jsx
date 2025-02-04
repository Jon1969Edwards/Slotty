import React from 'react';
import './item.css'
import { Link } from 'react-router-dom';
import creator from '../../assets/seller2.png'
import item from '../../assets/slot.png'

const Item = () => {



  return( 
      <div className='item section__padding'>
        <div className="item-image">
          <img src={item} alt="item" />
        </div>
          <div className="item-content">
            <div className="item-content-title">
              <h1>Slot</h1>
              <p>From <span>4.5 ETH</span> ‧ 20 of 25 available</p>
            </div>
            <div className="item-content-creator">
              <div><p>Creater</p></div>
              <div>
                <img src={creator} alt="creator" />
                <p>Rian Leon </p>
              </div>
            </div>
            <div className="item-content-detail">
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
            </div>
            <div className="item-content-buy">
              <Link to={`/pages/slots/Slots.jsx`}>
                <button className="primary-btn">Play For 4.5 ETH</button>
              </Link>
              <Link>
                <button className="secondary-btn">Another Button</button>
              </Link>
            </div>
          </div>
      </div>
  )
};

export default Item;
