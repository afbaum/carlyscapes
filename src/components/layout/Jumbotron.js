import React from 'react';
import wheel from '../images/grass.jpg';

const Jumbo = () => {
  return (
    <div className="card bg-dark text-white">
      <img className="card-img" src={wheel} alt=""/>
      <div className="card-img-overlay d-flex">
        <div className="my-auto mx-auto text-center">
          <h1 className="card-title display-1 font-weight-bold">Carly Scapes</h1>
          <h1 className="card-text">Never send a man to do a Woman's job!</h1>
        </div>
      </div>
    </div>
  )
};

export default Jumbo;
