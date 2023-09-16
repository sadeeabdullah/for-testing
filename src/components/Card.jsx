import React from 'react';

const Card = () => {
  const title = 'hello my custom title';
  const myobj = {
    views:'110k'
  }
  const myResult = (a,b) =>{
    return a + b;
  }
    return (
        <div>
            <div className="card  bg-base-100 shadow-xl">
  <figure> <img src="./Images/shape.png" alt="" /></figure>
  <div className="card-body">
  <h1>{title}</h1>

  <p>{myobj.views}</p>
  <p>my result is {myResult(2,16)}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
            
        </div>
    );
};

export default Card;