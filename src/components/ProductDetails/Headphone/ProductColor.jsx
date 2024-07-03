import React from "react";

const ProductColor = ({ colors = [] }) => {
  console.log("colors", colors);
  return (
    <div className="product-color">
      <h2>{colors[0]}</h2>

      <p className="color1"
       style={{
        backgroundColor:colors[0],
        color:colors[0],
        border:"2px solid black",
        borderRadius:"20rem",
        height:"22px",
        width:"22px"
        
        }}
        ></p>
      <p></p>
      <p  
      style={{
        backgroundColor:colors[1],
        color:colors[1],
        border:"2px solid black",
        borderRadius:"20rem",
        height:"22px",
        width:"22px"
        
        }}
      className="color2"></p>
      <p></p>
      <p 
      style={{
        backgroundColor:colors[2],
        color:colors[1],
        border:"2px solid black",
        borderRadius:"20rem",
        height:"22px",
        width:"22px"
        
        }}
      className="color3"></p>
      <p></p>
      <p 
      style={{
        backgroundColor:colors[3],
        color:colors[1],
        border:"2px solid black",
        borderRadius:"20rem",
        height:"22px",
        width:"22px"
        
        }}
      className="extra-color"></p>
    </div>
  );
};

export default ProductColor;
