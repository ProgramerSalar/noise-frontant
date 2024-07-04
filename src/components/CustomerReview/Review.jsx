import React from 'react'
import ReviewCard from './ReviewCard'
// import ReviewData from "../../assets/data/Review.json"

const Review = ({Reviews}) => {
    // console.log(ReviewData.Reviews[0].name)
    // const Review = ReviewData.Reviews[0]
    // console.log(Review.name)
  return (
    <div className='review-container-section'>

    


        {
            
            Reviews ? (
                Reviews.map((i) => {
                    // console.log(i.name)
    
                    return(
                        <ReviewCard review={i}/>
    
                    )
    
    
    
                    
                })
            ) : null
            
          
        }
        
    </div>
  )
}

export default Review