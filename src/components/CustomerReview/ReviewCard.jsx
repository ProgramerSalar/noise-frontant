import React from 'react'
import { FaStar } from 'react-icons/fa'

const ReviewCard = ({review}) => {
    // console.log(review.image)
  return (
    <div className="two-section-found-in-one-contant">
<div className="review-card-main-container">
        <div className="image-section">
            <img src={review.image} alt="review-image" />
        </div>

        <div className="contant-section">
            <h5>{review.name}</h5>
            <span className='user'>{review.user}</span>
            <span>{review.Date}</span>
            <div className="star-section">
                <span>
                <FaStar/>
                <FaStar/>
                <FaStar/>
                <FaStar/>
                <FaStar/>
                    
                </span>
            </div>
            <p className='review-contant'>{review.contant}</p>

        </div>
    </div>
    
    </div>
    
  )
}

export default ReviewCard


