import React from 'react';

const Service = () => {
  return (
    <div className='my-4'>
      <h2 className='mt-3'> Services </h2>
      <hr/>
      <div className="row">
        <div className="col-sm-6">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Turf Maintenance</h5>
              <hr/>
              <p>Lawn Mowing, Weed Eating, Edging, Dethatching, Aeration, Rolling, Sod </p>
            </div>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Landscaping</h5>
              <hr/>
              <p>Mulch or Decorative Stone installation, Tree & Srub trimming or removal, Tree, Srub, Flower and Planter installation, Retaining Walls </p>
            </div>
          </div>
        </div>
      </div>
      <div className="row mt-3">
        <div className="col-sm-6">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Seasonal Maintenance</h5>
              <hr/>
              <p>Leaf Remocal, Landscape Bed Weeding, Holiday Decorations</p>
            </div>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Other Services</h5>
              <hr/>
              <p>Snow Removal, Pooper Scooper</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Service;
