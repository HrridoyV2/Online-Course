import React, { useState, useEffect } from 'react';
import './Details.css';

function Details(props) {
  const {name, price, instructor} = props.course;
  return (
    <div className="col-md-6 col-lg-4">
      <header>
        <div className="card">
        <div className="card-body">
        <h3 className="card-title">{name}</h3>
    <div className="d-flex">
      <h5 className="">Intructor: {instructor}</h5>
    <h5 className="ml-auto">Price: ${price}</h5>
    </div>
    
      </div>
      <button 
    onClick={() => props.handleAddCourse(props.course)}
    className="btn btn-success btn-block">Enroll Now</button>
        </div>
      </header>
    </div>
  );
} 



export default Details;
