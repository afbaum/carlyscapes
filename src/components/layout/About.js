import React from 'react';
import carley from '../images/carley.jpg';

const About = () => {
  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-sm align-self-center">
          <h1 className='text-center display-3'>Carly Passmore</h1>
          <h3 className='text-center'>Owner/Operator</h3>
        </div>
        <div className="col-sm">
          <img className="card-img" src={carley} alt=""/>
        </div>
        <div className="col-sm align-self-center">
          <p className='text-center lead'>Carly Scapes works hard to ensure every job is done
          right the first time. We are dedicated to providing the best possible services to every costomer. </p>
        </div>
      </div>
    </div>
  )
};

export default About;
